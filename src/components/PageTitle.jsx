import React from 'react'
import './pageTitle.css'
function PageTitle({page}) {
  return (
    <div className='pageTitle'>
      <h1>{page}</h1>
      <nav>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <a href="/">
              <i className='bi bi-house-door'></i>
            </a>
          </li>
          <li className='breadcrum-item active'>{page}</li>
        </ol>
      </nav>
    </div>
  )
}

export default PageTitle