/*
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";


function App() {
  return (
    <div>
      <h1>User Form</h1>

      <input
        type="text"
        placeholder="Name"
      />

      <br />

      <input
        type="email"
        placeholder="Email"
      />

      <br />

      <input
        type="number"
        placeholder="Age"
      />

      <br />

      <button>
        Submit
      </button>
    </div>
  )
}

export default App;

import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  age: Yup.number()
    .required("Age is required")
});

function App() {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        age: "",
      }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        try {
          const response = await axios.post(
          "http://127.0.0.1:8000/users",
          values
        );

          console.log(response.data);
        } catch (error) {
           console.log(error);
          }
        }}
        >
      <Form>
        <h2> User Form</h2>
        <Field
          name="name"
          placeholder="Enter Name"
        />
        <ErrorMessage
          name="name"
          component="div"
          />


        <br /><br />
        <Field
          name="email"
          placeholder="Email"
        />
        <ErrorMessage
          name="email"
          component="div"
        />

        <br /><br />

        <Field
          name="age"
          placeholder="Age"
        />
        <ErrorMessage 
          name="age"
          component="div"
          />

        <br /><br />

        <button type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
}

export default App;



import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  age: Yup.number()
    .required("Age is required")
});

function App() {
  const deleteUser = async (id) => {
  try {
    await axios.delete(
      `http://127.0.0.1:8000/users/${id}`
    );

    fetchUsers();
  } catch (error) {
    console.log(error);
  }
};
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);
  
  return (

    <div className="min-h-screen bg-gray-100 p-8">
      < div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
      <Formik
        initialValues={{
          name: "",
          email: "",
          age: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            const response = await axios.post(
              "http://127.0.0.1:8000/users",
              values
            );

            console.log(response.data);

            fetchUsers();

            resetForm();
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <Form>
          <h2 className="text-4xl font-bold text-center">
            User Form
          </h2>

          <Field
            name="name"
            placeholder="Enter Name"
            className="w-full border p-2 rounded"
          />
          <ErrorMessage
            name="name"
            component="div"
            className="text-red-500 text-sm"
          />

          <br />
          <br />

          <Field
            name="email"
            placeholder="Enter Email"
            className="w-full border p-2 rounded"
          />
          <ErrorMessage
            name="email"
            component="div"
            className="text-red-500 text-sm"
          />

          <br />
          <br />

          <Field
            name="age"
            placeholder="Enter Age"
            className="w-full border p-2 rounded"
          />
          <ErrorMessage
            name="age"
            component="div"
            className="text-red-500 text-sm"
          />

          <br />
          <br />

          <button type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </Form>
      </Formik>

      
      <hr />

      <h2>Saved Users</h2>
     

      {users.map((user) => (
    <div key={user.id}>
    <p>Name: {user.name}</p>
    <p>Email: {user.email}</p>
    <p>Age: {user.age}</p>
    
   

    <button
      onClick={() => deleteUser(user.id)}
    >
      Delete
    </button>

    <hr />
  </div>
))}
    </div>

  </div>
  );
}

export default App;

*/

import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  age: Yup.number()
    .required("Age is required"),
});

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/users"
      );

      setUsers(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/users/${id}`
      );

      fetchUsers();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">

      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">

        <Formik
          initialValues={{
            name: "",
            email: "",
            age: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, { resetForm }) => {
            try {
              const response = await axios.post(
                "http://127.0.0.1:8000/users",
                values
              );

              console.log(response.data);

              fetchUsers();

              resetForm();
            } catch (error) {
              console.log(error);
            }
          }}
        >
          <Form>

            <h2 className="text-3xl font-bold text-center mb-6">
              User Form
            </h2>

            <Field
              name="name"
              placeholder="Enter Name"
              className="w-full border p-2 rounded"
            />

            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500 text-sm"
            />
            <br />
            <br />

            <Field
              name="email"
              placeholder="Enter Email"
              className="w-full border p-2 rounded"
            />

            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />

            <br />
            <br />

            <Field
              name="age"
              placeholder="Enter Age"
              className="w-full border p-2 rounded"
            />

            <ErrorMessage
              name="age"
              component="div"
              className="text-red-500 text-sm"
            />

            <br />
            <br />

            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >
              Submit
            </button>

          </Form>
        </Formik>

      </div>

      <div className="max-w-md mx-auto mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Saved Users
        </h2>

        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 rounded shadow mb-4"
          >
            <p>
              <strong>Name:</strong> {user.name}
            </p>

            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <p>
              <strong>Age:</strong> {user.age}
            </p>

            <button
              onClick={() => deleteUser(user.id)}
              className="mt-3 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        ))}

      </div>

    </div>
  );
}

export default App;