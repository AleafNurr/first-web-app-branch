import logo from './logo.svg';
import './index';
import HelloWorld from './Components/HelloWorld';
import Header from './Components/Header';

function App() {
  return (
    <div>
      <Header />
      
      <HelloWorld name='Filly'/>
    </div>
  );
}

export default App;
