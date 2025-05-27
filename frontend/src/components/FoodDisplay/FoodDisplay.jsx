import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'
import './FoodDisplay.css'

const FoodDisplay = ({category}) => {

  const {food_list} = useContext(StoreContext);

   console.log("Current Category:", category);
  console.log("Food List Data:", food_list);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          }
        })}

        
      </div>
    </div>
  )
}

export default FoodDisplay
