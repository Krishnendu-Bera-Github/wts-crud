import React from "react";
import Form from "../components/Form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getSingleProduct, updateProduct } from "../utils/api";
import { useNavigate, useParams } from "react-router-dom";
import { queryClient } from "../main";
import { toast } from "react-toastify";

const EditProduct = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const singleProductQuery = useQuery({
    queryKey: ["singleProduct", id],
    queryFn: () => getSingleProduct(id),
    enabled: !!id,
  });

  const updateMutation = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      navigate("/userlist");
      queryClient.invalidateQueries({ queryKey: ["productList"] });
      toast.success("Product updated successfully");
    },
  });

  if (singleProductQuery.isPending) {
    return <p>Loading...</p>;
  }

  if (updateMutation.isPending) {
    return <p>Loading...</p>;
  }

 

  const handleUpdateProduct = (userInfo) => {
    updateMutation.mutate(userInfo);
  };

  return (
    <div>
      <Form
        handleUpdateProduct={handleUpdateProduct}
        singleProductDetails={singleProductQuery?.data}
      />
    </div>
  );
};

export default EditProduct;
