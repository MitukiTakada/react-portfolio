import React from 'react'
import Header from './components/Header'

const PageLayout = ({children}) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default PageLayout
