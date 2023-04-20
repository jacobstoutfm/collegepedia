import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [secondposts, setSecondposts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/professors")
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/profRating")
      .then((result2) => {
        console.log(result2.data);
        setSecondposts(result2.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [rating, setRating] = useState({
    professor_id: null,
    rating: null,
    comments: ""
  })

  const handleRating = (profId, rating) => {
    setRating({
      professor_id: profId,
      rating: rating,
      comments: ""
    });
  };

  const handleChange = (e) =>{
    setRating(prev=>({...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await axios.post("http://localhost:3000/profRating", rating)
    }catch(err){
      
    }
    window.location.reload(false)
  }

  const getAverageRating = (profId) => {
    const ratings = secondposts.filter((rating) => rating.professor_id === profId);
    if (ratings.length === 0) {
      return "N/A";
    } else {
      const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
      const average = sum / ratings.length;
      return average.toFixed(2);
    }
  };

  return (
    <div>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <h4>Professor: {data.first_name} {data.last_name}</h4>
            <p> Average Rating: {getAverageRating(data.id)} </p>
            <button onClick={() => handleRating(data.id, 1)}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/2048px-Full_Star_Yellow.svg.png" height = "25" width="25" alt="star"/> 
              </button> 
              <button onClick={() => handleRating(data.id, 2)}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/2048px-Full_Star_Yellow.svg.png" height = "25" width="25" alt="star"/> 
              </button> 
              <button onClick={() => handleRating(data.id, 3)}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/2048px-Full_Star_Yellow.svg.png" height = "25" width="25" alt="star"/> 
              </button> 
              <button onClick={() => handleRating(data.id, 4)}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/2048px-Full_Star_Yellow.svg.png" height = "25" width="25" alt="star"/> 
              </button> 
            <button onClick={() => handleRating(data.id, 5)}><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/2048px-Full_Star_Yellow.svg.png" height = "25" width="25" alt="star"/> 
              </button>
            <input type="text" placeholder="comments" onChange={handleChange} name="comments"/>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );
      })}
          <h4> These are the comments: </h4>
          <div>
          {secondposts.map((data) => {
  let profName = "";
  const professor = posts.find((prof) => prof.id === data.professor_id);
  if (professor) {
    profName = `${professor.first_name} ${professor.last_name}`;
  }
        return (
          <div key={data.professor_id}>
            <p>{data.comments} | {data.rating}/5 | {profName} </p>
          </div>
        );
      })}
    </div>
        </div>
  );
}

export default App;