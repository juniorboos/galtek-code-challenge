import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import { AppContainer } from "./styles/pages/App";

import { ApolloProvider } from "react-apollo";
import apolloClient from "./services/graphql/apollo";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Switch from "react-switch";
import { shade } from "polished";

function App() {
  const [theme, setTheme] = useState(light);
  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <AppContainer>
          <div className="switch">
            <Switch
              onChange={toggleTheme}
              checked={theme.title === "dark"}
              checkedIcon={false}
              uncheckedIcon={false}
              height={10}
              width={40}
              handleDiameter={20}
              offColor={shade(0.6, theme.colors.primary)}
              onColor={theme.colors.secundary}
            />
          </div>
          <Home />
        </AppContainer>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
