
import { useContext } from 'react';
import { ExpenseContext } from '../ExpenseContext';
import Moment from 'react-moment';
import { IoTrashOutline } from "react-icons/io5";

function Expense({ expense, currencySymbol }) {
  const { deleteExpense } = useContext(ExpenseContext);

  const { date, type, title, amount, id } = expense;
  const isIncome = type === "income";

  return (
    <div className="mt-4 flex bg-white rounded shadow">
      <div className={`flex justify-center items-center text-2xl w-12 p-3 ${isIncome ? "bg-green-200" : "bg-red-200"}`}>{isIncome ? "+" : "-"}</div>
      <div className="flex grow items-center p-4">
        <div className="flex flex-col items-center justify-center border font-medium leading-4 border-2 border-blue-50 rounded-full w-14 h-14 mr-4">
          <Moment format="D" date={date} />
          <Moment format="MMM" date={date} />
        </div>
        <div>
          {/* <span className="text-sm rounded-full px-3 bg-green-100">{type}</span> */}
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <div className="text-1xl font-light">{currencySymbol}{amount}</div>
        </div>
        <div className="ml-auto relative">
          <IoTrashOutline
            className="cursor-pointer text-gray-600 hover:text-gray-800 text-2xl"
            onClick={() => deleteExpense(id)}
          />
        </div>
      </div>
    </div>
  );
};

export default Expense;