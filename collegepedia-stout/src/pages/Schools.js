import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [secondposts, setSecondposts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/schools")
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getComments")
      .then((result2) => {
        console.log(result2.data);
        setSecondposts(result2.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [rating, setRating] = useState({
    university_id: null,
    rating: null,
    comments: ""
  })

  const handleRating = (universityId, rating) => {
    setRating({
      university_id: universityId,
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
      await axios.post("http://localhost:3000/universityRating", rating)
    }catch(err){
      
    }
    window.location.reload(false)
  }

  return (
    <div>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <h4>University: {data.name}</h4>
            <p>Address: {data.address}  </p>
            <p>Average Rating: {average} </p>
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
    let universityName = "";
    if (data.university_id === 1) {
      universityName = "Rowan";
    } else if (data.university_id === 2) {
      universityName = "Rutgers";
    }
    return (
      <div key={data.university_id}>
        <p>{data.comments} | {universityName} University</p>
      </div>
    );
  })}
</div>
    </div>
  );
}

export default App;