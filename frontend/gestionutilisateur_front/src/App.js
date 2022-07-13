import logo from './logo.svg';
import './App.css';
import UserComponent from './UserComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <div className='App'>
    <UserComponent />

      {/* <BrowserRouter>
        <UserComponent />
        <div className='main'>
          <Routes>
          <Route path="/user/:id" element={<UserUpdate/>} /> 
          </Routes>
        </div>
      </BrowserRouter> */}
   </div>
  );
}

export default App;
