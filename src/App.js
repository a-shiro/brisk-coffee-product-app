// Componenets
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./common/nav/Nav";
import RoutesManager from "./routes/RoutesManager";
import Footer from "./common/footer/Footer";
// CSS
import "./App.css";

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
