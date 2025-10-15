
import Expression from "./Components/Expression";
import Footer from "./Components/Footer";
import Greetings from "./Components/Greetings";
import Header from "./Components/Header";
import JSXRules from "./Components/JSXRules";
import WeclomeMessage from "./Components/WeclomeMessage";
import MainContent from "./MainComponent/MainContent";
import ProductInfo from "./ProductInfo/ProductInfo";


function App(){
  return(
  <>
    <Header />
    <MainContent />
    <WeclomeMessage />
    <JSXRules />
    <Expression />
    <Greetings />
    <ProductInfo />
    <Footer />
    </>
  );
}

export default App;