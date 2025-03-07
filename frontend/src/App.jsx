import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { SignIn, SignUp, ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'
import Login from './pages/Login'
import Home from './pages/Home'
import Landing from './pages/Landing'
import Items from './pages/Items'

// Protected route component
const ProtectedRoute = ({ children }) => {
  return (
    <>
      <SignedIn>{children}</SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default function App() {
  return (
    <div className="font-bold">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/items' element={<Items/>} />
        <Route path='/markets' element={
          <ProtectedRoute>
            <h1>Markets Page</h1>
          </ProtectedRoute>
        } />
        <Route path='/products' element={
          <ProtectedRoute>
            <h1>Products Page</h1>
          </ProtectedRoute>
        } />
        <Route path='/sign-in/*' element={<SignIn routing="path" path="/sign-in" />} />
        <Route path='/sign-up/*' element={<SignUp routing="path" path="/sign-up" />} />
      </Routes>
    </div>
  );
}
