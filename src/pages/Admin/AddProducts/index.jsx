import React, { useState } from "react";
import { addProducts } from "../../../service/addProductsService";

function CreateProduct() {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: null,
    stock: "",
    rating: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setProduct({
      ...product,
      image: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in product) {
      formData.append(key, product[key]);
    }

    try {
      const res = await addProducts(formData);
      setMessage("Product created successfully!");
    } catch (error) {
      console.error("Error creating product:", error);
      setMessage("Failed to create product.");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Image:
        <input
          type="file"
          name="image"
          onChange={handleImageChange}
        />
      </label>
      <label>
        Stock:
        <input
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          name="rating"
          value={product.rating}
          onChange={handleChange}
          required
        />
      </label>
      <button type="submit">Create Product</button>
      {message && <p>{message}</p>}
    </form>
  );
}

export default CreateProduct;
