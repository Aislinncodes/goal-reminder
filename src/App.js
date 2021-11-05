import React, {useState} from 'react'
import goalList from './goals'
import List from './List'
import './App.css';

function App() {
  const [goals, setGoals] = useState(goalList)
  return (
    <div className="App">
      <h1>Goal Reminder</h1>
      <section className="main">
        <h3>{goals.length} Goals To Complete</h3>
        <label>Add More Goals:</label>
        <input 
          type='text'
          placeholder='Whats your goal?' />
        <button>Add</button>
        <List goals={goals} />

      </section>
    </div>
  );
}

export default App;
