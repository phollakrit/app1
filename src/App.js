import React from 'react'
import { Content, Footer, Header } from './func-components';
import Calendar from './class-components';

function App() {
  return (
    <>
      <Header/>
      <p><center><Calendar/></center></p>
      <Content/>
      <Footer/>
      <div>React & React Native</div>
      <div>Test</div>
    </>
  )
}

export default App;
