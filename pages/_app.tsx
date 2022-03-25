import type { AppProps } from 'next/app'
import 'antd/dist/antd.css';
import '../styles/index.scss'
import React, { ComponentType } from 'react'
import { Provider } from 'react-redux'
import { AppInitialProps } from 'next/app'
import { ToastContainer, toast } from 'react-toastify';
import store from '../stores/store';

type Properties = {
  Component: ComponentType<AppInitialProps> | any
  pageProps: AppInitialProps
}

const MyApp = ({
  Component,
  pageProps,
}: Properties) => {
  const { Layout, title }: any = Component;
  const Div = ({ children, rest }: any) => <div {...rest}>{children}</div>
  const Container: any = Layout ? Layout : Div;
  return (
    <Container >
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover

      />
      <Component {...pageProps} />
    </Container>
  )
}


const App = (props: Properties) => {

  return (
    <Provider store={store}>
      <MyApp {...props} />
    </Provider>
  )
}

export default App


