import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const params = useParams();
  const accsessToken = localStorage.getItem("loginToken");

  useEffect(() => {
    if (!accsessToken) {
      return navigate("/");
    }

    navigate("/userlist");
  }, [accsessToken]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedRoute;
