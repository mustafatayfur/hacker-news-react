import React from 'react'
import { useGlobalContext } from './context'

const Buttons = () => {
  const { isLoading, page, nbPage, handlePage } = useGlobalContext()
  return (
    <div className="byn-container">
        <button disabled={isLoading} onClick={()=> handlePage('dec')}>
          prev
        </button>
        <p>{page + 1} of {nbPage}</p>
        <button disabled={isLoading} onClick={()=> handlePage('inc')}>
          next
        </button>
    </div>
  )
}

export default Buttons
