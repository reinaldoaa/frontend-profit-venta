import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

/**
 * @description Component to show the Products for page
 * @param {number} pageSize - Numero de Registro por paginas que se desean mostrar
 * @param {number} pageNavegate  - Numero de la Pagina a navegar o mostrar
 */
function Products () {
  const[data,setData] = useState({ results: [] }); //Estado para los Productos
  const[currentPage,setCurrentPage] = useState(1); //Pagina concurrente
  const[totalPages,setTotalPages] = useState(1); //Total de paginas que tiene la consulta
  const[pageNavegate,setPageNavegate] = useState(1); //Numero de la Pagina a navegar
  const[pageSize, setPageSize ] = useState(15); // Numero de Registro por paginas que se desean mostrar
  const[error,setError] = useState('');

  const header = {
    method:"POST",
    headers:{ 'Content-Type': 'application/json'},
    body: JSON.stringify({"nPages" : pageNavegate,"nPageSize": pageSize }) // Envía los datos de para la paginacion
  };

  useEffect ( ()=> {
    //fetch ('ara.servehttp.com:8000/products_page',header)
    //fetch ('http://localhost:8000/products_page',header)
    fetch(`${import.meta.env.VITE_API_URL}/products_page`,header)
    .then(  (response)=> {
      if (!response.ok) {
          throw new Error("Error en response"); //Maneja error
      }
      console.log('!response.ok',response);
      return response.json();
    })
    .then( (response) => {
      console.log('Respuesta de la API:', response);
      //console.log('registers:', response.registers);
      setData(response.results || []); // Asegúrate de que sea un array
      setTotalPages(response.total_pages); //Total de paginas que tiene la consulta
      setError('');
      //console.log("Respuesta de la API (response): ",response);
    })
    .catch( (error) => {
      setError(error.message);
      console.log('Error catch: ',error);
    })
  },[pageNavegate])

  const handleFirstPage = () =>{ setPageNavegate(1); setCurrentPage(1);}
  const handleLastPage = () => { setPageNavegate(totalPages); setCurrentPage(totalPages); }

  const handleNextPage = () => { setCurrentPage( (prev)=>
    { const nextPage = Math.min(prev + 1,totalPages); // No ir más allá de totalPages
      setPageNavegate(  nextPage );
      setCurrentPage(pageNavegate);
      return nextPage;}
    );
  }

  const handlePreviousPage =() => {
    setCurrentPage( (prev) => {
      const prevPage = Math.max(prev-1,1); // No retornar menos de la página 1
      setPageNavegate(prevPage);
      return prevPage;
      })
  }

  // Cambiar la condición para verificar si hay registros
  if ( data.length === 0  ) { // data.length===0
    return <h1 className="flex justify-center py-4">Loading...</h1>;
  }

  return (
    <div className='h-[100vh] py-10 px-10 flex flex-col justify-between'>
      <div className='w-[65vw] rounded overflow-hidden shadow-2xl justify-center items-center gap-8 px-2 flex-grow' >
        <div className='font-Oswald items-center  py-4 px-10 flex flex-col flex-grow'>
          {error && <div className=" text-purple-800 "> {error}</div> }
          <div>PRODUCTOS</div>
            <div className="flex-grow overflow-y-auto">
              {data && Array.isArray(data) && data.map(product => (
                <div key={product.co_art}>
                  <div>{product.art_des}</div>
                </div>
                ))}
            </div>
          <div className="mt-auto">
            <Pagination numberPage={currentPage} numberTotalPages={totalPages}
              changeFirstPage={handleFirstPage} changePreviousPage={handlePreviousPage}
              changeNextPage={handleNextPage} changeLastPage={handleLastPage}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Products;

