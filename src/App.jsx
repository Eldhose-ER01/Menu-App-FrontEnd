import Menuproducts from'../Routes/Routers'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {Toaster} from 'react-hot-toast'


function App() {
  <Toaster
  position="top-center"
  reverseOrder={false}
/>

  return (
    <>
    <Router>
      <Routes>
        <Route path='/*'element={<Menuproducts/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
