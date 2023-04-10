import React from 'react'
import Header from './Header'

function Layout({chileren}) {
  return (
    <>
    <Header/>
    <div>{chileren}</div>
    </>
  )
}

export default Layout