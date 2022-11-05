import { useState, useContext } from 'react';
import { ExpenseContext } from '../ExpenseContext';
import { v4 as uuidv4 } from 'uuid';

function Form() {
  const clearFormData = {
    title: "",
    amount: 0,
    id: "",
    date: "",
    type: 'expense'
  }
  const [formData, setFormData] = useState(clearFormData);
  const [type, setType] = useState('expense');
  const { addExpense } = useContext(ExpenseContext);

  const classes = {
    row: "form-row mt-3",
    label: "block text-sm font-medium text-gray-500",
    input: "mt-1 py-2 px-4 block w-full rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm",
  }

  const handleFormClick = () => {
    const { title, amount, date } = formData;
    if (title === 0 | amount === 0 | date === "") alert('Fill in all fields');
    addExpense({
      id: uuidv4(),
      title,
      amount,
      date,
      type
    });
    setFormData(clearFormData);
  }

  return (
    <div>
      <div className="mt-4 bg-white shadow rounded w-100 overflow-hidden">
        {/* FORM HEADER */}
        <div className="flex">
          {['expense', 'income'].map((t, i) => (
            <div
              key={i}
              onClick={() => setType(t)}
              className={`p-2 grow text-center cursor-pointer capitalize ${(type === t ? 'bg-indigo-600 text-white shadow-lg' : 'bg-gray-50')}`}
            >{t}</div>
          ))}
        </div>
        {/* FORM BODY */}
        <div className="p-4">
          <div>
            <div className={classes.row}>
              <label htmlFor="input-title" className={classes.label}>Title</label>
              <input
                type="text"
                className={classes.input}
                placeholder="Groceries"
                name="title"
                id="input-title"
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    title: event.target.value,
                  })
                }}
                value={formData.title}
              />
            </div>
            <div className={classes.row}>
              <label htmlFor="input-amount" className={classes.label}>Amount</label>
              <input
                type="number"
                id="input-amount"
                placeholder="100"
                name="amount"
                className={classes.input}
                onChange={(event) => { setFormData({ ...formData, amount: event.target.value }) }}
                value={formData.amount}
              />
            </div>
            <div className={classes.row}>
              <label htmlFor="input-date" className={classes.label}>Date</label>
              <input
                type="date"
                id="input-date"
                name="date"
                className={classes.input}
                onChange={(event) => { setFormData({ ...formData, date: event.target.value }) }}
              />
            </div>
          </div>
        </div>
        {/* FORM FOOTER */}
        <div className="mt-4 bg-gray-50 px-4 py-3 text-right sm:px-6">
          <button
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={handleFormClick}>Add</button>
        </div>
      </div>
    </div>
  )
}
export default Form