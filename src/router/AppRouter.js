import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './../view/Home';


export const AppRouter = () => {
  //Rutas de la pruebas
  return (
    <Router>
      <div className="App">
        <Fragment>
          <Routes>

            {/* <Route path={["/login", "/register", "/register-data"]} exact component={Login} /> */}
            {/* <Route path={["/", "/home"]} exact component={Home} /> */}
            {/* <Route path="/" exact component={<Home />} /> */}
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </Fragment>
      </div>
    </Router>
  )
}
