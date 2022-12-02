import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navegacion } from '../layouts/Navegacion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductosCreados } from "../pages/ProductosCreados"
import { ProductoDetalle } from "../pages/ProductoDetalle"
import { Signup } from '../pages/Signup';
import { Signin } from '../pages/Signin';


function App() {
  return (
    <BrowserRouter>
      <Navegacion />
      <Routes>
        <Route path='/' element={ <ProductosCreados /> }/>  
        <Route path='/producto/:id' element={ <ProductoDetalle  /> }/>  
        <Route path='/singup' element={ <Signup /> }/>
        <Route path='/signin' element={ <Signin /> }/>  
        </Routes>
    </BrowserRouter>    
  );
}

export default App;
