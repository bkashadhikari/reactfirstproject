import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import FormText from './components/FormText'
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
// import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')
  const [label, setLabel] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const removeClasses = () => {
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
  }
  const toggle = (cls) => {
    removeClasses()
    document.body.classList.add('bg-' + cls)
  }
  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      setLabel('Enable Light Mode')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode enabled', 'Success')
      document.title = 'React App - Dark Mode'
      // setInterval(() => {
      //   document.title = "Dark Mode Welcoming you"
      // }, 1500);

      // setInterval(() => {
      //   document.title = "Welcome to Dark Mode"
      // }, 1200);
    }
    else {
      setMode('light')
      setLabel('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode enabled', 'Success')
      document.title = 'React App - Light Mode'
    }
  }

  return (
    <>
      {/* <BrowserRouter>
      <Navbar title={"React Js"} mode={mode} toggleModes={toggleMode} label={label} toggle={toggle} />
      <Alert alert={alert} />
      <Routes>
        <Route path="/" element={<FormText showAlert={showAlert} heading={"Enter the text to analyze below:"} mode={mode}/>}/>

      <Route path="/About" element={<About mode={mode}/>}/>
      </Routes>
      </BrowserRouter> */}

      <Navbar title={"React Js"} mode={mode} toggleModes={toggleMode} label={label} toggle={toggle} />
      <Alert alert={alert} />
      <FormText showAlert={showAlert} heading={"Enter the text to analyze below:"} mode={mode} />
    </>
  );
}

export default App;