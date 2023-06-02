
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';
import Contacto from '../pages/Contacto';

const AppRouters = () => {
    return (
       
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/contacto" element={<Contacto/>} />
            </Routes>
        
    )
}

export default AppRouters;
