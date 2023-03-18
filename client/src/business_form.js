import React from "react";
import businesses from './business_db.json'
const business_form = () => {
    const [newName, setNewName] = useState("");
    const [description, setDescription] = useState("");
    const [price,setPrice] = useState(0);
    return (
      <form
        onSubmit={(event) => {
          event.preventDefault();
          let randId = math.floor(math.random()  * 10000)
          const newBusiness = {
            id: randid,
            name: newName,
            description: description,
            price: price,
          }
          let jsonString = json.stringify(newBusiness)
          businesses.append(jsonString)

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
