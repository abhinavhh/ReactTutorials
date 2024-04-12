import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextField from '../forms/TextField';
import ButtonSubmit from '../assets/ButtonSubmit';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function CategoryForm(props) {
  return (
    <Formik
      initialValues={props.model}
      onSubmit={props.onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required('Category Name should not be blank')
          .matches(/^[A-Z].*$/, 'Category Name should start with an uppercase letter'),
      })}
    >
      {(formikProps) => (
        <Form>
          <TextField field="name" displayName="Category Name" />
          <ButtonSubmit disabled={formikProps.isSubmitting} type="submit" className="btn btn-primary">
            Submit
          </ButtonSubmit>
          <Link className="btn btn-secondary" to="/categories">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

CategoryForm.propTypes = {
  model: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default CategoryForm;
