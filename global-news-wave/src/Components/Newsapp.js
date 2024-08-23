import React, { useEffect, useState } from "react";
import Card from "./Card";
const Newsapp = () => {
  const API_KEY = "709942faa7c34215a5e4f5c1ebf3c13d";
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState(null);

  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);

    setNewsData(jsonData.articles);
    setSearch("")
  };

  useEffect(() => {
    getData();
  }, []);

  const handelInput = (e) => {
    setSearch(e.target.value);
  };
  const inputData = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <nav>
        <div>
          <h1>Trendy News</h1>
        </div>
        <ul style={{ display: "flex", gap: "11px" }}>
          <a style={{ fontWeight: 600, fontSize: "17px" }}>All News</a>
          <a style={{ fontWeight: 600, fontSize: "17px" }}>Trending</a>
        </ul>
        <div className="searchBar">
          <input
            type="text"
            placeholder="Search News"
            value={search}
            onChange={handelInput}
          />
          <button onClick={getData}> Search</button>
        </div>
      </nav>
      <div>
        <p className="head"> Stay Update with TrendyNews</p>
      </div>
      <div className="categoryBtn">
        <button onClick={inputData} value="sports">
          Sports
        </button>
        <button onClick={inputData} value="politics">
          Politics
        </button>
        <button onClick={inputData} value="entertainment">
          Entertainment
        </button>
        <button onClick={inputData} value="health">
          Health
        </button>
        <button onClick={inputData} value="fitness">
          Fitness
        </button>
      </div>
      <div>{newsData ? <Card data={newsData} /> : null}</div>
    </div>
  );
};
export default Newsapp;
