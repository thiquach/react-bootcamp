import React, { useState } from "react";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  function handleFname(event) {
    const newFname = event.target.value;

    setFname(newFname);
  }

  function handleLname(event) {
    const newLname = event.target.value;

    setLname(newLname);
  }

  return (
    <div className="container">
      <h1>
        Hello {fname} {lname}
      </h1>
      <form>
        <input
          onChange={handleFname}
          name="fName"
          placeholder="First Name"
          value={fname}
        />
        <input
          onChange={handleLname}
          name="lName"
          placeholder="Last Name"
          value={lname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
