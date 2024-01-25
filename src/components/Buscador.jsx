const Buscador = ({search, onChange}) => {
    return(
        <>
        <form>
            <input 
            type="search"
            placeholder="Buscar colaborador"
            value={search}
            onChange={onChange}
            />
        </form>
        </>

    )
}
export default Buscador;