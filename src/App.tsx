import "./styles/style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Service from "./components/Service";

const App: React.FC = () => {
  return (
    <div>
      <Header></Header>
      <Hero></Hero>
      <Service></Service>
    </div>
  );
};

export default App;
