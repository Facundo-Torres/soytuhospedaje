import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import Home from './components/pages/Home';
import Footer from './components/layout/Footer';
import Flag from './components/layout/Flag';


function App() {
  return (
    <div className="App">
      
      <Home />
     
      <Flag />      
      <Footer />

    </div>
  );
}

export default App;
