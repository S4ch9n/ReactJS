import "./index.css"
import { FaCartArrowDown } from "react-icons/fa";
import StyleCard from "./StyleCard/StyleCard";
import ProfileCard from "./StyleCard/ProfileCard";
import IconComponent from "./StyleCard/IconComponent";
const App = () => {
  // const styles = {color : 'white',
  //   backgroundColor : 'crimson',
  // padding : '2rem'}
  return <section>
    {/* <h1 style={styles}>Inline Style</h1> */}
    {/* <h1> Separate file for Styling</h1> */}
    {/* <FaCartArrowDown /> */}
    <StyleCard />
    <ProfileCard />
    <IconComponent />
  </section>
}

export default App;