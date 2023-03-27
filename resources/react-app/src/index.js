import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { QueryClient, QueryClientProvider } from 'react-query'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const queryClient = new QueryClient()
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
)
