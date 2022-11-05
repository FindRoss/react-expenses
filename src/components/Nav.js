function Nav({ currencyOptions, currency, handleSetCurrency }) {

  return (
    <>
      <div className="py-6 flex justify-between">
        <h1 className="text-3xl font-bold">Budget</h1>
        <div>
          <select
            className="mt-1 py-2 px-4 rounded-md border shadow-sm bg-white focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm cursor-pointer"
            onChange={(e) => handleSetCurrency(e.target.value)}
          >
            {Object.entries(currencyOptions).map((currency, index) => {
              const [name, symbol] = currency;
              return (
                <option className="cursor-pointer" value={name} key={index}>{symbol}</option>
              )
            })}
          </select>
        </div>
      </div>
      <div className="flex justify-end">
        <span className="text-2xl font-light">Budget: {currencyOptions[currency]}800</span>
      </div>
    </>
  )
}
export default Nav
