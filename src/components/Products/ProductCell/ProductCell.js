import React from 'react'
import ProductList from '../ProductList/ProductList'
import './ProductCell.css'

export default function ProductCell() {
  const justDummy = [{
    id: 1,
    textHeading: 'Toddler Fishing Game Gifts for 2 3 Year Old Girl and',
    textCode: 'B078WLH42J',
    avgPrice: 5.68,
    avgProfit: 5.68,
    avgMargin: 29,
    avgUnitSold: 192,
    avgRevenue: '32,813.36',
    avgROI: 100,
    avgRank: 93,
    reviews: 93,
    rating: 93,
    dimensions: 93
  }]

  return (
    <div className="data-table">
      <table className="data-wrapper">
        <tbody>
          <ProductList data={justDummy} />
        </tbody>
      </table>
    </div>
  )
}
