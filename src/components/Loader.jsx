function Loader({ render, isLoading }) {
    return (
        <>
            {isLoading &&
                <div>cargando...</div> }
            {!isLoading && render()}

         </>
    )
}

export default Loader