import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./styles/theme";
import routes, { renderRoutes } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>{renderRoutes(routes)}</Router>
    </ThemeProvider>
  );
}

export default App;
