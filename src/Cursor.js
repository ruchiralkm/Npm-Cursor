import React, { useEffect } from "react";
import "./cursor.css"; // Ensure the CSS is imported

const Ruchiralkcursor = () => {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.classList.add("cursor");
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.top = `${e.pageY - 10}px`;
      cursor.style.left = `${e.pageX - 10}px`;
    };

    const clickEffect = () => {
      cursor.classList.add("expand");
      setTimeout(() => cursor.classList.remove("expand"), 300);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("click", clickEffect);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("click", clickEffect);
      cursor.remove(); // Clean up on unmount
    };
  }, []);

  return null; // No visible JSX needed since the cursor is created dynamically
};

export default Ruchiralkcursor;
