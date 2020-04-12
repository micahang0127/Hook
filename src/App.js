import React, { Component } from 'react';
import Counter from './component/Counter';


class App extends Component {
  render(){
    return (
      <div className="root"> 
        <main> 
          <Counter/>
        </main>
      </div>
    );
   }
}

export default App;
