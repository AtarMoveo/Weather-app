import './App.css'
import { Homepage } from './pages/homepage/Homepage'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient()

  return <QueryClientProvider client={queryClient}>
    <Homepage></Homepage>
  </QueryClientProvider>
}

export default App
