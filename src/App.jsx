import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import {z} from "zod"
import * as yup from "yup";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// const schema = yup.object({
//   name: yup.string().required("name is required"),
//   age: yup.string().required("age is required"),
//   country: yup.string().required("country is required"),
//   email: yup
//     .string()
//     .email("please enter valid email format")
//     .required("email field is required"),
// });

const schema = z.object({
  name: z.string().min(5, { message: "name field is required" }),
  age: z.string().min(18, { message: "age field is required" }),
  country: z.string().min(5, { message: "country field is required" }),
  email: z
    .string()
    .min(5, { message: "email field is required" })
    .email("please enter valid email"),
});

const App = () => {
  const form = useForm({
    defaultValues: {
      name: "",
      age: "",
      country: "",
      email: "",
    },
    resolver: zodResolver(schema),
  });
  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting } = formState;

  const onSubmit = (data) => {
    console.log("data1212", data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="container">
        <div className="fields">
          <label htmlFor="name">name</label>
          <input type="text" id="name" {...register("name")} />
          <p className="error">{errors.name?.message}</p>
        </div>
        <div className="fields">
          <label htmlFor="age">age</label>
          <input type="text" id="age" {...register("age")} />
          <p className="error">{errors.age?.message}</p>
        </div>
        <div className="fields">
          <label htmlFor="country">country</label>
          <input type="text" id="country" {...register("country")} />
          <p className="error">{errors.country?.message}</p>
        </div>

        <div className="fields">
          <label htmlFor="email">Enter your email</label>
          <input type="text" id="email" {...register("email")} />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="btn-container">
          <button type="submit" disabled={isSubmitting} className="btn">
            add user
          </button>
        </div>
      </div>
    </form>
  );
};

export default App;
