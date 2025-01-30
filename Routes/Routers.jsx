import { Routes,Route, } from 'react-router-dom'
import Contacts from '../src/components/Contact/Contacts'
import Footer from "../src/components/Footer/Footer"
import Home from "../src/components/Home/Home"
import Menu from "../src/components/Menu/Menu"
import Menudatas from "../src/components/MenuDatas/Menudatas"


export default function Routers() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Menu/>}/>
        <Route path='/home'element={<Home/>}/>
        <Route path='/addmenuitem'element={<Menudatas/>}/>
        <Route path='/contact'element={<Contacts/>}/>
        <Route path='Footer'element={<Footer/>}/>
      </Routes>
    </div>
  )
}
