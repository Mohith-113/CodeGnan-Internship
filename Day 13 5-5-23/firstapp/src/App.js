import React from 'react';
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact'
import Navigation from './Components/Navigation';

class App extends React.Component{
  
  render(){
    return(
      <div>
        {/* <Header />
        <Header/> */}


        <BrowserRouter>
           <Navigation/>
           <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/contact' element={<Contact/>} />
           </Routes>
        </BrowserRouter>


      </div>
          )
  }
}

export default App