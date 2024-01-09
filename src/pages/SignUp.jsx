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

  return (
    <form
      className="flex flex-col gap-[30px] px-[195px] py-[40px]"
      action="submit"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-row justify-around items-center">
        <label className="flex flex-row  gap-[20px] items-center" htmlFor="">
          First Name
        </label>
        <input
          className="border-2 flex-1/2"
          type="text"
          name="firstName"
          {...register("firstName", { required: true, minLength: 3 })}
        />
        {errors.firstName && (
          <span>The name cannot be shorter than 3 letters.</span>
        )}
      </div>

      <div className="flex flex-row justify-around items-center">
        <label className="flex flex-row  gap-[20px] items-center" htmlFor="">
          Last Name
        </label>
        <input
          className="border-2 flex-1"
          type="text"
          name="lastName"
          {...register("lastName", { required: true, minLength: 3 })}
        />
        {errors.firstName && (
          <span>The lastname cannot be shorter than 3 letters.</span>
        )}
      </div>

      <div className="flex flex-row justify-around items-center">
        <label className="flex flex-row gap-[20px] items-center" htmlFor="">
          Email
        </label>
        <input
          className="border-2"
          type="e-mail"
          name="email"
          {...register("email", {required:true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
          })}
        />
        {errors.email && <span>The email is not valid.</span>}
      </div>

      <div className="flex flex-row justify-around items-center">
        <label className="flex flex-row gap-[20px] items-center" htmlFor="">
          Password
        </label>
        <input className="border-2" type="text" name="" id=""  {...register("password", {required:true,
          })} />
           {errors.password && <span>Password is required.</span>}
      </div>

      <div className="flex flex-col justify-around items-center">
        <label className="flex flex-row gap-[20px] items-center" htmlFor="">
          Password again
        </label>
        <input className="border-2" type="text" name="" id="" {...register("confirm_password", {
  required: true,
  validate: (val) => {
    if (watch('password') != val) {
      return "Your passwords do no match";
    }
  },
 })}/>
  {errors.confirm_password && <span>The passwords doesn't match</span>}
      </div>

      <div className="flex flex-row justify-around items-center">
        <label className="flex flex-row gap-[20px] items-center" htmlFor="">
          Role
        </label>
        <select id="yourSelect" value={selectedValue}>
          {roles.map((item) => (
            <option key={item.id} code={item.id}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <input type="submit" />
    </form>
  );
}

export default SignUp;
