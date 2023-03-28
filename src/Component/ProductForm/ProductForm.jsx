import React, { useState } from "react";
import "./ProductForm.scss";

const ProductForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await DataStore.save(
      new PetCollection({
        title: title,
        desc: desc,
        price: price,
      })
    );
    setTitle("");
    setDesc("");
    setPrice(0);
  };
  return (
    <div className="product-form">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={desc}
              onChange={(event) => setDesc(event.target.value)}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              value={price}
              onChange={(event) => setPrice(parseFloat(event.target.value))}
            />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
