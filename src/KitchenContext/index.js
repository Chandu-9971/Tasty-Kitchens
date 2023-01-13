import React from 'react'

const KitchenContext = React.createContext({
  addBtn: false,
  filter: () => {},
  onAddBtn: () => {},
  sortByOptions: [],
  removeItem: () => {},
  updateLocalData: () => {},
  checkZero: () => {},
  stateEmpty: () => {},
})
export default KitchenContext
