import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  const [student, setStudent] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setStudent({
      name: name,
      email: email,
      course: course
    });
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <label>Course</label>
        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option value="B.Tech CSE">B.Tech CSE</option>
          <option value="B.Tech IT">B.Tech IT</option>
          <option value="B.Tech ECE">B.Tech ECE</option>
        </select>

        <button type="submit">Register</button>
      </form>

      {student && (
        <div className="details">
          <h2>Submitted Student Details</h2>
          <p><b>Name:</b> {student.name}</p>
          <p><b>Email:</b> {student.email}</p>
          <p><b>Course:</b> {student.course}</p>
        </div>
      )}
    </div>
  );
}

export default App;