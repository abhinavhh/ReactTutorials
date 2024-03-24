import React from "react";
import { useParams } from "react-router-dom";

function EditCourse() {
  const { id } = useParams();

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3>Edit Course</h3>
          <p>Select Course id is {id}</p>
        </div>
      </div>
    </>
  );
}

export default EditCourse;
