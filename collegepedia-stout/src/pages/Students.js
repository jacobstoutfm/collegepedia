import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/students")
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
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
    </div>
  );
}

export default App;