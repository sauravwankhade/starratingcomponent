import { useState } from "react";

const StarRating = (props) => {
  const limit = props.limit || 5;

  const [rating, setRating] = useState(props.rating || 2);

  const handleClick = (i) => {
    setRating(i + 1);
  };

  return (
    <>
      {[...Array(limit)].map((_, i) => (
        <span
          className={i < rating ? "star rated" : "star"}
          key={i}
          onClick={() => handleClick(i)}
        >
          {i < rating ? "⭐" : "☆"}
        </span>
      ))}
    </>
  );
};

export default StarRating;
