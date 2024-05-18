import React, { useState, useEffect } from 'react';
import './style.css'
const items = [
  {
    id : 1,
    title : 'image 1',
    imageUrl : 'https://i.pinimg.com/736x/99/f8/b1/99f8b19781775a0654d838fc509b0b61.jpg'
  },
  {
    id :2 ,
    title : 'image 2',
    imageUrl : 'https://i.pinimg.com/736x/23/f1/08/23f108978a3721b0fd5c2200e1664cde.jpg'
  },
  {
    id :3 ,
    title : 'image 3',
    imageUrl : 'https://i.pinimg.com/originals/24/ae/98/24ae989adf4d80e21231c1fc4d55dc6c.jpg'
  },
  {
    id :4 ,
    title : 'image 4',
    imageUrl : 'https://i.pinimg.com/736x/54/e1/d0/54e1d0c4a65ff2a714339d7427177974.jpg'
  },
]

const Carousal = () =>{
  const [activeImg,setActiveImg] = useState(0);

  const handlePrevClick = () =>{
    if (activeImg === 0){
      setActiveImg(items.length-1);
    }else{
      setActiveImg((activeImg) => activeImg-1)
    }
  }

  const handleNextClick = () =>{
    if (activeImg === items.length-1){
      setActiveImg(0);
    }else{
      setActiveImg((activeImg) => activeImg+1);
    }
  }

  useEffect(() => {
    let timer = setTimeout(() =>{
      handleNextClick();
    },1500);
    return () => clearTimeout(timer);
  },[activeImg])


  return (
    <div className="container">
      <img className="img" src={items[activeImg].imageUrl}alt={} />   

      <div className="buttons">
      <button onClick={handlePrevClick} style={{marginRight:'20px'}} type="button">Prev</button>
      <button onClick={handleNextClick} type="button">Next</button>
      </div>
       </div>

  )
}

export default Carousal;