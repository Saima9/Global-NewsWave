import React, { useState } from 'react';
import Card from './Card'
const Newsapp =()=>{


const API_KEY= "709942faa7c34215a5e4f5c1ebf3c13d";
const [search, setSearch]=useState('india');
const [newsData, setNewsData]=useState([])

const getData= async()=>{
    const response= await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles)
}
const handelInput= (e)=>{
setSearch(e.target.value);


}

    return (
  <div>   
    <nav>
         <div>
            <h1>Trendy News</h1>
        </div>
        <ul>
            <a>All News</a>
            <a>Trending</a>
        </ul>
        <div className='searchBar'> 
        <input type='text' placeholder='Search News' onChange={handelInput}/>
        <button onClick={getData}> Search</button>
        </div>
    </nav>
    <div>
        <p className='head'> Stay Update with TrendyNews</p>
    </div>
    <div className='categoryBtn'>
        <button>Sports</button>
        <button>Politics</button>
        <button>Entertainment</button>
        <button>Health</button>
        <button>Fitness</button>
    </div>
    <div>

    </div>
<Card data={newsData} />
        
 </div>
        
    )
}
export default Newsapp;