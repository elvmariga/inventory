import React from 'react';
import OverallInventory from '../../components/inventory/OverallInventory';
import Products from '../../components/inventory/Products';

const InventoryPage = () => {
  return (
    <div>
        <OverallInventory/>
        <Products/>
    </div>
  )
}

export default InventoryPage