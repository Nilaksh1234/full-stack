import React, { useState } from "react";
import AddStudent from "./AddStudent";
import StudentList from "./StudentList";
import DisplayMessage from "./DisplayMessage";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Alice", age: 20, course: "Computer Science", rating: 4 },
    { id: 2, name: "Bob", age: 22, course: "Mathematics", rating: 3 },
  ]);
  const [message, setMessage] = useState("Welcome to the Student Portal!");

  // 1. Add a new student to the list
  const handleAddStudent = (newStudent) => {
    const studentWithId = { ...newStudent, id: Date.now() };
    setStudents([...students, studentWithId]);
    setMessage(`Added new student: ${newStudent.name}`);
  };

  // 2. Handle clicking a student "Send to App" button
  const handleStudentClick = (student) => {
    setMessage(`You selected: ${student.name} (Course: ${student.course})`);
  };

  // 3. Update rating for a specific student
  const handleRatingSubmit = (name, newRating) => {
    setStudents((prevStudents) =>
      prevStudents.map((s) =>
        s.name === name ? { ...s, rating: newRating } : s
      )
    );
    setMessage(`Updated ${name}'s rating to ${newRating}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Student Management System</h1>
      
      <DisplayMessage message={message} />
      
      <AddStudent onAddStudent={handleAddStudent} />
      
      <hr />
      
      <StudentList 
        students={students} 
        onStudentClick={handleStudentClick} 
        onRatingSubmit={handleRatingSubmit}
      />
    </div>
  );
}

export default App;