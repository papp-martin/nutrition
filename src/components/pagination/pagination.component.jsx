import React from 'react'

function Pagination({ productsPerPage, totalProducts, paginate, currentPage }) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i);
    }

  return (
    <nav>
        <ul className='pagination'>
            {
                pageNumbers.map(number => (
                    (currentPage === number) ?
                    (
                        <li key={number} className='page-item'>
                            <p onClick={() => paginate(number)} className='page-link' style={{cursor: 'pointer', backgroundColor: 'lightblue'}}>
                                {number}
                            </p>
                        </li>
                    ) :
                    (<li key={number} className='page-item'>
                        <p onClick={() => paginate(number)} className='page-link' style={{cursor: 'pointer'}}>
                            {number}
                        </p>
                    </li>)
                ))
            }
        </ul>
    </nav>
  )
}

export default Pagination