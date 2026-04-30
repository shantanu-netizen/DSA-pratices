import React from "react";

export default function signup() {
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="Email"
          placeholder="Email"
          value={Email}
          onChange={handleChange}
          required
        />
        <div>
          <input
            type={showpassword ? "text" : "password"}
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
            required
          />
          <button>{showPassword ? "Hide" : "Show"}</button>
        </div>
        <input
          type="text"
          name="dob"
          placeholder="dob"
          value={dob}
          onSubmit={handleChange}
        />
        <select name="Gender" value={gender} onChange={handleChange}>
          <option value=''>Select Option</option>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
        </select>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={phone}
          onChange={handleChange}
          required
        />
        <button type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}
