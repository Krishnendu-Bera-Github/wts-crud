import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import UserList from "./pages/UserList";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";
import Home from "./pages/Home";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/userlist" element={<UserList />} />
            <Route path="/create" element={<CreateProduct />} />
            <Route path="/edit/:id" element={<EditProduct />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
