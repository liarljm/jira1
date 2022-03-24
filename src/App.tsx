import ProjectListScreen from "screens/project-list";
import "./App.css";
import { Test } from "test";
import { useAuth } from "context/auth_context";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./../src/unauthenticated-app";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </div>
  );
}

export default App;
