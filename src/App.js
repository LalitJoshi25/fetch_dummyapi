import './App.css';
import Header from './components/Header';
import React, { useState, useEffect } from 'react';
function App() {

  const [state, setState] = useState(2);
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const get = await fetch(`https://hub.dummyapis.com/employee?noofRecords=${state}&idStarts=1001`)

      const response = await get.json();
      setData(response);
      console.log(response);

    }
    getData();
  }, [state])

  return (
    <div className='body'>
      <Header />
      <div className='num'>
        <h2>Fetching data from dummyapis and displaying in the tables formate</h2>
        <div className='buttons'>
          <button onClick={() => setState(state + 2)}>state{state}</button>
        </div>
      </div>
      <div id='tab'>
        <table >
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
          {
            data.map((element, index) => {
              return (

                <tr key={index}>
                  <td>{element.firstName}</td>
                  <td>{element.lastName}</td>
                  <td>{element.email}</td>
                </tr>

              )
            })
          }
        </table>
      </div>
    </div>
  );
}

export default App;
