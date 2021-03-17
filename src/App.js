import { Route, Redirect } from "react-router-dom"
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { userStorageKey } from "./components/auth/authSettings"
import { ButtonAppBar } from "./components/ApplicationViews";

export const App = () => (
  <>
    <Route render={() => {
      if (sessionStorage.getItem(userStorageKey)) {
        return (
          <>
            <ButtonAppBar />
            <ApplicationViews />
          </>
        )
      } else {
        return <Redirect to="/login" />;
      }
    }} />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
)