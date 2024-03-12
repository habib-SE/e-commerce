
import './App.css';
import Footer from './customer/components/footer/Footer';
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <HomePage/>
      <Footer/>
    </div>
  );
}

export default App;
