import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [secondposts, setSecondposts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/majors")
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/majorRating")
      .then((result2) => {
        console.log(result2.data);
        setSecondposts(result2.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [rating, setRating] = useState({
    major_id: null,
    rating: null,
    comments: ""
  })

  const handleRating = (majorId, rating) => {
    setRating({
      major_id: majorId,
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
      await axios.post("http://localhost:3000/majorRating", rating)
    }catch(err){
      
    }
    window.location.reload(false)
  }

  return (
    <div>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <h4>Major: {data.name}</h4>
            <p>Department: {data.department_id}  </p>
            <p>Average Rating:  </p>
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
  let majorName = "";
  const major = posts.find((mj) => mj.id === data.major_id);
  if (major) {
    majorName = `${major.name}`;
  }
        return (
          <div key={data.major_id}>
            <p>{data.comments} | {data.rating}/5 | {majorName} </p>
          </div>
        );
      })}
    </div>
        </div>
  );
}

export default App;