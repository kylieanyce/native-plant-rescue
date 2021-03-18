import { Route, Redirect } from "react-router-dom"
import { userStorageKey } from "./components/auth/authSettings"
import { NavBar } from "./components/nav/NavBar";
import { ApplicationViews } from "./components/ApplicationViews";
import { IdentifyProvider } from "./components/plants/IdentifyProvider";
import { IdentifyCard } from "./components/plants/IdentifyPlant";

export const App = () => (
  <>
    <Route render={() => {
      if (sessionStorage.getItem(userStorageKey)) {
        return (
          <>
            <NavBar />
            <ApplicationViews />
            {/* <IdentifyProvider />
            <IdentifyCard /> */}
          </>
        )
      } else {
        return <Redirect to="/login" />;
      }
    }} />

    
  </>
)