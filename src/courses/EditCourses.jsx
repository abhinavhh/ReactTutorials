import React from "react";
import { useParams } from "react-router-dom";
import CourseForm from "./CourseForm";
import { courseCreationDTOWithIdAndName } from "./courses.model.d";

function EditCourse() {
  const { id } = useParams(1);

  // Assuming the CourseForm component accepts a 'model' prop
  const initialModel = { name: "Android Mobile Application" }; // Define your initial model here

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3>Edit Course</h3>
          {/* <p>Select Course id is {id}</p> */}
          <CourseForm
            model={{ id: id, name: "Initial Course Name"  }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(id, null, 2));
              alert(JSON.stringify(values, null, 2));
            }}
          />
        </div>
      </div>
    </>
  );
}

export default EditCourse;
