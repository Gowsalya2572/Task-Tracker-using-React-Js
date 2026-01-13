import React from 'react'
import Task from './components/Task'

const App = () => {
  return (
    <div className='app-layout'>
      <header>
        <h2 className='head'>Task Tracker</h2>
      </header>
      <main className="content">
        <Task />
      </main>
      <footer>
        <p>©2026 Task Tracker. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App

