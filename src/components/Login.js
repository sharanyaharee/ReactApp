import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter a valid email address :username@example.com")
    .required("Required Field"),
  password: Yup.string()
    .matches(
      /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Password must be at least 8 characters long and include at least one digit and one special character (e.g., @, $, !, %, *, ?, &)."
    )
    .required("Required Field"),
});

const credentials = {
  email: "shara@gmail.com",
  password: "shara@12345",
};
const Login = () => {
  let navigate = useNavigate();

  const onSubmit = (values) => {
    if (
      values.email === credentials.email &&
      values.password === credentials.password
    ) {
      toast.success("Login Successfull 😍");

      setTimeout(() => {
        navigate(-1);
      }, 2000);
    } else toast.error("Invalid Credentials!");
  };

  return (
    <div className="mx-auto my-40 border rounded bg-slate-50  w-80 p-5 shadow-md hover:scale-105 scroll-smooth">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="flex flex-col">
          <h1 className="text-center font-bold">Login</h1>
          <div className="flex flex-col">
          <label className="m-2" htmlFor="email">Email</label>
          <Field className="border mb-5 rounded p-2" type="email" name="email" id="email" />
          <ErrorMessage name="email" component="div" className="error" />

          </div>

          
          <div className="flex flex-col">
          <label className="m-2" htmlFor="password">Password</label>
          <Field className="border mb-5 rounded p-2" type="password" name="password" id="password" />
          <ErrorMessage name="password" component="div" className="error" />
          </div>
          <button className="rounded bg-orange-600 p-2 text-white" type="submit">Submit</button>
     
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};

export default Login;
