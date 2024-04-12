import IndexCourse from "./courses/IndexCourses";
import CreateCourse from "./courses/CreateCourses";
import EditCourse from "./courses/EditCourses";

import IndexCateg from "./categories/IndexCategory";
import CreateCateg from "./categories/CreateCategory";
import EditCateg from "./categories/EditCategory";

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

  { path: '/categories', component: IndexCateg, exact: true },
  { path: '/categories/create', component: CreateCateg },
  { path: '/categories/edit/:id(\\id+)', component: EditCateg },

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
