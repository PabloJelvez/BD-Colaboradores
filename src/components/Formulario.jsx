import { useState } from "react";
import  Button  from "react-bootstrap/Button";
import  Form  from "react-bootstrap/Form";

const Formulario = ({onSubmit, setAlert}) => {
    const [colaborador, setColaborador] = useState({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
    });

    const handleChange = (e) => {
        setColaborador({
            ...colaborador,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(
            colaborador.nombre === "" ||
            colaborador.correo === "" ||
            colaborador.edad === "" ||
            colaborador.cargo === "" ||
            colaborador.telefono === ""
        ){
            setAlert({
                error: true,
                msg: "Completa todos los campos",
                color: "danger",
            });
            return;
        }

        onSubmit(colaborador);

        setAlert({
            error: false,
            msg: "Colaborador agregado con exito",
            color: "success",
        });
        setColaborador({
            nombre: "",
            correo: "",
            edad: "",
            cargo: "",
            telefono: "",
        });
    };

    return(
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control
                type="text"
                name="nombre"
                placeholder="Nombre colaborador"
                onChange={handleChange}
                value={colaborador.nombre}
                className="my-2"
                />
                <Form.Control
                type="email"
                name="correo"
                placeholder="Email colaborador"
                onChange={handleChange}
                value={colaborador.correo} 
                className="my-2"
                />
                <Form.Control
                type="text"
                name="edad"
                placeholder="Edad colaborador"
                onChange={handleChange}
                value={colaborador.edad} 
                className="my-2"
                />
                <Form.Control
                type="text"
                name="cargo"
                placeholder="Cargo colaborador"
                onChange={handleChange}
                value={colaborador.cargo} 
                className="my-2"
                />
                <Form.Control
                type="text"
                name="telefono"
                placeholder="Telefono colaborador"
                onChange={handleChange}
                value={colaborador.telefono} 
                className="my-2"
                />
                <Button type="submit" variant="primary" className="w-100">
                    Agregar colaborador
                </Button>
                 </Form.Group>
        </Form>
        </>

    );
};
export default Formulario;