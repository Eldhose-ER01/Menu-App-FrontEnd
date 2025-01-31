import Nav from "../Navbar/Nav"
import Contacts from "../Contact/Contacts"
import './Menu.css'
import Footer from "../Footer/Footer"
import { useState,useEffect } from "react"
import axios from "axios"
export default function Menu() {
const[values,setValues]=useState([])
const [filteredValues, setFilteredValues] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
const finddatas=async()=>{
  try {
    const response=await axios.get('https://menu-app-backend-2.onrender.com/alldatas')
      if(response.data.success){
        setValues(response.data.data)
        setFilteredValues(response.data.data); //
      }
  } catch (error) {
    console.log(error);
    
  }
}
const filterData = (name) => {
  const filtered = values.filter((value) => value.menuName === name);
  setFilteredValues(filtered); // Update the state with the filtered results
};
const uniqueMenuNames = [...new Set(values.map((item) => item.menuName))];
// Pagination logic
const indexOfLastItem = currentPage * itemsPerPage;
const indexOfFirstItem = indexOfLastItem - itemsPerPage;
const currentItems = filteredValues.slice(indexOfFirstItem, indexOfLastItem);
console.log(currentItems ,"currentItemscurrentItems");

const paginate = (pageNumber) => setCurrentPage(pageNumber);

const totalPages = Math.ceil(filteredValues.length / itemsPerPage)
useEffect(() => {
finddatas()
}, [])

  return (
    
  
    <div>
        <div className="navbars">
        <Nav />
        </div>
        <div className="menu-img">
  <img src="/static/Images/Homeimg.jpg" alt=""  />
  <div className="menu-contents">
    <div className="menuhead">
    <h1>MENU</h1>
    </div>
    <div>
    <p>Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the "Order Online" button located below the menu.</p>

    </div>

  </div>
  

</div>
<div className="main-btn">

{
              uniqueMenuNames.map((name, index) => <button key={index} onClick={() => filterData(name)}>{name}</button>
          
            )}
  
              
          



</div>

    <div className="menu-itmes">
        <div className="menu-box">

        
        <div className="item-img1"> 

        
        <img src="/static/Images/drinks.png" alt="" />
        </div>
        <div className="item-img2"> 

        
        <img src="/static/Images/cockatile.png" alt="" />
        </div>
      <div className="menu-title">
        {
          <h1 >Let's Enjoy</h1>
        }
        
        </div>
        <div>
            
        </div>
        <div className="menu-products">
  {currentItems.map((value, index) => (
    <div key={index} className="products">
      <h1>
        <span>{value.menuTitle}:</span>
       
        <span>${value.price}</span>
      </h1>
      <p>{value.menuDesc}</p>
    </div>
  ))}
</div>
 {/* Pagination Controls */}
 <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={currentPage === index + 1 ? 'active' : ''}
            >
              {index + 1}
            </button>
          ))}
        </div>
        
      </div>
      
      
      </div>
     
     <div className="footer-contact">

    <Contacts/>
    <Footer/>
      

      </div>


      

      
      
     
    </div>
   
    
    
  )
}