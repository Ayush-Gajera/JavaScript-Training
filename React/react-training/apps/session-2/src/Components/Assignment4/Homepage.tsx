import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Home Page</h1>

      <nav>
        <Link to="/dashboard">Dashboard</Link> | <Link to="/login">Login</Link>{" "}
        | <Link to="/about">About</Link>
      </nav>
    </div>
  );
}
