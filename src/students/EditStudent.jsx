import { useParams } from "react-router-dom";
import StudentForm from "./StudentForm";

function EditStud() {
    const {id} =useParams();
    const unSelectedCategories = [
        {id: 1, name: "Basics"},
        {id: 2, name: "Intermediate"},
    ];
    const selectedCategories = [{id:3,name:"Advanced"}];

    const unSelectedCourses = [
        {id: 1, name: "Java Essentials"},
        {id: 2, name: "Mobile Android Development"},
    ];
    const selectedCourses = [{id:3,name:"Full Stack Development"}];
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <h3>Edit Student</h3>
                    <StudentForm
                        model={{
                            name:"Van Damme",
                            rollno:"5102",
                            isActive:true,
                            dateofBirth:new Date("1983-05-10"),
                            photoURL:
                                "https://www.google.com/imgres?q=student%20photos&imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fid%2F1336832660%2Fphoto%2Fmale-teenage-student-in-yellow-background-stock-photo.jpg%3Fs%3D612x612%26w%3D0%26k%3D20%26c%3D24LklaK0hoPbe7bGCSHZPbaWJKV6yH0F1b8lABbOS30%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fphoto%2Fmale-teenage-student-in-yellow-background-stock-photo-gm1336832660-417944558&docid=Ku2r-NVUss3njM&tbnid=3OyviIPxR1O2xM&vet=12ahUKEwjK0ZzF8rmFAxVg9zgGHYPSAIoQM3oFCIABEAA..i&w=612&h=408&hcb=2&ved=2ahUKEwjK0ZzF8rmFAxVg9zgGHYPSAIoQM3oFCIABEAA"
                        }}
                        onSubmit={async(values)=>{
                            await new Promise((r)=>setTimeout(r,1000));
                            alert(JSON.stringify(id,null,2));
                            alert(JSON.stringify(values,null,2));
                        }}
                        unSelectedCourses={unSelectedCourses}
                        selectedCourses={selectedCourses}
                        unSelectedCategories={unSelectedCategories}
                        selectedCategories={selectedCategories}
                    />
                </div>
            </div>
        </>
    )
}export default EditStud;
