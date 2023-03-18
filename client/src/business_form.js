import React from "react";

const business_form = ({ persons, setPersons,setMessage,setError}) => {
    const [newName, setNewName] = useState("");
    const [description, setDescription] = useState("");
    const [price,setPrice] = useState(0);
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <div>
          Business name:{" "}
          <input
            value={newName}
            onChange={(event) => {
              setNewName(event.target.value);
            }}
          />
        </div>
        <div>
          Description: {" "}
          <input
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
        </div>
        <div>
            Price  : {" "}
            <input value = {price}
                    onChange={(event) => {
                        setPrice(event.target.value)
                    }}
                />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    );
  };
export default business_form;
