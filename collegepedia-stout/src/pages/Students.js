import {useState} from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState({data: []});
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const {data} = await axios.get('http://localhost:3000/students', {
        headers: {
          Accept: 'application/json'
        },
      });

      console.log('data is: ', JSON.stringify(data, null, 4));

      setData(data);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  console.log(data);

  return (
    <div>
      {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Print users</button>

      {isLoading && <h2>Loading...</h2>}

      {data.data.map(person => {
        return (
          <div key={person.firstname}>
            <h2>{person.lastname}</h2>
            <h2>{person.university}</h2>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default App;