import { wrapper } from '@/stores'
import '@/css/index.scss'
import { ConfigProvider } from 'antd'
import theme from '@/utils/themeConfig'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <ConfigProvider theme={theme} />
      <Component {...props.pageProps} />
    </Provider>
  )
}
export default App
