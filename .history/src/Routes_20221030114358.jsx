import React from 'react'

const Routes = () => {
  return (
    <Router>
        <Routes>
          <Route path={"/"}/>
          <Router path={"/*/"} />
        </Routes>
    </Router>
  )
}

export default Routes
