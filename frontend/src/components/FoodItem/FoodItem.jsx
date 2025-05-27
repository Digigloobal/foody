import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import './FoodItem.css';

// const FoodItem = ({image, name, price, desc , id} ) => {

//     const [itemCount, setItemCount] = useState(0);
//     const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext);

//     return (
//         <div className='food-item'>
//             <div className='food-item-img-container'>
//                 <img className='food-item-image' src={url+"/images/"+image} alt="" />
//                 {!cartItems[id]
//                 ?<img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
//                 :<div className="food-item-counter">
//                         <img src={assets.remove_icon_red} onClick={()=>removeFromCart(id)} alt="" />
//                         <p>{cartItems[id]}</p>
//                         <img src={assets.add_icon_green} onClick={()=>addToCart(id)} alt="" />
//                     </div>
//                 }
//             </div>
//             <div className="food-item-info">
//                 <div className="food-item-name-rating">
//                     <p>{name}</p> <img src={assets.rating_starts} alt="" />
//                 </div>
//                 <p className="food-item-desc">{desc}</p>
//                 <p className="food-item-price">${price}</p>
//             </div>
//         </div>
//     )
// }


const FoodItem = ({ image, name, price, desc, id }) => {
    const [itemCount, setItemCount] = useState(0);
    const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);

    // If any critical props are missing, don't render
    if (!image || !name || !price || !id || !url) {
        console.warn("Missing props in FoodItem", { image, name, price, desc, id, url });
        return null;
    }

    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={`${url}/images/${image}`} alt={name} />
                {!cartItems?.[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="Add" />
                    : <div className="food-item-counter">
                        <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="Remove" />
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="Add" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p> <img src={assets.rating_starts} alt="Rating" />
                </div>
                <p className="food-item-desc">{desc}</p>
                <p className="food-item-price">₹{price}</p>
            </div>
        </div>
    );
};


export default FoodItem
