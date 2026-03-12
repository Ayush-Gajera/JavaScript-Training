import { useAuth } from "../Assignment2/AuthContext";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { login, user, isAuthenticated, isLoading } = useAuth();
      if (isAuthenticated) {
        return <Navigate to="/dashboard" replace />;
      }

  return (
    <div>
      <h2>Login Test</h2>

      <button onClick={() => login("user")}>Login </button>

      {/* <button onClick={() => login("admin")}>Login as Admin</button> */}

      {isLoading && <p>Loading...</p>}

      {isAuthenticated && (
        <div>
          <p>Name: {user?.name}</p>
          <p>Role: {user?.role}</p>
        </div>
      )}
    </div>
  );
};

export default Login;
