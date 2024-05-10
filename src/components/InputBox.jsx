import React ,{ useId  } from 'react'

export default function InputBox({
    label,
    amount,
    onAmountChange,
    selectCurrency = "usd",
    currencyDisable = false,
    onCurrencyCange,
    currencyOption = [],
    amountDisable = false,
    className = "",
}){
    const amountId = useId();
    return (
            <div className={`bg-white p-2 mt-5 mb-5 rounded-lg text-sm flex items-center border-2 border-zinc-500 w-full ${className}`}>
            <div className="w-2/3">
                <label htmlFor= {amountId} className="text-black/40 mb-2 inline-block px-2">
                    {label}
                </label>
                <input
                    id= {amountId}
                    className="outline-none w-full bg-transparent py-1.5 px-2.5 border-2 border-zinc-400 rounded-full "
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                    disabled = {amountDisable}
                />
            </div>
            <div className="w-1/2 flex flex-wrap px-2 py-2 justify-end text-right">
                <p className="text-black/400 mb-2 px-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyCange && onCurrencyCange(e.target.value)}
                    disabled = {currencyDisable}
                >
                    
                    {currencyOption.map((currency) =>(
                        <option key={currency} value={currency}>
                        {currency}
                    </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
