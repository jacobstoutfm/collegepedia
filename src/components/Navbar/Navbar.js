const navbar= () =>{
    return (
    <div>
      <li>
        <Link to="/">Schools</Link>
      </li>
      <li>
        <Link to="/majors">Majors</Link>
      </li>
      <li>
        <Link to="/students">Students</Link>
      </li>
      <li>
        <Link to="/professors">Professors</Link>
      </li>
    </div>
    );
  }
  export default navbar;