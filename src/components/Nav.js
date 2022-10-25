function Nav({ currencyOptions, currency, handleSetCurrency }) {

  return (
    <>
      <div className="py-6 flex justify-between">
        <h1 className="text-3xl font-bold">Budget</h1>
        <div>
          <select
            className="mt-1 py-2 px-4 rounded-md border shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            onChange={(e) => handleSetCurrency(e.target.value)}
          >
            {Object.entries(currencyOptions).map(currency => {
              const [name, symbol] = currency;
              return (
                <option value={name}>{symbol}</option>
              )
            })}
          </select>
        </div>
      </div>
    </>
  )
}
export default Nav
