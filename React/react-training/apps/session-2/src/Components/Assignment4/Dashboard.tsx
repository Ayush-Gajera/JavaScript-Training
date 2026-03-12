import { useAuth } from "../Assignment2/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome {user?.name}</p>
      <p>Role: {user?.role}</p>
    </div>
  );
}
