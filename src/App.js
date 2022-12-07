import './index.css';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Header />
      <h1 className='font-bold'>Welcome</h1>
      <HelloWorld name='James'/>

      <Footer />
    </div>
  );
}

export default App;
