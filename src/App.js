import { useState, useEffect, useContext } from 'react';
import { ExpenseContext } from './ExpenseContext';
import Form from './components/Form';
import Expense from './components/Expense';
import Nav from './components/Nav';
import Pie from './components/Pie';

function App() {
  const { expenses } = useContext(ExpenseContext);
  const [currency, setCurrency] = useState("EUR");

  const currencyOptions = {
    "EUR": "€",
    "GBP": "£",
    "USD": "$",
  }

  useEffect(() => {
    // Apply bg-blue-50 
    document.body.style.backgroundColor = "rgb(239 246 255)";
  }, []);

  return (
    <>
      <div className="container-sm max-w-4xl mx-auto px-4">

        <Nav currency={currency} currencyOptions={currencyOptions} handleSetCurrency={(currency) => setCurrency(currency)} />

        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4">
          <Form />
          <div className="col-span-2">
            {(expenses.length > 0) &&
              expenses.map((expense, index) =>
                <Expense
                  key={index}
                  expense={expense}
                  currencySymbol={currencyOptions[currency]}
                />)}
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
          <div className="mt-5 bg-white rounded shadow p-4">
            <h2 className="text-1xl font-bold">Expenses vs Income</h2>
            Some chart showing the difference
            <Pie />
          </div>
          <div>Some list showing type of expese or topic</div>
        </div>

      </div>
    </>
  );
}

export default App;
