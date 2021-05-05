import { useState, useRef } from "react";
import axios from "axios";

function FormPage() {
  const [email, setEmail] = useState("insert email here");
  const [password, setPassword] = useState("insert password");
  const [selectedFile, setSelectedFile] = useState(null);
  const [isFilePicked, setIsFilePicked] = useState(false);
  function handleFileChange(e) {
    setSelectedFile(e.target.files[0]);
    setIsFilePicked(true);
  }
  function handleFormSubmit(e) {
    e.preventDefault();
    console.log("Submission!");
    let newFormData = new FormData(e.target);
    const token = localStorage.getItem("token");
    console.log(newFormData.getAll("file"));
    console.log(newFormData.getAll("email"));
    console.log(newFormData.getAll("password"));
    axios.post(`${process.env.REACT_APP_API_SERVER}/api/form`, newFormData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "content-type": "multipart/form-data",
      },
    });

    setEmail("insert email here");
    setPassword("insert password here");
    setSelectedFile(null);
    setIsFilePicked(false);
  }
  return (
    <>
      <h3>Form page test</h3>
      <form onSubmit={handleFormSubmit}>
        <label>Email: </label>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <br />
        <label>Password: </label>
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
        />
        <br />
        <label>File: </label>
        <br />
        <input type="file" onChange={handleFileChange} name="file" />
        <br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}

export default FormPage;
