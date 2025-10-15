import Person from "./Person/Person";
import Product from "./Product/Product";
import User from "./User";

const App = () => {
  return (
    <div>
      <User
        name="Lookism"
        age={22}
        isAvailable={true}
        hobbies={["Fighting", "Reading", "Singing"]}
      />
      < Person
      heading = "John"
      paragraph = "John is a hard working guy"
       />

       <Product 
       h2 = "this is heading two"
       p2 = "this is second paragraph"
       />

    </div>

  );
};

export default App;
