import React, { useState, useEffect } from "react";

function StudentDetails({ student, onRatingSubmit }) {
  const [rating, setRating] = useState(student.rating || 0);

  // Update local state if the student prop changes (e.g. initial load)
  useEffect(() => {
    setRating(student.rating);
  }, [student.rating]);

  const handleSubmit = () => {
    onRatingSubmit(student.name, rating);
  };

  return (
    <div style={{ marginTop: "10px", padding: "10px", background: "#f1f1f1", borderLeft: "4px solid #007bff" }}>
      <h4>Student Details & Rating</h4>
      <p>Name: {student.name} | Course: {student.course}</p>

      <label>
        Rating (1-5):
        <input
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          style={{ marginLeft: "8px", width: "60px" }}
        />
      </label>

      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>
        Update Rating
      </button>
    </div>
  );
}

export default StudentDetails;