
import Moment from 'react-moment';
import { IoEllipsisVerticalOutline, IoTrashOutline, IoPencilSharp } from "react-icons/io5";
import { useState } from 'react'

function Expense({ expense, currencySymbol, deleteExpense }) {

  let [openMenu, setOpenMenu] = useState(false);

  const { date, type, title, amount, id } = expense;
  const isIncome = type === "income";

  return (
    <div className="mt-4 flex bg-white rounded shadow">
      <div className={`flex justify-center items-center text-2xl w-12 p-3 ${isIncome ? "bg-green-200" : "bg-red-200"}`}>{isIncome ? "+" : "-"}</div>
      <div className="flex grow items-center p-4">
        <div className="flex flex-col items-center justify-center border rounded-full w-16 h-16 mr-4">
          <Moment format="D" date={date} />
          <Moment format="MMM" date={date} />
        </div>
        <div>
          {/* <span className="text-sm rounded-full px-3 bg-green-100">{type}</span> */}
          <div className="text-sm font-semibold text-slate-900">{title}</div>
          <div className="text-1xl font-light">{currencySymbol}{amount}</div>
        </div>
        <div className="ml-auto relative">
          <IoEllipsisVerticalOutline
            onClick={() => setOpenMenu(!openMenu)}
            className="cursor-pointer"
          />
          <div className={`absolute flex p-4 bg-gray-100 right-0 top-6 ${openMenu ? "" : "hidden"}`}>
            <IoTrashOutline onClick={() => deleteExpense(id)} />
            <IoPencilSharp />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Expense;