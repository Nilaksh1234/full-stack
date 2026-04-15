import React from "react";
// import StudentItem from "./StudentItem"; // Fixed missing import

function StudentList({ students, onStudentClick, onRatingSubmit }) {
  return (
    <div>
      <h2>Student List</h2>
      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          name={student.name}
          age={student.age}
          onStudentClick={onStudentClick}
          onRatingSubmit={onRatingSubmit}
        />
      ))}
    </div>
  );
}

export default StudentList;