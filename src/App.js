import {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  
  const showAlert=(msg,type)=>{
    setAlert({
      msg:msg,
      type:type
    });
  }

  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#3e3b3b';
      showAlert('Dark mode has been enabled','success');
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert('Light mode has been enabled','success');
    }
  }

  return (
    <>
        <Navbar title="TextUtils" info="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-5">
          <TextForm showAlert={showAlert} heading="Enter your text to analyze" mode={mode}/>
        </div>
        {/* <About/> */}
    </>
  );
}

export default App;
