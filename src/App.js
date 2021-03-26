import { Route, Redirect } from "react-router-dom"
import { userStorageKey } from "./components/auth/authSettings"
import { ApplicationViews } from "./components/ApplicationViews";
import { Login } from "./components/auth/Login"
import { Register } from "./components/auth/Register"
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


export const App = () => (
  <>
    <Route render={() => {
      if (sessionStorage.getItem(userStorageKey)) {
        return (
          <>
            <ApplicationViews />
            <Footer />
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