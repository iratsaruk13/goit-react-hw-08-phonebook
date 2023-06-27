import AppBar from 'components/AppBar/AppBar'
import { Loader } from 'components/Loader/Loader'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (

    <div>
        <AppBar />
        
        <Suspense fallback={<Loader/>}>
            <main>
                <Outlet />
            </main>
        </Suspense>
    </div>
  )
}
