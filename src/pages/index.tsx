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
        <label>{count.value}</label>
        <Button onClick={() => dispatch(increment(1))} />
        <button onClick={() => dispatch(decrement(1))}>--</button>
        <button onClick={() => dispatch(resetCount())}>reset</button>
        <div>
          {data.map((item) => {
            return <h1 key={item.id}>{item.name}</h1>
          })}
        </div>
      </div>
    </main>
  )
}

export default Index
