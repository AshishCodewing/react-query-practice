import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PostDetail from './PostDetail.jsx'
import PostForm from './PostForm.jsx'
import "./server"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'


const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/:id' element={<PostDetail />} />
        <Route path='/post-form' element={<PostForm />}/>
      </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
)
