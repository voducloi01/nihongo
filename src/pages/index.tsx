import { RootStatesType, store } from '@/stores'
import { decrement, increment, resetCount } from '@/stores/slices/counter'
import { GetServerSideProps } from 'next'
import { Provider, useDispatch, useSelector } from 'react-redux'

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
  console.log(count)

  return (
    <div>
      {data.map((item) => {
        return <div key={item.id}>{item.name}</div>
      })}
      <br />
      <br />
      <br />
      <div>Number: {count.value}</div>
      <br />
      <button onClick={() => dispatch(increment(1))}>++</button>
      <button onClick={() => dispatch(decrement(1))}>--</button>
      <button onClick={() => dispatch(resetCount())}>reset</button>
    </div>
  )
}

export default Index
