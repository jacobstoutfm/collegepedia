import axios from 'axios';
import React, { useEffect, useState } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  const [secondposts, setSecondposts] = useState([]);
  const [newProf, setNewProf] = useState({
    first_name: '',
    last_name: '',
  });

  useEffect(() => {
    axios
      .get('http://localhost:3000/professors')
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get('http://localhost:3000/profRating')
      .then((result2) => {
        console.log(result2.data);
        setSecondposts(result2.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [rating, setRating] = useState({
    professor_id: null,
    rating: null,
    comments: '',
  });

  // const handleRating = (profId, rating) => {
  //   setRating({
      // professor_id: profId,
      // rating: rating,
      // comments: '',
  //   });
  // };

  const handleRating = (profId, rating) => {
    const updatedPosts = posts.map((post) => {
      setRating({
        professor_id: profId,
        rating: rating,
        comments: '',
      });
      if (post.id === profId) {
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

  const handleChange = (e) => {
    setRating((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/profRating', rating);
    } catch (err) {
      console.log(err);
    }
    window.location.reload(false);
  };

  const getAverageRating = (profId) => {
    const ratings = secondposts.filter(
      (rating) => rating.professor_id === profId
    );
    if (ratings.length === 0) {
      return 'N/A';
    } else {
      const sum = ratings.reduce((acc, rating) => acc + rating.rating, 0);
      const average = sum / ratings.length;
      return average.toFixed(2);
    }
  };

  const handleNewProfChange = (e) => {
    setNewProf((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleNewProfessorSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(
        'http://localhost:3000/professorsNew',
        newProf
      );
      console.log(result.data);
      setPosts((prev) => [...prev, result.data]); // fix
      setNewProf({
        first_name: '',
        last_name: '',
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
            <h4>Professor: {data.first_name} {data.last_name}</h4>
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
      <h4> Add a professor: </h4>
            <form onSubmit={handleNewProfessorSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="first_name"
            value={newProf.first_name}
            onChange={handleNewProfChange}
          />
        </label>
        <label>
           Last Name:
          <input
            type="text"
            name="last_name"
            value={newProf.last_name}
            onChange={handleNewProfChange}
          />
        </label>
        <button type="submit">Add Professor</button>
      </form>
      
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