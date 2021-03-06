import './App.css';
import Button from './components/Button'
import Checkbox from './components/Checkbox';
import { useState } from "react";

export const replaceCamelWithSpace = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

const App = () => {
  const [checked, setChecked] = useState(false);
  const isChecked = (check) => {
    setChecked(check)
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button disabled={checked} />
        <Checkbox onCheck={isChecked} />
      </header>
    </div>
  );
}

export default App;
