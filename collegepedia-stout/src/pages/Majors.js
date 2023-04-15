import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/majors")
      .then((result) => {
        console.log(result.data);
        setPosts(result.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {posts.map((data) => {
        return (
          <div key={data.id}>
            <h4>Major: {data.name}</h4>
            <p>Department ID: {data.department_id}  </p>
            <p>Rating:  </p>
          </div>
        );
      })}
    </div>
  );
}

export default App;