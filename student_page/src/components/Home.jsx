import { useEffect, useState } from "react";

function Home() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(data);
  }, []);

  return (
    <div className="container" style={{ padding: "20px" }}>
      <h1>Student Portal</h1>

      {students.length === 0 ? (
        <p>No students added yet.</p>) : ( <p>Total Students: {students.length}</p>
      )}
    </div>
  );
}

export default Home;