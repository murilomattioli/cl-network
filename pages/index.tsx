import type { NextPage } from 'next'
import { Input } from '../components'

const Home: NextPage = () => {
  return (
    <div className='main'>
      <Input placeholder='John Doe' />
    </div>
  )
}

export default Home
