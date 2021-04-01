import React from 'react'
import './App.css'
import Post from './pages/Post'
import { ThemeProvider } from 'styled-components'

const themes = {
  light: {
    main: '#5afc00',
    fg: '#000000',
    bg: 'whitesmoke',
    bg2: '#0e3b00'
  },
  dark: {
    main: '#5afc00',
    fg: 'whitesmoke',
    bg: '#151515',
    bg2: '#0e3b00'
  }
}

function App () {
  return (
    <ThemeProvider theme={themes.dark}>
      <Post />
    </ThemeProvider>
  )
}

export default App
