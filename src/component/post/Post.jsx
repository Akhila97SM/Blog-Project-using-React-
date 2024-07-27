import React, { useState } from 'react';
import postData from "./post.data";
import Proimg from "../../images/proimg.png";
import './post.css';

export default function Post() {
  const [items, setItems] = useState(postData);

  const [expandedItems, setExpandedItems] = useState([]);
console.log("expandedItems",expandedItems);

  const toggleReadMore = (id) => {
    console.log(id,"asdfgfgh");
    setExpandedItems(prevState => 
      prevState.includes(id) 
        ? prevState.filter(itemId => itemId === id) 
        : [...prevState, id],console.log(expandedItems)
    );
  };

  return (
    <div className="container">
      <div>
        <h1 className="post">Latest Post</h1>
      </div>
      <div className="bodyGrid">
        {items.map((item) => (
          <div key={item.id} className="bodytxt">
            <div className="bodycontent">
              <div className="bodyimg">
                <img
                  src={require(`./postimg/${item.img}`)}
                  alt="bodyimg"
                  className="bodyimg"
                />
              </div>
              <div>
                <h6 className="bodyTextSm">{item.head}</h6>
                <h5 className="bodyTextLg">
                  {expandedItems.includes(item.id) ? item.text : `${item.text.slice(0, 80)}...`}
                </h5>
                <button onClick={() => toggleReadMore(item.id)} className="readBtn">
                  {expandedItems.includes(item.id) ? 'Show Less' : 'Read More'}
                </button>
              </div>
              <div className="mainText">
                <img className="proImg" src={Proimg} alt={item.name} />
                <h6 className="endtxt">{item.name}</h6>
                <h5 className="endtxts">{item.date}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
