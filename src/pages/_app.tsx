import { store } from '@/stores'
import { Provider } from 'react-redux'
import '@/css/index.scss'


export default function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  const page = (
    <>
      <Component {...pageProps} />
    </>
  )

  if (Component.getLayout) {
    return <Provider store={store}>Component.getLayout(page)</Provider>
  }

  return <Provider store={store}>{page}</Provider>
}
