// import './App.css';
// import Home from './Components/Home/Home';
// import HomeM from './Components/Home/HomeM';
// import Login from './Components/Login/Login';
// import HomeA from './Components/Home/HomeA';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { useState } from 'react';

// function App() {
//   const [email, setEmail] = useState('');
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route exact path="/" element={<Login setEmail={setEmail}/>} />
//         <Route path="/Home" element={email && <Home email={email}/>}/>
//         <Route path="/HomeM" element={email && <HomeM email={email}/>}/>
//         <Route path="/HomeA" element={email && <HomeA email={email}/>}/>
//         {/* <Route exact path="/" element={<Login/>} />
//         <Route path="/Home" element={<Home/>}/>
//         <Route path="/HomeM" element={<HomeM/>}/>
//         <Route path="/HomeA" element={<HomeA/>}/> */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import './App.css';
import Home from './Components/Home/Home';
import HomeM from './Components/Home/HomeM';
import Login from './Components/Login/Login';
import HomeA from './Components/Home/HomeA';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Faculty from './Components/Home/Faculty';
import Project from './Components/pages/Project';
import Calendar from './Components/Sections/Calendar';



function App() {
  const [userEmail, setUserEmail] = useState('');
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login setUserEmail={setUserEmail}/>}/>
        <Route exact path='/Home' element={<Home userEmail={userEmail}/>}/>
        <Route exact path='/HomeM' element={<HomeM userEmail={userEmail}/>}/>
        <Route exact path='/HomeA' element={<HomeA userEmail={userEmail}/>}/>
        <Route exact path='/Projects' element={<Faculty userEmail={userEmail}/>}/>
 
        <Route exact path='/Calendar' element={<Calendar userEmail={userEmail}/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}


export default App;


