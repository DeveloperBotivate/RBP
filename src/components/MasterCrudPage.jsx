import React, { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import ModalForm from './ModalForm';
import DataTable from './DataTable';
import SearchableDropdown from './SearchableDropdown';

/**
 * MasterCrudPage
 * Config-driven list + add/edit/delete page used by the Master tabs.
 *   title     – singular label, e.g. "Product"
 *   crud      – { getAll, create, update, remove }
 *   columns   – [{ key, label, render?(row) }]  (an Actions column is appended automatically)
 *   fields    – form fields: { key, label, type: 'text'|'number'|'select'|'multiselect', required?,
 *               options?: [{ value, label }] | () => [...] }
 *   filters   – column keys that get a searchable filter dropdown above the table (options come from the rows)
 *   autoDate  – row key stamped with today's date on create (e.g. 'createdDate')
 */
const inputCls = 'w-full border border-gray-300 rounded px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-[11px] md:text-[13px] h-[30px] md:h-[34px]';
const labelCls = 'block text-[11px] md:text-[13px] text-gray-700 uppercase tracking-tight';

const today = () => new Date().toISOString().slice(0, 10);
const resolveOptions = (f) => (typeof f.options === 'function' ? f.options() : f.options || []);

export default function MasterCrudPage({ title, crud, columns, fields, autoDate, filters = [], setHeaderAction, searchQuery = '' }) {
  const [rows, setRows] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editRow, setEditRow] = useState(null);
  const [form, setForm] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [filterValues, setFilterValues] = useState({});

  const load = () => setRows(crud.getAll());
  useEffect(() => { load(); }, []);
  useEffect(() => { setCurrentPage(1); }, [searchQuery, filterValues]);

  const emptyForm = () => Object.fromEntries(fields.map(f => [f.key, f.type === 'multiselect' ? [] : '']));

  const openAdd = useCallback(() => { setEditRow(null); setForm(emptyForm()); setShowForm(true); }, []);
  const openEdit = (row) => { setEditRow(row); setForm({ ...emptyForm(), ...row }); setShowForm(true); };
  const closeForm = () => { setShowForm(false); setEditRow(null); };

  // Filters + Add button are handed to the Master header row (shown on one line with the search box)
  const filterBar = filters.length > 0 && (
    <>
      {filters.map(key => {
        const label = columns.find(c => c.key === key)?.label || key;
        const values = [...new Set(rows.flatMap(r => (Array.isArray(r[key]) ? r[key] : [r[key]])).filter(v => v !== undefined && v !== null && v !== ''))].sort();
        return (
          <div key={key} className="flex-1 min-w-[140px]">
            <SearchableDropdown
              options={[{ value: '', label: `All ${label}` }, ...values.map(v => ({ value: String(v), label: String(v) }))]}
              value={filterValues[key] || ''}
              onChange={(v) => setFilterValues(prev => ({ ...prev, [key]: v }))}
              placeholder={`All ${label}`}
              height="h-[34px]"
            />
          </div>
        );
      })}
    </>
  );

  useEffect(() => {
    if (!setHeaderAction) return;
    setHeaderAction({
      filters: filterBar || null,
      action: (
        <button
          onClick={openAdd}
          className="bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center gap-2 px-4 h-[34px] text-sm font-semibold shadow-sm transition whitespace-nowrap"
        >
          <Plus size={16} /> Add {title}
        </button>
      )
    });
  }, [setHeaderAction, openAdd, title, rows, filterValues]);
  useEffect(() => () => setHeaderAction && setHeaderAction(null), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const missing = fields.find(f => f.required && (Array.isArray(form[f.key]) ? !form[f.key].length : !String(form[f.key] ?? '').trim()));
    if (missing) { toast.error(`${missing.label} is required`); return; }
    const data = Object.fromEntries(fields.map(f => [f.key, typeof form[f.key] === 'string' ? form[f.key].trim() : form[f.key]]));
    if (editRow) {
      crud.update({ ...editRow, ...data });
      toast.success(`${title} updated`);
    } else {
      crud.create({ ...data, ...(autoDate ? { [autoDate]: today() } : {}) });
      toast.success(`${title} added`);
    }
    load();
    closeForm();
  };

  const handleDelete = (row) => {
    if (!window.confirm(`Delete this ${title.toLowerCase()}?`)) return;
    crud.remove(row.id);
    load();
    toast.success(`${title} deleted`);
  };

  const display = (row, col) => {
    if (col.render) return col.render(row);
    const v = row[col.key];
    if (Array.isArray(v)) return v.length ? v.join(', ') : '-';
    return v === undefined || v === null || v === '' ? '-' : String(v);
  };

  const q = searchQuery.toLowerCase();
  const sortedRows = [...rows]
    .filter(r => filters.every(k => !filterValues[k] || (Array.isArray(r[k]) ? r[k].includes(filterValues[k]) : String(r[k] ?? '') === filterValues[k])))
    .filter(r => !q || Object.values(r).some(val => String(val).toLowerCase().includes(q)))
    .reverse();
  const totalPages = Math.ceil(sortedRows.length / itemsPerPage);
  const paginatedRows = sortedRows.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const headers = [...columns.map(c => c.label), 'Actions'];

  const actionButtons = (row) => (
    <div className="flex items-center justify-center gap-1.5">
      <button onClick={() => openEdit(row)} title="Edit" className="inline-flex items-center justify-center p-1.5 rounded bg-indigo-50 text-indigo-600 hover:bg-indigo-100 border border-indigo-200 transition-colors">
        <Pencil size={13} />
      </button>
      <button onClick={() => handleDelete(row)} title="Delete" className="inline-flex items-center justify-center p-1.5 rounded bg-red-50 text-red-600 hover:bg-red-100 border border-red-200 transition-colors">
        <Trash2 size={13} />
      </button>
    </div>
  );

  const renderRow = (row) => (
    <tr key={row.id} className="hover:bg-indigo-50/30 transition-colors border-b border-gray-100">
      {columns.map(col => (
        <td key={col.key} className="px-3 py-2 text-center text-[13px] text-gray-800 whitespace-nowrap">{display(row, col)}</td>
      ))}
      <td className="px-3 py-2 text-center whitespace-nowrap">{actionButtons(row)}</td>
    </tr>
  );

  const renderCard = (row) => (
    <div key={row.id} className="bg-white rounded-lg border border-indigo-50 shadow-sm p-3 space-y-2">
      <div className="space-y-1">
        {columns.map(col => (
          <div key={col.key} className="flex justify-between gap-3 text-[12px]">
            <span className="text-gray-400 uppercase tracking-wide text-[10px]">{col.label}</span>
            <span className="text-gray-800 text-right">{display(row, col)}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-100 pt-2">{actionButtons(row)}</div>
    </div>
  );

  const renderField = (f) => {
    if (f.type === 'select') {
      return (
        <SearchableDropdown
          options={resolveOptions(f)}
          value={form[f.key]}
          onChange={(v) => setForm(prev => ({ ...prev, [f.key]: v }))}
          placeholder={`Select ${f.label.toLowerCase()}`}
        />
      );
    }
    if (f.type === 'multiselect') {
      const opts = resolveOptions(f);
      const selected = form[f.key] || [];
      const toggle = (val) => setForm(prev => ({
        ...prev,
        [f.key]: selected.includes(val) ? selected.filter(x => x !== val) : [...selected, val]
      }));
      return (
        <div className="border border-gray-300 rounded max-h-32 overflow-y-auto p-1.5 space-y-1">
          {opts.length === 0 && <p className="text-[12px] text-gray-400 px-1">Nothing to select yet</p>}
          {opts.map(o => (
            <label key={o.value} className="flex items-center gap-2 text-[12px] text-gray-700 cursor-pointer px-1">
              <input type="checkbox" checked={selected.includes(o.value)} onChange={() => toggle(o.value)} />
              {o.label}
            </label>
          ))}
        </div>
      );
    }
    return (
      <input
        type={f.type === 'number' ? 'number' : 'text'}
        value={form[f.key] ?? ''}
        onChange={(e) => setForm(prev => ({ ...prev, [f.key]: e.target.value }))}
        placeholder={`Enter ${f.label.toLowerCase()}`}
        className={inputCls}
      />
    );
  };

  return (
    <div className="p-2 sm:p-4 md:p-6 space-y-3 flex flex-col h-full min-h-0">
      <div className="master-card flex-1 min-h-0 bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
        <DataTable
          headers={headers}
          data={paginatedRows}
          renderRow={renderRow}
          renderCard={renderCard}
          minWidth="700px"
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          onPageChange={setCurrentPage}
          onItemsPerPageChange={(val) => { setItemsPerPage(val); setCurrentPage(1); }}
          totalResults={sortedRows.length}
        />
      </div>

      <ModalForm
        isOpen={showForm}
        onClose={closeForm}
        title={editRow ? `Edit ${title}` : `Add ${title}`}
        onSubmit={handleSubmit}
        submitText={editRow ? 'Update' : 'Save'}
        maxWidth="max-w-md"
      >
        <div className="space-y-2">
          {fields.map(f => (
            <div key={f.key} className="space-y-1">
              <label className={labelCls}>{f.label}{f.required ? ' *' : ''}</label>
              {renderField(f)}
            </div>
          ))}
        </div>
      </ModalForm>
    </div>
  );
}
