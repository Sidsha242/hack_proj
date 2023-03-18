import React from "react";

const form = ({ persons, setPersons,setMessage,setError}) => {
    const [newName, setNewName] = useState("");
    const [newNumber, setNewNumber] = useState("");
    const [address, setAddress] = useState("");
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          name:{" "}
          <input
            value={newName}
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </div>
        <div>
          number:{" "}
          <input
            value={newNumber}
            onChange={(event) => {
              setNewNumber(event.target.value);
            }}
          />
        </div>
        <div>
            Address : {" "}
            <input value = {address}
                    onChange={(event) => {
                        setAddress(event.target.value)
                    }}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
  };
export default form;
