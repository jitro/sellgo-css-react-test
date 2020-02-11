import React from 'react'
import ProductSelector from '../ProductSelector/ProductSelector'
import ProductInfo from '../ProductInfo/ProductInfo'
import ProductControls from '../ProductControls/ProductControls'
import './ProductList.css'

export default function ProductList({data}) {
  return data.length ? data.map(d => (
    <tr className="data-row" key={d.id}>
      <ProductSelector />
      <ProductInfo textHeading={d.textHeading} textCode={d.textCode} />
      <td></td>
      <td>${d.avgPrice}</td>
      <td>${d.avgProfit}</td>
      <td>{d.avgMargin}%</td>
      <td>{d.avgUnitSold}</td>
      <td>${d.avgRevenue}</td>
      <td>{d.avgROI}%</td>
      <td>{d.avgRank}</td>
      <td>{d.reviews}</td>
      <td>{d.rating}</td>
      <td>{d.dimensions}</td>
      <ProductControls />
    </tr>
  )): (
    <tr><td>No records available.</td></tr>
  )
}
