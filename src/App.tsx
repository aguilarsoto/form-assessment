import { BrowserRouter,  Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout'
import Band from './pages/Band'
import Index from './pages/Index'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index  element={<Index />} />
          <Route path="bands" element={<Index />} />
          <Route path="bands/:bandId" element={<Band />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
