import '../styles/App.css';
import initialData from '../data/clubsInfo.json';

function App() {
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
          <div className="club">
            <h3>Club</h3>
            <p>Abierto entre semana:</p>
            <p>Abierto el fin de semana:</p>
          </div>
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
