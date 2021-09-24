import '../styles/App.css';
import { useState } from 'react';
import initialData from '../data/clubsInfo.json';

function App() {
  const[clubs, setClubs] = useState( initialData);
  const renderClubs = () => {
    return clubs.map( (club,index) => {
      return (     
        <li id={index} key={index}>
        <div className="club">
          <h3>#{index} {club.name}</h3>
          <p>Abierto entre semana: {club.openOnWeekdays = true ? 'Si' : 'No'}</p>
          <p>Abierto el fin de semana: {club.openOnWeekend = true ? 'Si' : 'No'}</p>
        </div>
      </li>
    )
    })
  }
  return (
    <div>
      <header>
        <h1>Mis Clubs</h1>
        <form action="">
          <label htmlFor="schedule">Mostrar</label>
          <select name="schedule" id="schedule">
            <option value="everyday">Todos</option>
            <option value="openOnWeekdays">Los que abren entre semana</option>
            <option value="openOnWeekend">Los que abren en fin de semana</option>
          </select>
        </form>
      </header>
      <main>
        <section>
          <ul>
            {renderClubs()}
          </ul>
        </section>
        <section>
          <h2>Añadir un nuevo club</h2>
          <form className="addClub" action="">
            <label htmlFor="name">Nombre del club</label>
            <input id="name" type="text" />
            <div className="checkboxes">
              <label htmlFor="openOnWeekdays">
              ¿Abre entre semana?
                <input className="input"  type="checkbox" name="openOnWeekdays" id="openOnWeekdays" />
              </label>
              <label htmlFor="openOnWeekend">
              ¿Abre los fines de semana?
                <input className="input" type="checkbox" name="openOnWeekend" id="openOnWeekend" />
              </label>             
            </div>
            <input className="submit" type="submit" value="Añadir un nuevo club" />
          </form>
        </section>
      </main>


    </div>
  );
}

export default App;
