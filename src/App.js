import './App.css';
import * as React from 'react';
import {Routes, Route} from 'react-router-dom';
const Home = React.lazy(()=> import('./Components/Home/Home'))
const Login = React.lazy(()=> import('./Components/Login/Login'))
const Signup = React.lazy(()=> import('./Components/Signup/Signup'))
const Welcome = React.lazy(()=> import('./Components/Welcome/Welcome'))
const Navbar = React.lazy(()=> import('./Components/Navbar/Navbar'))
const Book = React.lazy(()=> import('./Components/Books/Books'))

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={
          <React.Suspense fallback={<>...</>}>
            <Home />
          </React.Suspense>
        }></Route>
        <Route path='login' element={
          <React.Suspense fallback={<>...</>}>
            <Login />
          </React.Suspense>
        }></Route>
        <Route path='signup' element={
          <React.Suspense fallback={<>...</>}>
            <Signup />
          </React.Suspense>
        }></Route>
        <Route path='welcome/:userName' element={
          <React.Suspense fallback={<>...</>}>
            <Welcome />
          </React.Suspense>
        }></Route>
        <Route path='books'
        element ={
          <React.Suspense fallback={<>...</>}>
            <Book/>
          </React.Suspense>
        }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
