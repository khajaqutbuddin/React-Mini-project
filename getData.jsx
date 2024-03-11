


// LocalStorageExample.js
import { useState, useEffect } from 'react';

export function LocalStorage() {
  const [inputValue, setInputValue] = useState('');
  const [values, setValues] = useState([]);

  function handleAddValue() {
    setValues([...values, inputValue]);
    setInputValue(''); 
  }

  function handleSetData() {
    // Convert the array of values to a comma-separated string
    const valuesString = values.join(',');
    // Set data in local storage
    localStorage.setItem('multiValues', valuesString);
  }

  useEffect(function () {
    // Read data from local storage
    const storedValuesString = localStorage.getItem('multiValues');
    if (storedValuesString) {
      // Parse the stored string to an array
      const storedValues = storedValuesString.split(',');
      setValues(storedValues);
    }
  }, []);

  return (
    <div>
      <label>
        Add Value:
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </label>
      <button onClick={handleAddValue}>Add</button>

      <div>
        <h3>Values:</h3>
        <ul>
          {values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
      </div>

      <button onClick={handleSetData}>Set Data</button>
    </div>
  );
}


