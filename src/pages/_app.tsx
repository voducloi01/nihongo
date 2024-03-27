import { store } from '@/stores'
import { Provider } from 'react-redux'


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
