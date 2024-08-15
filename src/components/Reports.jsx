import React from 'react'
import CardFilter from './CardFilter'

function Report() {
  return (
    <div className="card">
      <CardFilter filterChange={handleFilterChange} />
      <div className='card-body'>
        <h5 className='card-title'>
          Reports <span>{filter}</span>
        </h5>
        <ReportCharts /> 
      </div>
    </div>
  )
}

export default Report