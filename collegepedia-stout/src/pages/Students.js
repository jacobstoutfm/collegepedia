import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [secondposts, setSecondposts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/studentsLogged")
      .then((result2) => {
        console.log(result2.data);
        setSecondposts(result2.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h4> These are the registered users who have contributed to Collegepedia: </h4>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <h4>Name: {data.firstname} {data.lastname}</h4>
            <p>University: {data.university}  </p>
          </div>
        );
      })}
      <h4> These are the registered students on Collegepedia: </h4>
      {secondposts.map((data) => {
        return (
          <div key={data.id}>
            <p>{data.username} | {data.university} University </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;