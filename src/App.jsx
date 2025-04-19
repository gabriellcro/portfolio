import { ThemeProvider } from "./components/theme-provider";
import AppRouter from "./router/app-router";

function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
