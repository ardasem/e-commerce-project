import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [roles, setRoles] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://workintech-fe-ecommerce.onrender.com/roles"
        );
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      className="flex flex-col gap-[30px] px-[195px] py-[40px]"
      action="submit"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input defaultValue="test" {...register("example")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />

      <label className="flex flex-row  gap-[20px] items-center" htmlFor="">
        First Name
        <input className="border-2 flex-1" type="text" name="firstName" {...register("firstName", { required: true, minLength: 3 })} />
      </label>
      {errors.firstName && <span>The name cannot be shorter than 3 letters.</span>}

      <label className="flex flex-row  gap-[20px] items-center" htmlFor="">
        Last Name
        <input className="border-2 flex-1" type="text" name="lastName" {...register("lastName", { required: true, minLength: 3 })} />
      </label>
      {errors.firstName && <span>The lastname cannot be shorter than 3 letters.</span>}

      <label className="flex flex-row gap-[20px] items-center" htmlFor="">
        Email
        <input className="border-2" type="e-mail" name="email" {...register("email", { pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i })} />
      </label>
      {errors.firstName && <span>The email is not valid.</span>}
      <label className="flex flex-row gap-[20px] items-center" htmlFor="">
        Password
        <input className="border-2" type="text" name="" id="" />
      </label>
      <label className="flex flex-row gap-[20px] items-center" htmlFor="">
        Password again
        <input className="border-2" type="text" name="" id="" />
      </label>
      <label className="flex flex-row gap-[20px] items-center" htmlFor="">
        Role
        <select id="yourSelect" value={selectedValue}>
          {roles.map((item) => (
            <option key={item.id} code={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}

export default SignUp;
