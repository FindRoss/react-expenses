import { useState, useEffect, useCallback } from 'react';
import Form from './components/Form';
import Expense from './components/Expense';
import Nav from './components/Nav';
import Modal from './components/Modal';


function App() {
  let [expenses, setExpenses] = useState([]);
  let [currency, setCurrency] = useState("EUR");
  let [showModal, setShowModal] = useState(false);

  const currencyOptions = {
    "EUR": "€",
    "GBP": "£",
    "USD": "$",
  }

  const fetchData = useCallback(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        setExpenses(data)
      });
  }, [])

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  useEffect(() => {
    document.body.style.backgroundColor = "rgb(239 246 255)";
  }, []);

  const handleDeleteExpense = id => {
    const filteredExpenses = expenses.filter(expense => expense.id !== id);
    // Are you sure you want to delete this item?
    // setShowModal(true);
    // Pass info into the modal...
    // How to trigger modal...
    setExpenses(filteredExpenses);
  }

  // const handleModalToggle = () => {
  //   console.log('toggling the modal bro!');
  //   setShowModal(!showModal);
  // };

  return (
    <div>
      <div className="container-sm max-w-4xl mx-auto px-4">
        <Nav currency={currency} currencyOptions={currencyOptions} handleSetCurrency={(currency) => setCurrency(currency)} />
        {/* {showModal ? <Modal toggleModal={handleModalToggle} /> : null} */}
        {/* Budget */}
        <div className="flex justify-end"><span className="text-2xl font-light">{currencyOptions[currency]}800</span></div>
        {/* Add and List */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-4">
          <Form handleFormData={(expense) => setExpenses([...expenses, expense])} />
          <div className="col-span-2">
            {(expenses.length > 0) &&
              expenses.map((expense, index) => <Expense expense={expense} key={index} currencySymbol={currencyOptions[currency]} deleteExpense={handleDeleteExpense} />)}
          </div>
        </div>
        {/* Expenses vs Income */}
        <div className="mt-4">
          <h2 className="text-1xl font-bold">Expenses vs Income</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-4">
            <div>Some chart showing the difference</div>
            <div>Some list showing type of expese or topic</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
