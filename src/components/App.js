import '../styles/App.css';
import { useState } from 'react';
import initialData from '../data/clubsInfo.json';

function App() {
  const[clubs, setClubs] = useState( initialData);
  const[newClub, setNewClub] = useState (
    {
      name: '',
      openOnWeekdays: false,
      openOnWeekend: false
    })
  const [selection, setSelection] = useState ('everyday');

    // start renderClubs()
  const renderClubs = () => {
    console.log(clubs);
    const dataFiltered = clubs.filter( (club) => {
      if (selection === 'openOnWeekdays'){
        return club.openOnWeekdays === true;
      }
      else if (selection === 'openOnWeekend'){
        return club.openOnWeekend === true;
      }
      else {
        return clubs;
      }          
    })
    return dataFiltered.map( (club,index) => {
      return (     
        <li id={index} key={index}>
        <div className="club">
          <span className="clubTitle">
            <h3>#{index} {club.name}</h3>
            <button onClick={handleDeleteClub}>x</button>
          </span>
          <p>Abierto entre semana: {club.openOnWeekdays === true ? 'Si' : 'No'}</p>
          <p>Abierto el fin de semana: {club.openOnWeekend === true ? 'Si' : 'No'}</p>
        </div>
      </li>
    )
    })
  }
   // end renderClubs()

  //  start handleNewClub()
  const handleNewClub = (ev) => {
    if(ev.currentTarget.id === 'name'){
      setNewClub({ ...newClub, name: ev.currentTarget.value})
    }
    else if (ev.currentTarget.id === 'openOnWeekdays'){
      setNewClub({...newClub, openOnWeekdays: ev.currentTarget.checked })
    }
    else if (ev.currentTarget.id === 'openOnWeekend'){
      setNewClub({...newClub, openOnWeekend: ev.currentTarget.checked })
    }
  }
  // end handleNewClub()

  // start handleAddClub()
  const handleAddClub = (ev) => {
    ev.preventDefault();
    setClubs([...clubs, newClub]);
    setNewClub(
      {
        name: '',
        openOnWeekdays: '',
        openOnWeekend: ''
      })
  }
  // end handleAddClub()

  // start filter 
  const handleFilter = (ev) => {
    setSelection(ev.currentTarget.value);
  }

  const handleDeleteClub = (ev) => {
    // ev.preventDefault();
    const clickedId = ev.currentTarget.id;
    clubs.splice(clickedId, 1);
    console.log(clubs);
    setClubs(...clubs);
    renderClubs();
  }


  return (
    <div>
      <header>
        <h1>Mis Clubs</h1>
        <form action="">
          <label htmlFor="schedule">Mostrar</label>
          <select onChange={handleFilter} name="schedule" id="schedule">
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
            <input onChange={handleNewClub} id="name" type="text" value={newClub.name} />
            <div className="checkboxes">
              <label htmlFor="openOnWeekdays">
              ¿Abre entre semana?
                <input  onChange={handleNewClub}  className="input"  type="checkbox" name="openOnWeekdays" id="openOnWeekdays" checked={newClub.openOnWeekdays} />
              </label>
              <label htmlFor="openOnWeekend">
              ¿Abre los fines de semana?
                <input  onChange={handleNewClub}  className="input" type="checkbox" name="openOnWeekend" id="openOnWeekend" checked={newClub.openOnWeekend} />
              </label>             
            </div>
            <input  onClick={handleAddClub}  className="submit" type="submit" value="Añadir un nuevo club" />
          </form>
        </section>
      </main>


    </div>
  );
}

export default App;
