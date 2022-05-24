import './App.css';
import {Route , BrowserRouter , Navigate, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import 'antd/dist/antd.css'
// import 'antd/dist/antd.min.css'
import UserBookings from './pages/UserBookings';
import AddCar from './pages/AddCar';
import AdminHome from './pages/AdminHome';
import EditCar from './pages/EditCar';
import SpinCom from './pages/SpinCom';

function App() {
  return (
    <div className="App">
      Hello from app.js

      <SpinCom />
         <BrowserRouter>
         <Routes>
             <Route path='/' exact component={Home} />
             <Route path='/login' exact component={Login} />
             <Route path='/register' exact component={Register} />
             <Route path='/booking/:carid' exact component={BookingCar} />
             <Route path='/userbookings' exact component={UserBookings} />
             <Route path='/addcar' exact component={AddCar} />
             <Route path='/editcar/:carid' exact component={EditCar} />
             <Route path='/admin' exact component={AdminHome} />
             </Routes>
         </BrowserRouter>

    </div>
  );
}



export default App;


export function ProtectedRoute(props)
{


    if(localStorage.getItem('user'))
    {
      return <Route {...props}/>
    }
    else{
      return <Navigate to='/login'/>
    }

}
