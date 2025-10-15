// App.jsx
import Weather from "./Weather/Weather";
import UserStatus from "./UserStatus/UserStatus";
import Greeting from "./Greeting/Greeting";

// Cart Component
const Cart = () => {
  const items = ["earphone", "Power bank", "bluetooth"];
  return (
    <div>
      <h1>Cart</h1>
      {items.length > 0 && <h4>Total items in cart are : {items.length}</h4>}

      <h3>Products</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

// Password Validation Components
const ValidPassword = () => <h1>Valid password</h1>;
const InvalidPassword = () => <h1>Invalid password</h1>;

const Password = ({ isValid }) =>
  isValid ? <ValidPassword /> : <InvalidPassword />;

// App Component
const App = () => {
  return (
    <>
      <Cart />

      <section>
        <Password isValid={true} />
      </section>

      <div>
        <Weather temp={35} />

        <UserStatus loggedIn={true} isAdmin={false} />

        <Greeting timeOfDay="night" />
      </div>
    </>
  );
};

export default App;
