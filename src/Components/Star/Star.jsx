import { FaStar } from "react-icons/fa";
import "./styles.css";
import { useState } from "react";
const StarRating = ({ noOfStars = 10 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };
  const handleHover = (index) => {
    setHover(index);
  };
  const handleMouseLeave = (index) => {
     setHover(rating) // jaba hover hatcha, pahila jun rating thyo tei rating dekhaunu paryo
  };
  return (
    <div className="container">
      {[...Array(noOfStars)].map((_, index) => {
        index++;
        return (
          <FaStar
            className={index <= (hover || rating) ? "active" : "inactive"}
            key={index}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleHover(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
