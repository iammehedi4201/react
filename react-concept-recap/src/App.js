import logo from './logo.svg';
import './App.css';
import Peoples from './Component/Peoples/Peoples';
import Calculator from './Component/Calculator/Calculator';
import Posts from './Component/Posts/Posts';

function App() {
  return (
    <div className="App">
      
         <Peoples name="Mehedi Hasan" id ="13298"></Peoples>
         <Calculator NumOne ='100' NumTwo ='200'></Calculator>
         <Posts></Posts>
      

    </div>
  );
}

export default App;
