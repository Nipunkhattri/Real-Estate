import React from 'react'
import './card.css'

const ChatCard = (props) => {
    const {data} = props;
    console.log(data)
  return (
    <div className='card-chat'>
      <img src={data?.card_image_url} alt="" className='img-chat'/>
      <h1>{data?.title}</h1>
      <h3>{data?.location}</h3>
      <h3>{data?.units} Units</h3>
      <h2>{data?.unitVariants}</h2>
      <h2>{data?.Price}</h2>
      <div className='icon-chat'>
        <h1>Whatsapp icon</h1>
        <h2>Call icon </h2>
        <button>Know more</button>
      </div>
    </div>
  )
}

export default ChatCard
