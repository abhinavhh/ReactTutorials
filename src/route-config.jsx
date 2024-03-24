import IndexCourse from "./courses/IndexCourses";
import CreateCourse from "./courses/CreateCourses";
import EditCourse from "./courses/EditCourses";

import Indexcateg from "./categories/IndexCategory";
import Createcateg from "./categories/CreateCategory";
import Editcateg from "./categories/EditCategory";

import IndexInstr from "./instructor/IndexInstructor";
import CreateInstr from "./instructor/CreateInstructor";
import EditInstr from "./instructor/EditInstructor";

import SearchStud from "./student/SearchStudent";
import EditStud from "./student/EditStudent";
import CreateStud from "./student/CreateStudent";

import Main from './student/MainPage';
import RedirectPage from "./assets/RedirectPage";

const routes = [
  { path: '/courses', component: IndexCourse, exact: true },
  { path: '/courses/create', component: CreateCourse },
  { path: '/courses/edit/:id(\\id+)', component: EditCourse },

  { path: '/categories', component: Indexcateg, exact: true },
  { path: '/categories/create', component: Createcateg },
  { path: '/categories/edit/:id(\\id+)', component: Editcateg },

  { path: '/instructor', component: IndexInstr, exact: true },
  { path: '/instructor/create', component: CreateInstr },
  { path: '/instructor/edit/:id(\\id+)', component: EditInstr },

  { path: '/student', component: SearchStud, exact: true },
  { path: '/student/create', component: CreateStud },
  { path: '/student/edit/:id(\\id+)', component: EditStud },

  { path: '/', component: Main, exact: true },
  { path: '*', component: RedirectPage }
];

export default routes;
