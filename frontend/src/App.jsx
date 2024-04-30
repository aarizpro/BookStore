import React from 'react'
import {Routes,Route} from "react-router-dom";
import Home from './pages/Home';
import ViewBook  from "./pages/ViewBook";
import CreateBook from "./pages/CreateBook";
import DeleteBook from "./pages/DeleteBook";
import EditBook from "./pages/EditBook";
const App = () => {
  return (
    <Routes>
      
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBook/>}/>
      <Route path='/books/details/:id' element={<ViewBook />} />
      <Route path='books/edit/:id' element={<EditBook/>}/>
      <Route path='books/delete/:id' element={<DeleteBook/>}/>
    </Routes>
  )
}

export default App