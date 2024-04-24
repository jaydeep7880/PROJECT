import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Ragistration from './Ragistration';
import Main from './Main';
import { createContext, useState } from 'react';
export var contect = createContext()


// npm install bootstrap
// npm install react-bootstrap
// npm install react-router-dom
// npm install json-server 
// npm install react-toastify 
// json-server --watch db.json --port 400 
// json-server --watch product.json --port 1001 
 
function App() {
  var [log, setlog] = useState("")
  var [out, setout] = useState(false)

  return (
      <div className="App fontfamily">

        <contect.Provider value={{ log, setlog, out, setout }}>
          <BrowserRouter>
            <Main></Main>
          </BrowserRouter>
        </contect.Provider>


      </div>

  );
}

export default App;
