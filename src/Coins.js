// import Button from "./Button";
// import styles from "./App.module.css"
import { useState, useEffect } from "react";

function Coins() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState("");
  const priceValue = (event) => (
    setPrice(event.target.value)
  )
  console.log(price)
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      })
  }, [])
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      <input type="number" value={price} onChange={priceValue}/>
      {loading ? (
        <strong>Loading...</strong>
        ) : (
        <select>
          {coins.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${price / coin.quotes.USD.price} USD
            </option>
          ))}
        </select>)
        }
    </div>
  );
}

export default Coins;
