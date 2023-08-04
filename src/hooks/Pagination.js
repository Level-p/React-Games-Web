import React from 'react'

export const Pagination = ({postPerPage, totalPosts, paginate}) => {
const pageNumbers = [];

for(let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++ ) {
    pageNumbers.push(i)
}
  return (
    <nav className='flex flex-col mx-auto max-w-5xl'>
        <ul className="page-links">
            {pageNumbers.map(number => (
                <a onClick={(e) =>  {
                    e.preventDefault();
                    paginate(number);
                }} href="!#"className='Glinks' key={number}>{number}</a>
            ))}
        </ul>
    </nav>
  )
}
