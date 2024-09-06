import React, { useEffect, useRef, useState } from "react";
import Card from "./Card";
const Newsapp = () => {
  const apiKey = "e719b9cf112540d59dc4ca8e87e383ce";
  const searchElement = useRef('');
  const [newsData, setNewsData] = useState(null);
  useEffect(() => {
    getData("india");
  }, []);
 

  const getData = async (search) => {
    
    const response = await fetch(`https://globalnewsapi-production.up.railway.app/get_news?category=${search}`, {
      method: 'GET',
    });
    console.log(search)
    const jsonData = await response.json();
    console.log(jsonData.articles);

    setNewsData(jsonData.articles);
    searchElement.current.value=("");
  };
 const fetchCall=()=>{
  let search=searchElement.current.value;

  getData(search)

  }

  useEffect(() => {
    getData("india");
  }, []);

 // const handelInput = (e) => {
  //  console.log(e) };

  const inputData = (event) => {
    const newSearch=event.target.value
  
    getData(newSearch)
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
            
            ref={searchElement}
          />
          <button onClick={fetchCall}> Search</button>
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
