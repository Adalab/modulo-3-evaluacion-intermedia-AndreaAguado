import '../styles/App.scss';
import { useState } from 'react';
import initialData from '../data/clubsInfo.json';
import header_logo from '../images/extracurriculars.svg';

function App() {
  const [clubs, setClubs] = useState(initialData);
  const [newClub, setNewClub] = useState(
    {
      name: '',
      openOnWeekdays: false,
      openOnWeekend: false
    })
  const [selection, setSelection] = useState('everyday');

  const renderClubs = () => {
    const dataFiltered = clubs.filter((club) => {
      if (selection === 'openOnWeekdays') {
        return club.openOnWeekdays === true;
      }
      else if (selection === 'openOnWeekend') {
        return club.openOnWeekend === true;
      }
      else {
        return clubs;
      }
    })
    return dataFiltered.map((club, index) => {
      return (
        <li id={index} key={index}>
          <div className="club">
            <span className="club_title_container">
              <h3 className="club_title">#{index + 1} {club.name}</h3>
              <button className="delete_club_button" onClick={handleDeleteClub}><i className="fas fa-times delete_club_button_cross"></i></button>
            </span>
            <p className="club_info">Abierto entre semana: {club.openOnWeekdays === true ? 'Si' : 'No'}</p>
            <p className="club_info">Abierto el fin de semana: {club.openOnWeekend === true ? 'Si' : 'No'}</p>
          </div>
        </li>
      )
    })
  }



  const handleNewClub = (ev) => {
    if (ev.currentTarget.id === 'name') {
      setNewClub({ ...newClub, name: ev.currentTarget.value })
    }
    else if (ev.currentTarget.id === 'openOnWeekdays') {
      setNewClub({ ...newClub, openOnWeekdays: ev.currentTarget.checked })
    }
    else if (ev.currentTarget.id === 'openOnWeekend') {
      setNewClub({ ...newClub, openOnWeekend: ev.currentTarget.checked })
    }
  }



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



  const handleFilter = (ev) => {
    setSelection(ev.currentTarget.value);
  }

  const handleDeleteClub = (ev) => {
    const clickedId = ev.currentTarget.id;
    clubs.splice(clickedId, 1);
    setClubs([...clubs]);
  }

  const handleDeleteAll = (ev) => {
    clubs.splice(0, clubs.length);
    setClubs([...clubs]);
  }

  return (
    <div className="page">
      <header className="header">
        <div className="header_title_container">
          <img className="header_logo" src={header_logo} alt="extracurriculars representation" />
          <h1 className="header_title">Mis Clubs</h1>
        </div>
      </header>
      <main className="main">
        <form className="main_selector" action="">
          <label className="main_selector_label" htmlFor="schedule">Mostrar</label>
          <select className="main_selector_input input" onChange={handleFilter} name="schedule" id="schedule">
            <option value="everyday">Todos</option>
            <option value="openOnWeekdays">Los que abren entre semana</option>
            <option value="openOnWeekend">Los que abren en fin de semana</option>
          </select>
        </form>
        <section className="clubs_list">
          <ul className="list">
            {renderClubs()}
          </ul>
        </section>
        <button onClick={handleDeleteAll} className="delete_everything">Borrar todos<i className="fas fa-trash-alt trash_icon"></i></button>
        <section className="add_clubs">
          <h2 className="add_clubs_title">Añadir un nuevo club</h2>
          <form className="add_clubs_form" action="">
            <label className="label_text" htmlFor="name">Nombre del club</label>
            <input placeholder="Ej. Dance club" className="input" onChange={handleNewClub} id="name" type="text" value={newClub.name} />
            <div className="checkboxes">
              <label className="checkboxes_label" htmlFor="openOnWeekdays">
                ¿Abre entre semana?
                <input onChange={handleNewClub} className="checkboxes_input input" type="checkbox" name="openOnWeekdays" id="openOnWeekdays" checked={newClub.openOnWeekdays} />
              </label>
              <label className="checkboxes_label" htmlFor="openOnWeekend">
                ¿Abre los fines de semana?
                <input onChange={handleNewClub} className="checkboxes_input input" type="checkbox" name="openOnWeekend" id="openOnWeekend" checked={newClub.openOnWeekend} />
              </label>
            </div>
            <input onClick={handleAddClub} className="submit" type="submit" value="Añadir un nuevo club" />
          </form>
        </section>
      </main>
      <footer className="footer">
        <small className="footer_small"> &copy; Andrea Aguado 2021 </small>
      </footer>
    </div>
  );
}

export default App;
