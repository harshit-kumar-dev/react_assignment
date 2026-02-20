import { useState } from "react";

function AddStudent() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", gender: ""
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const validate = () => {
    let newErrors = {};

    if (!form.name) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Invalid email";
    if (!/^\d{10}$/.test(form.phone))
      newErrors.phone = "Phone must be 10 digits";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const existing =
        JSON.parse(localStorage.getItem("students")) || [];

      const updated = [...existing, form];

      localStorage.setItem("students", JSON.stringify(updated));

      setSuccess("Student added successfully!");
      setForm({ name: "", email: "", phone: "", gender: "" });
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={form.name} onChange={(e) =>   setForm({ ...form, name: e.target.value })
          }
        />
        <p style={{ color: "red" }}>{errors.name}</p>

        <input placeholder="Email" value={form.email} onChange={(e) =>   setForm({ ...form, email: e.target.value }) } />
        <p style={{ color: "red" }}>{errors.email}</p>

        <input placeholder="Phone" value={form.phone} onChange={(e) =>   setForm({ ...form, phone: e.target.value }) } />
        <p style={{ color: "red" }}>{errors.phone}</p>

        <label>
          <input type="radio" value="Male" checked={form.gender === "Male"} onChange={(e) =>   setForm({ ...form, gender: e.target.value }) } />
          Male
        </label>

        <label>
          <input type="radio" value="Female" checked={form.gender === "Female"} onChange={(e) =>   setForm({ ...form, gender: e.target.value }) } />
          Female
        </label>

        <br />
        <button type="submit">Submit</button>
      </form>

      <p style={{ color: "green" }}>{success}</p>
    </div>
  );
}

export default AddStudent;