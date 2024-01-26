const Buscador = ({search, onChange}) => {
    return(
        <>
        <form role="search">
            <input 
            type="search"
            placeholder="Buscar colaborador"
            value={search}
            onChange={onChange}
            className="form-control me-2 my-3"
            aria-label="Search"
            />
        </form>
        </>

    );
};
export default Buscador;