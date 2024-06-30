import React, { Suspense, useState } from 'react'
import { ProgressSpinner } from 'primereact/progressspinner';

import { BrowserRouter, Router, Routes, Link, Outlet, Navigate, Route } from "react-router-dom"

import NabBar from './components/nav-bar'
import Search, { LoginRef } from './components/search'
// import Hostages from './components/pages/hostages' // Lazy
// import Reports from './components/pages/reports' // Lazy

const LazyHostagesRoute = React.lazy(() => import("./components/pages/hostages"))
const LazyReportsRoute = React.lazy(() => import("./components/pages/reports"))

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NabBar />
          <Suspense fallback={<ProgressSpinner />}>
            <Routes>
              <Route key="home" path={"/"} element={<h1> Home </h1>} />
              <Route key="reports" path={"/reports"} element={<LazyReportsRoute />} />
              <Route key="Hostages" path={"/hostages"} element={<LazyHostagesRoute />} />
              <Route key="Donate" path={"/donate"} element={<h1>Donate</h1>} />
              <Route key="Login" path={"/login"} element={<LoginRef />} />
              <Route key="error" path={"*"} element={<h1>Not found</h1>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div >
    </>
  )
}

export default App
