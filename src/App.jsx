import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";

    async function fectchdata() {
      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      } catch (err) {
  
        setError(err.message);
      } finally {
   
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }


    fectchdata(); 
  }, []);


 

  return (
    <>
      {loading ? (
        <p>Loading....</p>
      ) : (
        data.map((item) => (
          <div key={item.id}>
            <p><strong>{item.name}</strong></p>
            <p>{item.email}</p>
          </div>
        ))
      )}
    </>
  );
}

export default App;