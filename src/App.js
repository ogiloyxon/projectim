import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import {InfoContextProvider} from "./Context";

function App() {
    return (
        <BrowserRouter>
          <InfoContextProvider>
            <div className="App">
              <Header/>
              <Routes>
                <Route path='/' element={<Home/>}></Route>
              </Routes>
              <Footer/>
            </div>
          </InfoContextProvider>
        </BrowserRouter>
    );
}

export default App;
