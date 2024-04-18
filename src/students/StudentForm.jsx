import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import ButtonSubmit from "../assets/ButtonSubmit";
import TextField from "../forms/TextField";
import ImageField from "../forms/ImageField";
import DateField from "../forms/DateField";
import CheckboxField from "../forms/CheckboxField";
import { Link } from "react-router-dom";
import MultipleSelector from "../forms/MultipleSelector";

export default function StudentForm(props) {
  const [selectedCourses, setSelectedCourses] = useState(
    mapToModel(props.selectedCourses)
  );

  const [unSelectedCourses, setUnSelectedCourses] = useState(
    mapToModel(props.unSelectedCourses)
  );

  const [selectedCategories, setSelectedCategories] = useState(
    mapToModel(props.selectedCategories)
  );

  const [unSelectedCategories, setUnSelectedCategories] = useState(
    mapToModel(props.unSelectedCategories)
  );

  function mapToModel(items) {
    return items.map((item) => {
      return { key: item.id, value: item.name };
    });
  }

  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Category Name should not be blank")
          .matches(/^[A-Z].*$/, "Category Name should start with an uppercase letter"),
        rollno: Yup.string().required("Roll Number should not be blank"),
        dateOfBirth: Yup.date().nullable().required("Date should not be blank"),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField field="name" displayName="Student Name" />
          <TextField field="rollno" displayName="Roll Number" />
          <DateField field="dateOfBirth" displayName="Date of Birth" />
          <CheckboxField field="isActive" displayName="Active" />
          <ImageField
            displayName="Photograph"
            field="image"
            imageURL={props.model.photoURL}
          />
          <MultipleSelector
            displayName="Categories"
            unSelected={unSelectedCategories}
            selected={selectedCategories}
            onChange={(selected, unSelected) => {
              setSelectedCategories(selected);
              setUnSelectedCategories(unSelected);
            }}
          />
          <MultipleSelector
            displayName="Courses"
            unSelected={unSelectedCourses}
            selected={selectedCourses}
            onChange={(selected, unSelected) => {
              setSelectedCourses(selected);
              setUnSelectedCourses(unSelected);
            }}
          />
          <ButtonSubmit
            disabled={formikProps.isSubmitting}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </ButtonSubmit>
          <Link className="btn btn-secondary ms-3" to="/student/SearchStudent">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

