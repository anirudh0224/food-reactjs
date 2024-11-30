import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/NavbarWeb';
import Landing from './components/Landing';
import Services from './components/Services';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import Menu from './components/Menu';


function App() {
  return (
    // <BrowserRouter>
    //   <ResponsiveAppBar/>
    //   <Switch>
    //     <Route excate path="/"><Landing/><Services/></Route>
    //     <Route></Route>
    //     <Route></Route>
    //   </Switch>
    //   <Footer/>
    // </BrowserRouter>
    <>
      {/* <Landing />
      <Services />
      <Footer /> */}
      {/* <About/> */}
      {/* <Contact/> */}
      <ResponsiveAppBar />
      <Landing />
      <Services />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
