import React from "react";
import "./card.css";
import { useNavigate } from "react-router-dom";


const ChatCard = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  console.log(data);
  const handlenavigate = (id) =>{
    navigate(`/property/${id}`)
  }
  return data?.map((item, index) => {
    return (
      <>
        <div className="card-chat" key={index} onClick={()=>handlenavigate(item._id)}>
          <img src={item?.card_image_url} alt="" className="img-chat" />
          <h1 style={{fontSize:"17px" , fontWeight:"bold" , marginTop:"5px"}}>{item?.title}</h1>
          <h3 style={{fontSize:"15px" , color:"#9F366E"}}>{item?.location}</h3>
          <h3 style={{fontSize:"15px"}}>{item?.units} Units</h3>
          <h2 style={{fontSize:"15px"}}>{item?.unitVariants}</h2>
          <h2>{item?.Price}</h2>
        
        </div>
      </>
    );
  });
};

export default ChatCard;
