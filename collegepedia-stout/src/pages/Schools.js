import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [secondposts, setSecondposts] = useState([]);
  const [newSchool, setNewSchool] = useState({
    name: '',
    address: '',
  });

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
      .get("http://localhost:3000/universityRating")
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

  // const handleRating = (universityId, rating) => {
  //   setRating({
      // university_id: universityId,
      // rating: rating,
      // comments: ""
  //   });
  // };

  const handleRating = (universityId, rating) => {
    const updatedPosts = posts.map((post) => {
      setRating({
        university_id: universityId,
        rating: rating,
        comments: ""
      });
      if (post.id === universityId) {
        return {
          ...post,
          selectedRating: rating,
        };
      } else {
        return post;
      }
    });
    setPosts(updatedPosts);
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

  const getAverageRating = (schoolId) => {
    const ratings = secondposts.filter((rating) => rating.university_id === schoolId);
    if (ratings.length === 0) {
      return "N/A";
    } else {
      const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
      const average = sum / ratings.length;
      return average.toFixed(2);
    }
  };

  const handleNewSchoolChange = (e) => {
    setNewSchool((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNewSchoolSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        'http://localhost:3000/schoolNew',
        newSchool
      );
      console.log(result.data);
      setPosts((prev) => [...prev, result.data]); // fix
      setNewSchool({
        name: '',
        address: '',
      });
    } catch (error) {
      console.log(error);
    }
    window.location.reload(false);
  };
  return (
    <div>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <h4>University: {data.name}</h4>
            <p>Address: {data.address}  </p>
            <p> Average Rating: {getAverageRating(data.id)} </p>
            <button onClick={() => handleRating(data.id, 1)}>
      {data.selectedRating >= 1 ? (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/220px-Red_star.svg.png" height="25" width="25" alt="star" />
      ) : (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/2048px-Full_Star_Yellow.svg.png" height="25" width="25" alt="star" />
      )}
    </button>
    <button onClick={() => handleRating(data.id, 2)}>
      {data.selectedRating >= 2 ? (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/220px-Red_star.svg.png" height="25" width="25" alt="star" />
      ) : (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/2048px-Full_Star_Yellow.svg.png" height="25" width="25" alt="star" />
      )}
    </button>
    <button onClick={() => handleRating(data.id, 3)}>
      {data.selectedRating >= 3 ? (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/220px-Red_star.svg.png" height="25" width="25" alt="star" />
      ) : (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/2048px-Full_Star_Yellow.svg.png" height="25" width="25" alt="star" />
      )}
    </button>
    <button onClick={() => handleRating(data.id, 4)}>
      {data.selectedRating >= 4 ? (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/220px-Red_star.svg.png" height="25" width="25" alt="star" />
      ) : (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/2048px-Full_Star_Yellow.svg.png" height="25" width="25" alt="star" />
      )}
    </button>
    <button onClick={() => handleRating(data.id, 5)}>
      {data.selectedRating >= 5 ? (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/220px-Red_star.svg.png" height="25" width="25" alt="star" />
      ) : (
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Full_Star_Yellow.svg/2048px-Full_Star_Yellow.svg.png" height="25" width="25" alt="star" />
      )}
    </button>
            <input type="text" placeholder="comments" onChange={handleChange} name="comments"/>
            <button onClick={handleSubmit}>Submit</button>
          </div>
        );
      })}
            <h4> Add a school: </h4>
            <form onSubmit={handleNewSchoolSubmit}>
        <label>
          School:
          <input
            type="text"
            name="name"
            value={newSchool.name}
            onChange={handleNewSchoolChange}
          />
        </label>
        <label>
           Address:
          <input
            type="text"
            name="address"
            value={newSchool.address}
            onChange={handleNewSchoolChange}
          />
        </label>
        <button type="submit">Add University</button>
      </form>
      
      <h4> These are the comments: </h4>
      <div>
  {secondposts.map((data) => {
  let universityName = "";
  const uni = posts.find((school) => school.id === data.university_id);
  if (uni) {
    universityName = `${uni.name}`;
  }
    return (
      <div key={data.university_id}>
        <p>{data.comments} | {data.rating}/5 | {universityName}</p>
      </div>
    );
  })}
</div>
    </div>
  );
}

export default App;