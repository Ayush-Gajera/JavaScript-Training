import { useAuth } from "./AuthContext";

const Login = () => {
  const { login, user, isAuthenticated, isLoading } = useAuth();

  return (
    <div>
      <h2>Auth Test</h2>

      <button onClick={() => login("user")}>Login as User</button>

      <button onClick={() => login("admin")}>Login as Admin</button>

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
