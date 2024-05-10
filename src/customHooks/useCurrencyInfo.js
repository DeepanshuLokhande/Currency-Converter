import { useState , useEffect } from "react";

function useCurrencyInfo(currency) {
    const [data, setdata] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setdata(res[currency]))
            .catch((err) => console.log(err + "in api fetch"))
            console.log(data);
            console.log(currency);
    }, [currency])
    return data
}

export  {useCurrencyInfo}
