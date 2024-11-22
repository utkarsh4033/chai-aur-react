import { useEffect, useState } from "react";

function UseCurrencyinfo() {
  const { data, setData } = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahemd0/currency-api01/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
  }, [currency]);
  console.log(data)
  return data
}


export default UseCurrencyinfo;