import Contacts from "../Contact/Contacts";
import Footer from "../Footer/Footer";
import Nav from "../Navbar/Nav";
import "./home.css";

export default function Home() {
  return (
    <div>
      <Nav />
      <div className="home-wrapper">
        <div className="header-img">
          <img src="../../../src/assets/images/Homeimg.jpg" alt="Home Image" />
          <div className="overlay">
            <div className="content">
            <h1>This is our page</h1>
            <p>Enjoy a variety of beverages, from freshly brewed coffee and teas to refreshing fruit juices and smoothies. Whether you need a morning boost or a cool drink to relax, we’ve got you covered.</p>
            </div>
            
            </div>
            <div className="contacts-items">

            
            <Contacts/> 
            </div>
        </div>
        <div>
         <Footer />
        </div>
      </div>
    </div>
  );
}
