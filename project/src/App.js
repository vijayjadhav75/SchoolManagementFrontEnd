import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Teacher from './components/Teacher';
import Student from './components/Student';
import Admin from './components/Admin';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/teacher' element={<Teacher/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/admin' element={<Admin/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}
export default App;