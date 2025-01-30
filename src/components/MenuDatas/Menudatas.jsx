import React, { useState } from "react";
import Nav from "../Navbar/Nav";
import "./Addform.css";
import axios from'axios';
import toast, { Toaster } from "react-hot-toast";
const Menudatas = () => {
  const [formData, setFormData] = useState({
    menuName: "",
    menuTitle: "",
    menuDesc: "",
    price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      console.log(formData,"ffffffffffffff");
      
      const response = await axios.post('http://localhost:3000/menudatas', formData);
         if(response.data.success){
          console.log("hiiii");
          toast.success("Data submited")
          setFormData({ 
            menuName: "",
            menuTitle: "",
            menuDesc: "",
            price: "",
          });
         }else{
          toast.error("datas does not submitted")
         }
    } catch (error) {
      console.log(error);
      
    }
    
  };

  return (
    <>
    <Nav />
    <Toaster />
   
    <div className="form-container">
    
      <h1>Add Menu</h1>
      <form onSubmit={handleSubmit} className="add-menu-form">
        <div className="form-group">
          <label htmlFor="menuName">Menu Name</label>
          <input
            type="text"
            id="menuName"
            name="menuName"
            value={formData.menuName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="menuTitle">Menu Title</label>
          <input
            type="text"
            id="menuTitle"
            name="menuTitle"
            value={formData.menuTitle}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="menuDesc">Menu Description</label>
          <textarea
            id="menuDesc"
            name="menuDesc"
            value={formData.menuDesc}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
     </>
  );
};

export default Menudatas;
