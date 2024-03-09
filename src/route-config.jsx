import IndexCourse from "./courses/IndexCourses";
import MainPage from "./students/MainPage";

const routes=[
    {path:'/courses',component:IndexCourse},
    {path:'/',component:MainPage,exact:true}
];
export default routes;