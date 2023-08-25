import React from 'react'
import './card.css'

const ChatCard = (props) => {
    const {data} = props;
    console.log(data)
  return (
        data?.map((item,index)=>{
            return (
                <>
                <div className='card-chat' key={index}>
                <img src={item?.card_image_url} alt="" className='img-chat'/>
                <h1>{item?.title}</h1>
                <h3>{item?.location}</h3>
                <h3>{item?.units} Units</h3>
                <h2>{item?.unitVariants}</h2>
                <h2>{item?.Price}</h2>
                <div className='icon-chat'>
                <h1>Whatsapp icon</h1>
                <h2>Call icon </h2>
                <button>Know more</button>
                </div>
                </div>
                </>
            )
        })
  )
}

export default ChatCard
