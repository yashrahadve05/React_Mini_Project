import { useState } from 'react'
import Card from './components/Card'

function App() {

  return (
    <div className='w-full bg-slate-900 flex justify-center items-center flex-col flex-wrap'>
      <h1 className='max-w-md w-full bg-blue-600 text-3xl font-bold rounded-md p-3 m-5 text-center'>React Props</h1>
      <Card username="Harshit" position="Frontend Developer" />
      <Card username="Abishek" position="Backend Developer" />
      <Card username="Arvind" position="Android Developer" />
      <Card username="Shivam" position="IOS Developer" />
      <Card username="Hitesh" position="Full Stack Developer" />
    </div>
  )
}

export default App
