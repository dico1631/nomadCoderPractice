import { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, [])
  return (
    <div>
      <h1>The coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin, index) => (
          <li key={index}>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
