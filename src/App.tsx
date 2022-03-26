import ProjectListScreen from "screens/project-list";
import "./App.css";
import { Test } from "test";
import { useAuth } from "context/auth_context";
import { AuthenticatedApp } from "./authenticated-app";
import { UnauthenticatedApp } from "./../src/unauthenticated-app";
import { ErrorBoundary } from "components/error-boundary";
import { FullPageErrorFallBack } from "components/lib";

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      <ErrorBoundary fallbackRender={FullPageErrorFallBack}>
        {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </ErrorBoundary>
    </div>
  );
}

export default App;
