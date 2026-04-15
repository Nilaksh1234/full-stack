import React, { useState } from "react";

function AddStudent({ onAddStudent }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !age.trim() || !course.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    const newStudent = {
      name: name.trim(),
      age: Number(age),
      course: course.trim(),
      rating: 0,
    };

    console.log("AddStudent sending new student to App:", newStudent);

    if (onAddStudent) {
      onAddStudent(newStudent);
    }

    setName("");
    setAge("");
    setCourse("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add Student</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ marginRight: "8px" }}
      />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        style={{ marginRight: "8px" }}
      />

      <input
        type="text"
        placeholder="Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        style={{ marginRight: "8px" }}
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;