import React from "react";

const Course = ({ data }) => (
  <div className="course">
    <img src={ data.img } alt="Curso" />
    <strong> { data.title } </strong>
    <span>{ data.intitute }</span>
    <p>{ data.description }</p>
  </div>
)

export default Course;
