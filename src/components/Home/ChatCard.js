import React from "react";
import "./card.css";


const ChatCard = (props) => {
  const { data } = props;
  console.log(data);
  return data?.map((item, index) => {
    return (
      <>
        <div className="card-chat" key={index}>
          <img src={item?.card_image_url} alt="" className="img-chat" />
          <h1 style={{fontSize:"16px"}}>{item?.title}</h1>
          <h3 style={{fontSize:"14px"}}>{item?.location}</h3>
          <h3 style={{fontSize:"14px"}}>{item?.units} Units</h3>
          <h2 style={{fontSize:"14px"}}>{item?.unitVariants}</h2>
          <h2>{item?.Price}</h2>
        
        </div>
      </>
    );
  });
};

export default ChatCard;
