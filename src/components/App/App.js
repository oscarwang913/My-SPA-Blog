import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme";
import { ResetStyle, GlobalStyle } from "../../styles/globalStyle";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext, postContext } from "../../contexts";
import { getMe, getPosts } from "../../WebAPI";
import { getAuthToken } from "../../utils";

import Root from "./Root.style";
import Header from "../Header";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage";
import PostPage from "../../pages/PostPage";
import CreatePost from "../../pages/CreatePost";
import RegisterPage from "../../pages/RegisterPage";
import AboutPage from "../../pages/AboutPage";
import EditPage from "../../pages/EditPage";

export default function App() {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  // if login, it should keep the login state
  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      getMe().then((res) => {
        if (res.ok === 1) {
          setUser(res.data);
        }
      });
    }
  }, []);

  useEffect(() => {
    getPosts().then((data) => setPosts(data));
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <postContext.Provider value={{ posts }}>
        <ThemeProvider theme={theme}>
          <Root>
            <ResetStyle />
            <GlobalStyle />
            <Router>
              <Header />
              <Switch>
                {/* 加入 exact 表示URL一定要全部符合才會導過去 */}
                <Route exact path="/">
                  <HomePage />
                </Route>
                <Route exact path="/register">
                  <RegisterPage />
                </Route>
                <Route path="/about">
                  <AboutPage />
                </Route>
                <Route path="/login">
                  <LoginPage />
                </Route>
                {user && (
                  <Route path="/createPost">
                    <CreatePost />
                  </Route>
                )}
                <Route path="/posts/:id">
                  <PostPage />
                </Route>
                <Route path="/editPost/:id">
                  <EditPage />
                </Route>
              </Switch>
            </Router>
          </Root>
        </ThemeProvider>
      </postContext.Provider>
    </AuthContext.Provider>
  );
}
