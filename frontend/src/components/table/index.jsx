import React, { useState } from "react";

const CryptoTable = () => {
    const [data, setData] = useState([
        { name: "Bitcoin", ticker: "BTC", value: "9685", change: "2.83%" },
        { name: "Ethereum", ticker: "ETH", value: "210.5", change: "6.17%" },
        { name: "Ripple", ticker: "XRP", value: "0.2812", change: "2.47%" },
        { name: "Bitcoin Cash", ticker: "BCH", value: "441.4", change: "5.01%" },
        { name: "Bitcoin SV", ticker: "BSV", value: "303.17", change: "5.53%" },
        { name: "Litecoin", ticker: "LTC", value: "74.935", change: "4.25%" },
        { name: "Tether", ticker: "USDT", value: "0.9994", change: "-1.7%" },
        { name: "EOS", ticker: "EOS", value: "4.6161", change: "3.15%" },
        { name: "Binance Coin", ticker: "BNB", value: "19.824", change: "-3.82%" },
        { name: "Cardano", ticker: "ADA", value: "0.060389", change: "2.93%" },
        { name: "Tezos", ticker: "XTZ", value: "2.1247", change: "6.12%" },
        { name: "Ethereum Classic", ticker: "ETC", value: "12.5988", change: "4.09%" },
        { name: "Stellar", ticker: "XLM", value: "0.07034", change: "-4.10%" },
        { name: "Monero", ticker: "XMR", value: "79.523", change: "3.45%" },
        { name: "TRON", ticker: "TRX", value: "0.020881", change: "5.21%" },
    ]);

    const [search, setSearch] = useState("");

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const handleSort = () => {
        const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
        setData(sortedData);
    };

    const handleDelete = (ticker) => {
        setData(data.filter((item) => item.ticker !== ticker));
    };

    const filteredData = data.filter(
        (item) =>
            item.name.toLowerCase().includes(search.toLowerCase()) ||
            item.ticker.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container">
            <table border="1" >
                <thead>
                    <tr>
                        <td colSpan="5">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={search}
                                onChange={handleSearch}
                                className="input"
                                style={{ width: "100%", boxSizing: "border-box", padding: "8px" }}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th onClick={handleSort}>Name</th>
                        <th>Ticker</th>
                        <th>Value</th>
                        <th>Change</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item) => (
                        <tr key={item.ticker}>
                            <td>{item.name}</td>
                            <td>{item.ticker}</td>
                            <td>{item.value}</td>
                            <td style={{
                                color: item.change.includes("-") ? "red" : "green", backgroundColor: item.change.includes("-") ? "rgba(255, 0, 0, 0.15)" : "rgba(0, 128, 0, 0.15)"}}>
                                {item.change}
                            </td>
                            <td>
                                <button onClick={() => handleDelete(item.ticker)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default CryptoTable;