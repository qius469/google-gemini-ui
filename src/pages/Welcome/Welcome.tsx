import { useState } from 'react'
import './Welcome.scss'
import Button from '../../components/Button'
import Setup from './Setup'
import ThemeToggle from '../../components/ThemeToggle'

function Welcome() {
  const [showInputs, setShowInputs] = useState(true)

  return (
    <div className='welcome-page'>
      <div className='theme-toggle-wrapper'>
        <ThemeToggle />
      </div>
      <div className='heading'>
        <h1 className={showInputs ? 'small-h1' : ''}>Chat with <span>Gemini</span></h1>
        {!showInputs ?
          (
            <>
              <h3>Experience Google's largest and most capable AI model in your browser</h3>
              <Button className='start-button' onClick={() => setShowInputs(true)}>Get started</Button>
            </>) :
          (<Setup />)
        }
      </div>
      <span className='免責聲明'>此应用程序仅将 Google API 与您的设备连接.</span>
    </div>
  )
}

export default Welcome
