import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [gender, setGender] = useState("");
  const [hobbies, setHobbies] = useState([]);
  const [dob, setDob] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleHobbyChange = (e) => {
    const value = e.target.value;
    if (hobbies.includes(value)) {
      setHobbies(hobbies.filter((hobby) => hobby !== value));
    } else {
      setHobbies([...hobbies, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !country || !gender || !dob) {
      alert("Please fill all mandatory fields!");
      return;
    }

    setSubmittedData({ name, country, gender, hobbies, dob });
  };

  return (
    <div className="container">
      <h2>Form with Multiple Input Types</h2>

      <form onSubmit={handleSubmit} className="form-box">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <label>Country:</label>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
        </select>

        <label>Gender:</label>
        <div className="inline-options">
          <input type="radio" name="gender" value="Female" onChange={(e) => setGender(e.target.value)} /> Female
          <input type="radio" name="gender" value="Male" onChange={(e) => setGender(e.target.value)} /> Male
          <input type="radio" name="gender" value="Other" onChange={(e) => setGender(e.target.value)} /> Other
        </div>

        <label>Hobbies:</label>
        <div className="inline-options">
          <input type="checkbox" value="Reading" onChange={handleHobbyChange} /> Reading
          <input type="checkbox" value="Music" onChange={handleHobbyChange} /> Music
          <input type="checkbox" value="Sports" onChange={handleHobbyChange} /> Sports
        </div>

        <label>Date of Birth:</label>
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />

        <button type="submit" className="btn">Submit</button>
      </form>

      {submittedData && (
        <div className="result-box">
          <h3>Submitted Data</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Country:</strong> {submittedData.country}</p>
          <p><strong>Gender:</strong> {submittedData.gender}</p>
          <p><strong>Hobbies:</strong> {submittedData.hobbies.join(", ") || "None"}</p>
          <p><strong>Date of Birth:</strong> {submittedData.dob}</p>
        </div>
      )}
    </div>
  );
}

export default App;
