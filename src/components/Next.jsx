import React from 'react';
import { Link } from 'react-router-dom';

export default function Next({link}) {
  return (        
        <button className='button'>
            <Link to={link}>
                <button>Next</button>
            </Link>
        </button>
    )
}
