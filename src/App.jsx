import { useState } from 'react'
import { Layout } from './Layout/Layout'
import AppRoutes from './Routes/AppRoutes'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Layout />
      <AppRoutes />
    </>
  )
}

export default App
