import React, { Component } from 'react';
import Counter from './component/Counter';
import Info from './component/Info';


class App extends Component {
  render(){
    return (
      <div className="root"> 
        <main> 
          <Counter/>
          <Info/>
        </main>
      </div>
    );
   }
}

export default App;
