import React from 'react';
import { Pagination } from 'react-bootstrap';


export default function PaginationPages(props) {
    let pageNumbers = [];
    for (let i = 0; i < Math.ceil(props.totallist/ props.postsPerPage); i++) {
        pageNumbers.push(i);
    }
    
    return (
        <div style={{margin:'auto',width:'50%'}}>
            <nav style={{textAlign:'center'}} >
                    <ul className="pagination" >
                         {
                            pageNumbers.map((number) => {
                                return (
                                    <li  key={number} className='page-item' >
                                        <button onClick={()=>props.paginate(number)} href='!#' className='page-link' > 
                                        {number} 
                                        </button>
                                      
                                        </li>
                                )
                            })
                        }
                    </ul>
                </nav>
             </div>
    )
}