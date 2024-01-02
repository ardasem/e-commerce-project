import React, { useEffect, useState } from "react";
import axios from "axios";

function SignUp() {
  const [roles, setRoles] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://workintech-fe-ecommerce.onrender.com/roles');
        setRoles(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <form
      className="flex flex-col gap-[30px] px-[195px] py-[40px]"
      action="submit"
    >
      <label className="flex flex-row gap-[20px] items-center" htmlFor="">
        Name
        <input className="border-2" type="text" name="" id="" />
      </label>
      <label className="flex flex-row gap-[20px] items-center" htmlFor="">
        Email
        <input className="border-2" type="text" name="" id="" />
      </label>
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
        <select id="yourSelect" value={selectedValue} onChange={handleSelectChange}>
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
