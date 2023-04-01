CREATE TABLE university (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  address TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE university_rating (
  id SERIAL PRIMARY KEY,
  university_id INTEGER REFERENCES university(id),
  rating INTEGER NOT NULL,
  comments TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE department (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  university_id INTEGER REFERENCES university(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE major (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  department_id INTEGER REFERENCES department(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE course (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  code VARCHAR(255) NOT NULL,
  major_id INTEGER REFERENCES major(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE course_rating (
  id SERIAL PRIMARY KEY,
  course_id INTEGER REFERENCES course(id),
  rating INTEGER NOT NULL,
  comments TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE professor (
  id SERIAL PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE professor_rating (
  id SERIAL PRIMARY KEY,
  professor_id INTEGER REFERENCES professor(id),
  rating INTEGER NOT NULL,
  comments TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE teaches (
  professor_id INTEGER REFERENCES professor(id),
  course_id INTEGER REFERENCES course(id),
  PRIMARY KEY (professor_id, course_id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE service (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  university_id INTEGER REFERENCES university(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE service_rating (
  id SERIAL PRIMARY KEY,
  service_id INTEGER REFERENCES service(id),
  rating INTEGER NOT NULL,
  comments TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE housing (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  location VARCHAR(255) NOT NULL,
  university_id INTEGER REFERENCES university(id),
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE housing_rating (
  id SERIAL PRIMARY KEY,
  housing_id INTEGER REFERENCES housing(id),
  rating INTEGER NOT NULL,
  comments TEXT,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE user_authentication (
  id SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
