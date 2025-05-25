import React, { useState } from "react";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    designation: "",
    address: "",
  });

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("User created successfully");
        setFormData({
          name: "",
          email: "",
          password: "",
          age: "",
          designation: "",
          address: "",
        });
      } else {
        alert("Failed to create user");
      }
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>Create User Profile</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "30px" }}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        <input
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
        />
        <input
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default AddUser;
