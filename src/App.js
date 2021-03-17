import { Route, Redirect } from "react-router-dom"
import { userStorageKey } from "./components/auth/authSettings"
import { NavBar } from "./components/nav/NavBar";
import { ApplicationViews } from "./components/ApplicationViews";
import { Identify } from "./components/plants/Identify";

export const App = () => (
  <>
    <Route render={() => {
      if (sessionStorage.getItem(userStorageKey)) {
        return (
          <>
            <NavBar />
            <ApplicationViews />
            <Identify />
          </>
        )
      } else {
        return <Redirect to="/login" />;
      }
    }} />

    
  </>
)