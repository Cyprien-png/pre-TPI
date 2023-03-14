import './lib/tailwind/output.css';
import NavBar from './components/NavBar';
import { Route, Routes } from "react-router-dom"

import Login from './pages/Login';

function App() {
    return (
        <div className='h-full text-white bg-blue-logo flex flex-col'>
            <NavBar />
            <Routes className="bg-green-500">

                <Route path="/login" element={
                    <Login />
                } />
            </Routes>


        </div>
    )
}

export default App;
