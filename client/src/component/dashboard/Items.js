import React from 'react'
import { useSelector } from 'react-redux'

import Table from './Table'
import AddProduct from './AddProduct'
import EditProduct from './EditProduct'

export const Items = () => {
  const product = useSelector(state => state.product)

  return (
    <div>
      {
        product.isEditing
          ? <EditProduct />
          : <AddProduct />
      }
      <Table />
    </div>
  )
}