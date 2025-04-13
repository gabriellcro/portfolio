import { ThemeProvider } from "./components/theme-provider";
import Layout from "./layout/layout";

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
