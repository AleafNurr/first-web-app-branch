import logo from './logo.svg';
import './index.css';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      
      <HelloWorld name='Filly'/>

      <Footer />
    </div>
  );
}

export default App;
