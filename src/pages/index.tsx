import { RootStatesType } from '@/stores'
import { decrement, increment, resetCount } from '@/stores/slices/counter'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'

interface User {
  id: string
  name: string
}

const Index = () => {
  const count = useSelector((state: RootStatesType) => state.counter)
  const dispatch = useDispatch()
  return (
    <main>
      <div>
        <h1>Number: {count.value}</h1>
        <br />
        <Button type="primary" onClick={() => dispatch(increment(1))}>
          ++
        </Button>
        <Button type="primary" onClick={() => dispatch(decrement(1))}>
          --
        </Button>
        <Button type="primary" onClick={() => dispatch(resetCount())}>
          reset
        </Button>
        <div>
          {/* {.map((item) => {
            return <h3 key={item.id}>{item.name}</h3>
          })} */}
        </div>
      </div>
    </main>
  )
}

export default Index
