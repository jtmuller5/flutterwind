import { useState } from 'react'
import './App.css'
import { Column, Padding, Row } from './components'
import { ColoredBox } from './components/ColoredBox'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColoredBox color='red'>
        <Padding  padding={16} className='p-16'>
          <Column spacer={8}>
          <div>one</div>
          <div>two</div>
          <Row>
            <div>three</div>
            <div>four</div>
          </Row>
          </Column>
        </Padding>
      </ColoredBox>
    </>
  )
}

export default App
