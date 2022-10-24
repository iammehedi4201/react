import logo from "./logo.svg";
import "./App.css";


function App() {
 
  const personInfo =[

    {
     Name:"Mehedi hasan",
     Id:"192-15-13298",
     sec:"E",
     cgpa:"3.52"
    },

    {

     Name:"Tanim",
     Id:"192-15-13296",
     sec:"E",
     cgpa:"3.60"

    },

    {
     
     Name:"Saif",
     Id:"192-15-13290",
     sec:"E",
     cgpa:"3.55"

    },

    {
     
      Name:"Evan",
      Id:"192-15-13289",
      sec:"E",
      cgpa:"3.60"
 
     },

     {
     
      Name:"Saiful",
      Id:"192-15-13284",
      sec:"E",
      cgpa:"3.50"
 
     },

     {
     
      Name:"Alamin",
      Id:"192-15-13282",
      sec:"E",
      cgpa:"3.56"
 
     },

     {
     
      Name:"Akash",
      Id:"192-15-1300",
      sec:"E",
      cgpa:"3.66"
 
     },

     {
     
      Name:"Shoaib",
      Id:"192-15-12986",
      sec:"E",
      cgpa:"3.66"
 
     }


 ]
   
  return (

    <div className="App">

    {
   
       personInfo.map(person =><Section name={person.Name} id ={person.Id} sec ={person.sec} cgpa ={person.cgpa} ></Section>)

    }
       

    </div> 

  );

}


export default App;


function Section(props) {


  const{name,id,sec,cgpa}=props


  return(

      <div className="section">

           <h1 style={{textAlign : "center"}}>{name}</h1>

          <ul>
            <li>ID :- {id}</li>
            <li>SEC :- {sec}</li>
            <li>CGPA :- {cgpa}</li>
          </ul>

      </div>

  )
  
}
