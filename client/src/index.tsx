import ReactDOM from 'react-dom'
import Application from './Application'
import { StateProvider } from './global/StateProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.scss'

const queryClient = new QueryClient({
  defaultOptions: {},
})

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <StateProvider>
      <Application />
    </StateProvider>
  </QueryClientProvider>,
  document.getElementById('root')
)
