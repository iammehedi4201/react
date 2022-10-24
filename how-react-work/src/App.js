import logo from './logo.svg';
import './App.css';
import Animes from './Components/Animes/Animes';

function App() {
  return (
    <div className="App">
       
         <h1>Favorite Anime List:</h1>

         <Animes name="Demon-slayer" type="Action type" num="1" characters={["tanjiro","Insoke","zenesu"]}></Animes>

         <Animes name="Black-Clovar" type="Action type" num="2" characters={["Asta","Yuno","Captain Yummy"]}></Animes>


         
    </div>
  );
}

export default App;
