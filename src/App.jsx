import { useState, useEffect } from 'react' 
import './App.css'

function App() {

  const [data, setData] = useState([]);

  
  useEffect(() => {
    var url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })  
  }, []); 

  return (
    <>
      {data.map((item) => (
       
        <div >
          <p> {item.name}</p>
          <p> {item.email}</p>
        </div>
      ))}
    </>
  )
}

export default App