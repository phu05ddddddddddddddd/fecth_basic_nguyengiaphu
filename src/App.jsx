import { useState, useEffect } from 'react' 

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
      .catch((error) => console.error("Lỗi rồi:", error));
  }, []); 

  return (
    <>
      {data.map((item) => (
      
        <div key={item.id} >
          <p> {item.name}</p>
          <p> {item.email}</p>
        </div>
      ))}
    </>
  )
}

export default App