import Header from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

import TemplateNavbar from "./Template/templateNavbar"
import TemplateHeader from "./Template/templateHeader"
import TemplateContent from "./Template/templateContent"
import TemplateFooter from "./Template/templateFooter"

function App() {
  return (
    <div className="App">
      <TemplateNavbar />
      <TemplateHeader />
      <TemplateContent />
      <TemplateFooter />
    </div>
  );
}

export default App;
