import React from "react";
import PropTypes from "prop-types";

function Card({ img, ...props }) {
  return (
    <div className="card" style={ { width: "18rem" } }>
      { img && <img src={img} className="card-img-top" alt="card" /> }
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}

export default Card;

Card.propTypes = {
  img: PropTypes.string,
}