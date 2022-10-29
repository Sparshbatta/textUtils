import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  
  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    });

    //set alert to null after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const removeAllTypes=()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const toggleColor=(type)=>{
    removeAllTypes();
    document.body.classList.add('bg-'+type);
  }

  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#3e3b3b';
      showAlert('Dark mode has been enabled','success');
      
      /*code to toggle between two titles in the tab*/

      // setInterval(()=>{
      //   document.title='TextUtils is Amazing!';
      // },3000);
      // setInterval(()=>{
      //   document.title='Get TextUtils Now!';
      // },2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success');
    }
  }

  return (
    <Router>
        <Navbar title="TextUtils" info="About Us" mode={mode} toggleMode={toggleMode} toggleColor={toggleColor}/>
        <Alert alert={alert}/>
        <div className="container my-5">
          <Routes>
            <Route exact path='/' element={<TextForm showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>}/>
            <Route exact path='about/' element={<About mode={mode}/>}/>  
          </Routes>
          
        </div>
        {/* <About/> */}
    </Router>
  );
}

export default App;
