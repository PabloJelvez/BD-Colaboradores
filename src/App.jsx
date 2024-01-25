import { useState } from 'react';
import { BaseColaboradores } from './assets/BaseColaboradores';
import Listado from './components/Listado';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './components/Buscador';

function App() {
const [search, setSearch] = useState("")

const handleChange = (e) =>{
  setSearch(e.target.value)
}

  const filterColaboradores = BaseColaboradores.filter((colaborador) =>{
    if(
      colaborador.nombre.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.edad.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.cargo.toLowerCase().includes(search.toLowerCase()) ||
      colaborador.telefono.toLowerCase().includes(search.toLowerCase())
    ) {
      return true
    }
      return false
  })

  return (
    <>
  
  <Buscador search={search} onChange={handleChange} />
  <Listado colaboradores={filterColaboradores} />
      
    </>
  )
}

export default App
