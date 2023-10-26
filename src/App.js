// Componenets
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/common/nav/Nav";
import RoutesManager from "./routes/RoutesManager";
import Footer from "./components/common/footer/Footer";

function App() {
  return (
    <Router>
      <header>
        <Nav />
      </header>

      <main>
        <RoutesManager />
      </main>

      <Footer />
    </Router>
  );
}

export default App;
