import { useState } from "react";

function App() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  // ----------------- VALIDATION FUNCTION -----------------
  const validate = () => {
    let newErrors = {};

    // Full Name validation
    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // Password validation
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Confirm Password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm your password";
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ----------------- HANDLE SUBMIT -----------------
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div style={{ width: "350px", margin: "auto", marginTop: "40px" }}>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/* FULL NAME */}
        <div style={{ marginBottom: "10px" }}>
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
              validate();
            }}
            style={{ display: "block", width: "100%", padding: "6px" }}
          />
          {errors.fullName && (
            <p style={{ color: "red" }}>{errors.fullName}</p>
          )}
        </div>

        {/* EMAIL */}
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validate();
            }}
            style={{ display: "block", width: "100%", padding: "6px" }}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>

        {/* PASSWORD */}
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validate();
            }}
            style={{ display: "block", width: "100%", padding: "6px" }}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>

        {/* CONFIRM PASSWORD */}
        <div style={{ marginBottom: "10px" }}>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              validate();
            }}
            style={{ display: "block", width: "100%", padding: "6px" }}
          />
          {errors.confirmPassword && (
            <p style={{ color: "red" }}>{errors.confirmPassword}</p>
          )}
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          style={{
            padding: "8px 16px",
            cursor: "pointer",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
