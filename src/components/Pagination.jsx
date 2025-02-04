import propTypes from "prop-types";
import { useState } from "react";

/**
 * @description Component to show the pagination of the Products
 * @param {number} numberTotalPages - Number of the current page
 * @param {function} changeFirstPage  - Function to change the First page
 * @param {function} changePreviousPage - Function to change the Previous Page
 * @param {function} changeNextPage - Function to change the Next page
 * @param {function} changeLastPage - Function to change the Last page
 */
function Pagination({ numberPage,numberTotalPages, changeFirstPage, changePreviousPage,changeNextPage , changeLastPage }) {
  const [buttonClass,SetButttonClass] = useState("bg-blue-600 text-white px-1 py-2 rounded-xl")

  return (
    <div className="flex justify-center gap-4 py-8">
      <button onClick={changeFirstPage } disabled={numberPage === 1} className={buttonClass}>Primera </button>
      <button onClick={changePreviousPage} disabled={numberPage === 1} className={buttonClass}>Anterior</button>
      <span className="bg-green-700 text-white px-1 py-0 text-xs justify-items-center items-start" >Página {numberPage} de {numberTotalPages}</span>
      <button onClick={changeNextPage} disabled={numberPage===numberTotalPages} className={buttonClass}>Siguiente</button>
      <button onClick={changeLastPage} disabled={numberPage===numberTotalPages} className={buttonClass}>Ultima</button>

    </div>
  );
}

Pagination.propTypes = {
  numberPage: propTypes.number.isRequired,
  numberTotalPages: propTypes.number.isRequired,
  changeFirstPage: propTypes.func.isRequired,
  changePreviousPage: propTypes.func.isRequired,
  changeNextPage: propTypes.func.isRequired,
  changeLastPage: propTypes.func.isRequired,
  //nextPage: propTypes.bool.isRequired,
};

export default Pagination;

