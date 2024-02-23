import StudentMain from "./Student";
import style from "./Student_list.module.css";
import React from "react";
function StudList(props) {
    return(
        <div className={style.mainmain}>
            {props.students.map((student)=>(
                <StudentMain {...student} key={student.id}/>
            ))}
        </div>
    );
}

StudList.studentListProps = {
    students:[],
};
export default StudList;
