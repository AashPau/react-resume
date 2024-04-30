import "./App.css";
import { Header } from "./components/Header";
import { ContactForm } from "./components/ContactForm";

function App() {
  return (
    <div className="wrapper">
      {/* Header */}
      <Header />
      {/* body */}

      {/* form */}
      <ContactForm />

      {/* footer */}
    </div>
  );
}

export default App;
