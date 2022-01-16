import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TaskPage from "./pages/tasks";
import LoginPage from "./pages/login";
import HelpPage from "./pages/help";
import './app.scss'

const Router = () => {

  return (

    <BrowserRouter>
      <div>
      <header className="global-head">
        <ul>
          <li><Link to="/">ホーム</Link></li>
          <li><Link to="/help">ヘルプ</Link></li>
          <li><Link to="/login">ログイン</Link></li>
          <li><span>ログアウト</span></li>
        </ul>
      </header>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/help">
            <HelpPage />
          </Route>
          <Route path="/">
            <TaskPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>


  );
}


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default Router
