import React from "react";
import StudentDetails from "./studentDetails"; // Fixed casing

function StudentItem({ student, name, age, onStudentClick, onRatingSubmit }) {
  const handleClick = () => {
    onStudentClick(student);
  };

  return (
    <>
      <StudentDetails />
      <div
        style={{
          border: "1px solid #aaa",
          margin: "10px 0",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <h3>{name}</h3>
        <p>Age: {age}</p>
        <p>Course: {student.course}</p>

        <button onClick={handleClick}>Send to App (Alert Message)</button>

        <StudentDetails student={student} onRatingSubmit={onRatingSubmit} />
      </div>
    </>
  );
}

export default StudentItem;
