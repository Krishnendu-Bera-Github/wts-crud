import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, getProductList } from "../utils/api";
import { queryClient } from "../main";
import { toast } from "react-toastify";

const UserList = () => {
  // const queryClient = new QueryClient();

  const accessToken = JSON.parse(localStorage.getItem("loginToken"));

  const { isPending, isLoading, isError, isSuccess, data } = useQuery({
    queryKey: ["productList"],
    queryFn: getProductList,
    staleTime: 1000 * 60,
    enabled: !!accessToken,
  });

  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["productList"] });
      toast.error("Product deleted successfully");
    },
  });

  if (isPending) {
    return <p>Loading...</p>;
  }

  const handleDelete = (id) => {
    deleteMutation.mutate({ id });
  };

  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-md shadow">
        <h1 className="text-2xl font-bold mb-2">User List</h1>
        <Link to="/create">
          <button className="bg-green-500 text-white px-4 py-2 mt-2 mb-2 rounded-md">
            Create
          </button>
        </Link>

        <table className="min-w-full bg-white border border-gray-300 text-center">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          {data &&
            data?.map((product) => (
              <tbody key={product._id}>
                <tr>
                  <td className="py-2 px-4 border-b">{product.title}</td>
                  <td className="py-2 px-4 border-b">{product.description}</td>
                  <td className="py-2 px-4 border-b">
                    <div className="flex items-center justify-center">
                      <img
                        src={product.image || "https://placekitten.com/50/50"}
                        alt="User"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <Link to={`/edit/${product._id}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(product._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
};

export default UserList;
