// Libraries
import { Formik, Field, Form, ErrorMessage } from "formik";

// Util
import { EmailSchema } from "../util/validationSchema";

// Styles
import "../scss/newsLetterForm.scss"

import React from "react";

const NewsletterForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={EmailSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="form">
            <div className="form__input">
              <Field name="email" type="email" className="field" placeholder="Updates in your inbox ..."/>
              <ErrorMessage name="email" className="error" component="span"/>
            </div>
            <button type="submit" className="form__button">GO</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default NewsletterForm;
