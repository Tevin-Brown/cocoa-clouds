import React from 'react'
import { AppProvider } from './appContext'
import { AppRouter } from './router/AppRouter'

const App = () => <AppProvider><AppRouter/></AppProvider>

export default App