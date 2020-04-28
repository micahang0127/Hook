import React, { Component } from 'react';
import Counter from './component/Counter';    // useState
import Info from './component/Info';          // useEffect
import Context from './component/Context';    // useContext


class App extends Component {
  render(){
    return (
      <div className="root"> 
        <main> 
          <Counter/>
          <Info/>
          <Context/>
        </main>
      </div>
    );
   }
}

export default App;
