import { useEffect, useState } from "react";

const MouseMove = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handlePosition);

    return () => {
      window.removeEventListener("mousemove", handlePosition);
    };
  }, []);

  return (
    <div>
      <p>The position of X-axis: {position.x}</p>
      <p>The position of Y-axis: {position.y}</p>
    </div>
  );
};

export default MouseMove;
