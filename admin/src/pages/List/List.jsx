import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
//import { url } from '../../assets/assets';
import './List.css';

 const url = 'http://localhost:4000';

const List = () => {

 

  const [list,setList] = useState([]);
  
  // const fetchList = async () => {
  //   const response = await axios.get(`${url}/api/food/list`)
  //   if(response.data.success)
  //   {
  //     setList(response.data.data);
  //   }
  //   else{
  //     toast.error("Error")
  //   }
  // }

//   const fetchList = async () => {
//   try {
//     const response = await axios.get(`${url}/api/food/list`);
//     //const data = response.json();
//     console.log("Fetch List Response:", response.data);
//     if (response.data.success) {
//       setList(response.data.data);
//     } else {
//       toast.error("Failed to fetch food list");
//     }
//   } catch (error) {
//     console.error("Error fetching food list:", error);
//     toast.error("Error fetching food list");
//   }
// };

const fetchList = async () => {
  try {
    console.log("Calling API:", `${url}/api/food/list`);
    const response = await axios.get(`${url}/api/food/list`);
    console.log("Fetch List Response:", response.data);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Failed to fetch food list");
    }
  } catch (error) {
    console.error("Error fetching food list:", error.message);
    if (error.response) {
      console.log("Server responded with:", error.response.data);
    } else if (error.request) {
      console.log("No response received. Request was:", error.request);
    }
    toast.error("Error fetching food list");
  }
};


  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`,{
      id:foodId
    })
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    }
    else {
      toast.error("Error")
    }
  }

  useEffect(()=>{
    fetchList();
  },[])


//console.log(list);
  return (
    <div className='list add flex-col'>
        <p>All Foods List</p>
        <div className='list-table'>
          <div className="list-table-format title">
            <b>Image</b>
            <b>Name</b>
            <b>Category</b>
            <b>Price</b>
            <b>Action</b>
          </div>
          {list.map((item,index)=>{
            return (
              <div key={index} className='list-table-format'>
                <img src={`${url}/images/`+item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.category}</p>
                <p>₹{item.price}</p>
                <p className='cursor' onClick={()=>removeFood(item._id)}>x</p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default List
