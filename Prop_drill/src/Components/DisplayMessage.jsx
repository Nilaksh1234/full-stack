import React from "react";

function DisplayMessage({ message, MessageComponent }) {
  return (
    <div style={{ marginBottom: "20px", padding: "10px", border: "1px solid #ddd" }}>
      <h2>Display Message</h2>
      <p>{message}</p>
      {MessageComponent && <MessageComponent />}
    </div>
  );
}

export default DisplayMessage;