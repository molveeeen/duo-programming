import React, { useState } from "react";

const Paragraph = () => {
  const [text, setText] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  const handleAddParagraph = () => {
    if (text.trim() !== "") {
      setParagraphs([...paragraphs, text]);
      setText("");
    }
  };

  return (
    <div>
      <div className="arr">
        <input type="text" value={text} onChange={handleInputChange} />
        <button onClick={handleAddParagraph}>Add Paragraph</button>
      </div>
      {paragraphs.map((paragraph, index) => (
        <p className="arr" key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  );
};

export default Paragraph;
