import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { menu_list } from "../assets/assets";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    //const url = "https://food-delivery-backend-au4q.onrender.com"
     const url = "http://localhost:4000"
    const [food_list, setFoodList] = useState([]);
    const [cartItems, setCartItems] = useState({});
    const [token, setToken] = useState("")


    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }
        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
        }
    }

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if (token) {
            await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
        }
    }


    const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
        if (cartItems[item] > 0) {
            let itemInfo = food_list.find((product) => product._id === item);
            if (itemInfo) {
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
    }
    return totalAmount;
}

    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;
    //     for (const item in cartItems) {
    //         if (cartItems[item] > 0) {
    //             let itemInfo = food_list.find((product) => product._id === item);
    //             totalAmount += itemInfo.price * cartItems[item];
    //         }
    //     }
    //     return totalAmount;
    // }

    const fetchFoodList = async () => {
         try {
    const response = await axios.get(url + "/api/food/list");
    console.log(response.data.data);
    setFoodList(response.data.data);

  } catch (error) {

    console.error("Food list fetch error:", error);
    }
}


    const loadCartData = async (token) => {
        const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } })
        setCartItems(response.data.cartData);
    }

    // useEffect(() => {
    //     async function loadData() {
    //         await fetchFoodList();
    //         if (localStorage.getItem("token")) {
    //             setToken(localStorage.getItem("token"))
    //             await loadCartData(localStorage.getItem("token"));
    //             //await loadCartData({ token: localStorage.getItem("token") })
    //         }
    //     }
    //     loadData()
    // }, [])

    useEffect(() => {
    async function loadData() {
        await fetchFoodList();
        const savedToken = localStorage.getItem("token");
        if (savedToken) {
            setToken(savedToken);
            await loadCartData(savedToken); // Fixed here
        }
    }
    loadData();
}, []);

    
    const contextValue = {
        url,
        food_list,
        menu_list,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        token,
        setToken,
        loadCartData,
        setCartItems
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )

}

export default StoreContextProvider;
