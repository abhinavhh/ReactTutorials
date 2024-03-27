import React from "react";
import { useParams } from "react-router-dom";
import CourseForm from "./CourseForm";

function EditCourse() {
  const { id } = useParams();

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h3>Edit Course</h3>
          {/* <p>Select Course id is {id}</p> */}
          <CourseForm
            model={{name:"Andrroid Mobile Application"}}
            onSubmit={async (values)=>{
              await new Promise((r)=>setTimeout(r,500));
              alert(JSON.stringify(id,null,2));
              alert(JSON.stringify(values,null,2));
            }}
            />
        </div>
      </div>
    </>
  );
}

export default EditCourse;
