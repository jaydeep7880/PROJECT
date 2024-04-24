import React from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Shop from './Shop';
import Contact from './Contact';
import Ragistration from './Ragistration';
import Login from './Login';
import Vases from './Vases';
import VasesPage from './VasesPage';
import Mug from './Mug';
import Mugpage from './Mugpage';
import Plates from './Plates';
import Platespage from './Platespage';
import Productpage from './Product';
import Shoppage from './shoppage';


function Main() {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Home></Home>}></Route>
                <Route path='about' element={<About></About>}></Route>
                <Route path='/shop' element={<Shop></Shop>}></Route>
                <Route path='/contact' element={<Contact></Contact>}></Route>
                <Route path='/Registration' element={<Ragistration></Ragistration>}></Route>
                <Route path='/Login' element={<Login></Login>}></Route>
                <Route path='/vases' element={<Vases></Vases>}></Route>
                <Route path='/vases/:id' element={<VasesPage></VasesPage>}></Route>
                <Route path='/mugs' element={<Mug></Mug>}></Route>
                <Route path='/mug/:id' element={<Mugpage></Mugpage>}></Route>
                <Route path='/plates' element={<Plates></Plates>}></Route>
                <Route path='/plate/:id' element={<Platespage></Platespage>}></Route>
                <Route path='/product/:id' element={<Productpage></Productpage>}></Route>
                <Route path='/shops/:id' element={<Shoppage></Shoppage>}></Route>

            </Routes>

        </div>
    )
}

export default Main
