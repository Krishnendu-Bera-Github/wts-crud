import React from "react";
import Form from "../components/Form";
import { createProduct } from "../utils/api";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { queryClient } from "../main";
import { toast } from "react-toastify";

const CreateProduct = () => {
  const navigate = useNavigate();

  const { mutate, isPending, isError, isSuccess, data } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      navigate("/userlist");
      queryClient.invalidateQueries({ queryKey: ["productList"] });
      toast.success("Product created successfully");
    },
  });

  const handleCreateProduct = (userInfo) => {
    mutate(userInfo);
  };

  return (
    <div>
      <Form handleCreateProduct={handleCreateProduct} />
    </div>
  );
};

export default CreateProduct;
