import State from './State'
import Friends from './Friends'
import MovieInfo from './MovieInfo'
import MovieInfo2 from './MovieInfo2'
import FirstComponents from './Components/FirstComponents'
import SecondComponents from './Components/SecondComponents'
import { useState } from 'react'
import Example1 from './Components/Example1'
import Example2 from './Components/Example2'
import Example3 from './Components/Example3'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <section>
      <State />
      <Friends />
      <MovieInfo />
      <MovieInfo2 />

      <FirstComponents
        count={count}
        onClickHandler={() => setCount(prev => prev + 1)}
      />

      <SecondComponents
        count={count}
        onClickHandler={() => setCount(prev => prev + 1)}
      />

      <Example1 />
      <Example2 />
      <Example3 />
    </section>
  );
}

export default App;
