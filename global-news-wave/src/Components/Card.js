import React from "react";

const Card=({data})=>{
    console.log(data)
    const readMore = (url) =>{
        window.open(url)
    }
;


    return (
        <div className="cardContainer">

            {
                data.map((item,index)=>{
                    return (
                        <div className="card" key={index}>
                        <img src={item.urlToImage} alt="article_image" />
                        <div className="content"> 
                        <a href={item.url} className="title">{item.title}</a>
                        <p>{item.description}</p>
                        <button onClick={readMore(item.url)}>Read More</button>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Card