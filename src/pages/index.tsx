import { RootStatesType } from '@/stores'
import { decrement, increment, resetCount } from '@/stores/slices/counter'
import { Button } from 'antd'
import { GetServerSideProps } from 'next'
import { useDispatch, useSelector } from 'react-redux'

interface User {
  id: string
  name: string
}

export const getServerSideProps = (async () => {
  const res = await fetch(`https://65f2afad034bdbecc7658f4b.mockapi.io/api/user`)
  const data = await res.json()
  return { props: { data } }
}) satisfies GetServerSideProps<{ data: any }>

const Index = ({ data }: { data: User[] }) => {
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
          {data.map((item) => {
            return <h3 key={item.id}>{item.name}</h3>
          })}
        </div>
      </div>
    </main>
  )
}

export default Index
