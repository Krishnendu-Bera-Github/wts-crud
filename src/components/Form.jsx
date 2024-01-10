import React, { useEffect, useState } from "react";

const Form = ({
  handleCreateProduct,
  handleUpdateProduct,
  singleProductDetails,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    description: "",
  });

  

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, image: reader.result });
        };
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (singleProductDetails) {
      
      handleUpdateProduct(formData);
    } else {
      handleCreateProduct(formData);
    }

   
  };

 

  useEffect(() => {
    if (singleProductDetails) {
      const { title, image, description, _id: id } = singleProductDetails;
      setFormData({
        ...formData,
        title,
        image,
        description,
        id,
      });
    }
  }, [singleProductDetails]);

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow">
        <h1 className="text-2xl font-bold mb-4">User Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-600"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-600"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600"
            >
              Image URL
            </label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            {singleProductDetails ? "Update" : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
