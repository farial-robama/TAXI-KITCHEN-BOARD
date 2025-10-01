
import { Suspense } from 'react';
import './App.css'
import Navbar from './components/Navbar'
import OrderContainer from './components/OrderContainer'
import TitleSection from './components/TitleSection'

const loadOrders = () => fetch("/orders.json").then((res) => res.json());

function App() {

  const ordersPromise = loadOrders();

  return (
    <>
    <header className='w-11/12 mx-auto py-3'>
      <Navbar></Navbar>
 
    </header>

    <section>
      <TitleSection>
        Kitchen Room
      </TitleSection>
    </section>
    <section>
      <Suspense fallback={"LOADING...."}>
        <OrderContainer ordersPromise={ordersPromise}></OrderContainer>
      </Suspense>
    </section>
       
    </>
  )
}

export default App
