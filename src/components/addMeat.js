import { useState } from "react";
import { NavigationType, useNavigate } from "react-router-dom";

const AddMeat = ({ meat, admin }) => {
  const [species, setSpecies] = useState("");
  const [style, setStyle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [flavor, setFlavor] = useState("");
  const [price, setPrice] = useState("");
  const [newMeat, setNewMeat] = useState({});

  const navigation = useNavigate();

  const handleMeat = async () => {
    try {
      const resp = await fetch(`http://localhost:3001/api/meats/addMeat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          species: species,
          style: style,
          description: description,
          flavor: flavor,
          image: image,
          price: price,
        }),
      });
      const info = await resp.json();
      console.log(info);
      setNewMeat(info);
      navigation("/meat");
    } catch (error) {
      throw error;
    }
  };
  {
    if (admin) {
      return (
        <>
          <h1>Create Meat</h1>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleMeat();
            }}
          >
            <input
              required
              placeholder="Enter Species..."
              value={species}
              onChange={(e) => {
                setSpecies(e.target.value);
              }}
            />
            <input
              placeholder="Enter Style..."
              value={style}
              onChange={(e) => setStyle(e.target.value)}
            />
            <input
              placeholder="Enter Description..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              placeholder="Enter Flavor..."
              value={flavor}
              onChange={(e) => setFlavor(e.target.value)}
            />
            <input
              placeholder="Enter image..."
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <input
              required
              placeholder="Enter Price..."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
        </>
      );
    }
  }
};
export default AddMeat;
