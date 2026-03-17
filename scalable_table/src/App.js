import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [rows,setRows] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/api/entities/full')
    .then(res => res.json())
    .then(data => setRows(data))
    .catch(err => console.error('Error fetching full table data:', err));
  })


  return (
    <div className="App">
      <h1>Full EAV Table</h1>
      <table>
        <thead>
          
        </thead>
      </table>
    </div>
  );
}

export default App;
