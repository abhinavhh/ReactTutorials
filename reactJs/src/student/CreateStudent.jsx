import React from "react";
import StudentForm from "./StudentForm";

function CreateStud() {
    const unSelectedCategories = [
        {id: 1, name: "Basics"},
        {id: 2, name: "Intermediate"},
        {id: 3, name: "Advanced"},
    ];
    const selectedCategories = [];

    const unSelectedCourses = [
        {id: 1, name: "Java Essentials"},
        {id: 2, name: "Mobile Android Development"},
        {id: 3, name: "Full Stack Development"},
    ];
    const selectedCourses = [];

    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h3>Create Student</h3>
                    <StudentForm
                        model={{
                            name: "",
                            rollno: "",
                            isActive: false,
                            dateofBirth: undefined,
                        }}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 1000));
                            alert(JSON.stringify(values, null, 2));
                        }}
                        unSelectedCourses={unSelectedCourses}
                        selectedCourses={selectedCourses}
                        unSelectedCategories={unSelectedCategories}
                        selectedCategories={selectedCategories}
                    />
                </div>
            </div>
        </div>
    );
}

export default CreateStud;
