import { useState } from 'react';
import { BaseColaboradores } from './assets/BaseColaboradores';
import Listado from './components/Listado';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Buscador from './components/Buscador';
import Formulario from './components/Formulario';
import Alert from './components/Alert';
import  Row  from 'react-bootstrap/Row';
import  Col  from 'react-bootstrap/Col';


function App() {
const [search, setSearch] = useState("");
const [colaboradores, setColaboradores] = useState(BaseColaboradores);
const [alert, setAlert] = useState({error: "", msg: "", color: ""});

const handleSubmit = (nuevoColaborador) => {
  const colaboradorId = {...nuevoColaborador, id: Date.now()};
  setColaboradores([...colaboradores, colaboradorId]);
};

const handleChange = (e) =>{
  setSearch(e.target.value);
};

  const filterColaboradores = colaboradores.filter((colaborador) =>{
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
  <div className='mx-5'>
    <h1>Lista de colaboradores</h1>
  <Row>
    <Col sm={4}>
      <Buscador search={search} onChange={handleChange} />
    </Col> 
  </Row>  
  <Row>
    <Col sm={12} md={9}>
      <Listado colaboradores={filterColaboradores} />
    </Col>
    <Col md={3}>
      <h2>Agregar colaborador</h2>
      <Formulario onSubmit={handleSubmit} setAlert={setAlert} />
      {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}  
    </Col>
 
  </Row>
  
  </div>
    
    </>
  )
}

export default App
