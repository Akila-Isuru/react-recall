import React, { useState } from "react";
import { Form } from "react-router-dom";

type FormData = {
  name: string;
  email: string;
};

function UserForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
  });

  const handleChanage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div className="p-5 flex flex-col w-150">
      <input
        className="border border-gray-300 rounded-lg mr-2"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChanage}
        placeholder="UserName"
      />
      <input
        className="border border-gray-300 rounded-lg mr-2"
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChanage}
        placeholder="Email"
      />

      <h4>Live Data:</h4>
      <p>Username : {formData.name}</p>
      <p>Email : {formData.email}</p>
    </div>
  );
}

export default UserForm;
