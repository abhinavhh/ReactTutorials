// import logo from './logo.svg';
import React from 'react'
import './App.css'
// import Root from './Hooks-Context'
// import ValueContext from './ValueContext';
// import HooksEffects from './Hooks-Effect';
// import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './Menu'
import MainPage from './student/MainPage'
import IndexCourse from './courses/IndexCourses'
import IndexCateg from './categories/IndexCategory';
import IndexInstr from './instructor/IndexInstructor';
import CreateInstrn from './instructor/CreateInstructor';
import SearchStud from './student/SearchStudent'
import CreateCourse from './courses/CreateCourses';
import EditCourse from './courses/EditCourses';
import EditInstrn from './instructor/EditInstructor'
import CreateCateg from './categories/CreateCategory'
import EditCateg from './categories/EditCategory';
import CreateStud from './student/CreateStudent';
import EditStud from './student/EditStudent';
export default function App() {
//   const [hide,setHide]=useState(false);
//   return (
//     <>
//       <div>
//         <h1>hello world..</h1>
//       </div>
//       <input type="checkbox"  onChange={()=> setHide(!hide)} />
//         Click to Hide
//       {hide ? null:<HooksEffects/>}
//       <ValueContext.Provider value={hide}>
//         <Root />
//       </ValueContext.Provider>
//     </>
//   );
// }export default App;



// for Student Project
// *******************************

// import './App.css';
// import React from 'react';
// import StudentMain from './students/Student';
// import StudList from './students/Student-list';
// import Studlist from './students/Stud_list2';
// import { useEffect, useState } from 'react';
// import But from './students/Button';
// import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
// import Menu from './Menu';
// import IndexCourse from './courses/IndexCourses';
// import MainPage from './students/MainPage';
// import routes from './route-config';
// function App() {
  
  // for Student.jsx file

  // const drafStudent ={
  //     id:1,
  //     name:"ABHINAV",
  //     photo:"https://th.bing.com/th/id/OIP.Dpj3U51gISJMWUROJ6907wHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  // };
  //   return (
  //     <>
  //         {/* <h1>Hello World.</h1> */}
  //         {/* <StudentMain {...drafStudent}/> */}
  //         {/* call StudentMain(props) */}
  //     </>
  //   );
  // }export default App;

  
  //for Student-List.jsx file

//   const studentlist=[
//     {
//       id:1,
//       rollno:"$100",
//       name:"Adarsh",
//       photo:"https://th.bing.com/th/id/OIP.Dpj3U51gISJMWUROJ6907wHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     },
//     {
//       id:2,
//       rollno:"$101",
//       name:"Abhinav",
//       photo:"https://th.bing.com/th/id/OIP.Dpj3U51gISJMWUROJ6907wHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     },
//   ];
//   const toperslist=[
//     {
//       id:1,
//       rollno:"$100",
//       name:"Adarsh",
//       photo:"https://th.bing.com/th/id/OIP.Dpj3U51gISJMWUROJ6907wHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
//     },
//   ];

//   return (
//     <>
//       {/* call StudList */}
//         <h1>Student List</h1>
//         <Studlist students={studentlist}/>
//         <h1>Toppers List</h1>
//         <Studlist students={toperslist}/>
//     </>
//   );
// }export default App;


//for Stud_list2.jsx file

  // const [students,setStudents] = useState({
  //   liststudents:[],
  //   listtoppers:[],
  // });
  // useEffect(()=> {
  //   const timerId = setTimeout(()=> {
  //     setStudents({
  //       liststudents:[
  //         {
  //           id:1,
  //           rollno:"$100",
  //           name:"Adarsh",
  //           photo:"https://th.bing.com/th/id/OIP.Dpj3U51gISJMWUROJ6907wHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //         },
  //         {
  //           id:2,
  //           rollno:"$101",
  //           name:"Abhinav",
  //           photo:"https://th.bing.com/th/id/OIP.Dpj3U51gISJMWUROJ6907wHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //         },
  //       ],
  //       listtoppers:[
  //         {
  //           id:1,
  //           rollno:"$100",
  //           name:"Adarsh",
  //           photo:"https://th.bing.com/th/id/OIP.Dpj3U51gISJMWUROJ6907wHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //         },
  //       ],
  //     })
  //   },3000);
  //   return () => clearTimeout(timerId);
  // },[]);
  // return(
    // <>
        {/* <h3>Students List</h3>
        <Studlist students={students.liststudents}/>

        <h3>Toppers List</h3>
        <Studlist students={students.listtoppers}/> */}


        {/* for bootstrap */}


        {/* <div className="container">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">
                Welcome to my Website
              </h5>
              <But>Click to Login</But>
            </div>
          </div>
          <div className="card">
            <div className="card-body">
              <h3>Students List</h3>
              <Studlist students={students.liststudents}/>

              <h3>Toppers List</h3>
              <Studlist students={students.listtoppers}/>
            </div>
          </div>
        </div>
    </>
  );
}export default App; */}


//for Menu.jsx file


  // const [students,setStudents] = useState({
  //   liststudents:[],
  //   listtoppers:[],
  // });
  // useEffect(()=> {
  //   const timerId = setTimeout(()=> {
  //     setStudents({
  //       liststudents:[
  //         {
  //           id:1,
  //           rollno:"$100",
  //           name:"Adarsh",
  //           photo:"https://th.bing.com/th/id/OIP.Dpj3U51gISJMWUROJ6907wHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //         },
  //         {
  //           id:2,
  //           rollno:"$101",
  //           name:"Abhinav",
  //           photo:"https://th.bing.com/th/id/OIP.Dpj3U51gISJMWUROJ6907wHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //         },
  //       ],
  //       listtoppers:[
  //         {
  //           id:1,
  //           rollno:"$100",
  //           name:"Adarsh",
  //           photo:"https://th.bing.com/th/id/OIP.Dpj3U51gISJMWUROJ6907wHaE7?w=244&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  //         },
  //       ],
  //     })
  //   },1000);
  //   return () => clearTimeout(timerId);
  // },[]);


//     return(
//       <>
//         <Router>
//           <Menu/>
//             <div className="container">
//               <div className="card">
//                 <div className="card-body">
//                   <h5 className="card-title">
//                     Welcome to my Website
//                   </h5>
//                   <But>Click to Login</But>
//                 </div>
//               </div>
//               <Routes>
//                 <Route path="/"element={
//                   <div className="card">
//                     <div className="card-body">
//                       <h3>Students List</h3>
//                       <Studlist students={students.liststudents}/>

//                       <h3>Toppers List</h3>
//                       <Studlist students={students.listtoppers}/>
//                     </div>
//                   </div>
//                 }/>
//                 <Route path="/courses" element={
//                   <IndexCourse/>
//                 }/>
//               </Routes>
//             </div>
//           </Router>
//         </>
//     );
// }export default App;

// for MainPage.jsx

return (
  <>
  <Router>
      <Menu />
      <div className="container">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">
              Welcome to Techies
            </h5>
            {/* Replace <But>Click to Login</But> with <button>Click to Login</button> */}
            <button className="btn btn-primary">Click to Login</button>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Uncomment the following if IndexCourse is defined */}
          <Route path="/courses" element={<IndexCourse />} />
          <Route path="/categories" element={<IndexCateg />} />
          <Route path="/instructor" element={<IndexInstr />} />
          <Route path="/student/CreateStudent" element={<CreateStud/>}/>
          <Route path="/student/SearchStudent" element={<SearchStud />}/>
          <Route path="/student/EditStudent" element={<EditStud/>}/>
          <Route path="/courses/CreateCourses" element={<CreateCourse/>}/>
          <Route path="/courses/EditCourses" element={<EditCourse/>}/>
          <Route path="/instructor/CreateInstructor" element={<CreateInstrn/>}/>
          <Route path="/instructor/EditInstructor" element={<EditInstrn/>}/>
          <Route path="/categories/CreateCategory" element={<CreateCateg/>}/>
          <Route path="/categories/EditCategory" element={<EditCateg/>}/>
        </Routes>
      </div>
  </Router>
  </>
)
}

// for route-config.jsx file

// return(
//   <>
//     <Router>
//       <Menu/>
//         <div className="container">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">
//                 Welcome to my Website
//               </h5>
//               <But>Click to Login</But>
//             </div>
//           </div>
//           <Routes>
//             {routes.map((route) => (
//               <route key={route.path} path={route.path} exact={route.exact} element={
//                 <route.component />
//               }/>
//             ))}
//           </Routes>
//         </div>
//       </Router>
//     </>
// );
// }export default App;
