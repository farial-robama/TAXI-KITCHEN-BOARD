import React, { use, useState } from 'react';
import States from './States';
import OrderCard from './Cards/OrderCard';
import CookingCard from './Cards/CookingCard';
import ServeCard from './Cards/ServeCard';

const OrderContainer = ({ordersPromise}) => {
    const orders = use(ordersPromise)

    const [cookingItems, setCookingItems] =useState([])
    const [readyItems, setReadyItems] =useState([])

    const handleOrder = (order) => {

    const isExist = cookingItems.find((item) => item.id === order.id);
    if (isExist) {
        alert("Already Cooking!!")
        return;
    }

    const newCookingItems = [...cookingItems,order]
    setCookingItems(newCookingItems);
    
    }

     const handleCooking = (order) => {
        const newReadyItems = [...readyItems,order]
        setReadyItems(newReadyItems)

        const remainning = cookingItems.filter((item) => item.id !== order.id)
            setCookingItems(remainning)
        }

    return (
        <div>
            <States 
            cookingTotal={cookingItems.length} 
            orderTotal ={orders.length}
            readyTotal = {readyItems.length}></States>
            <section className='w-11/12 mx-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-5'>
            <div className='lg:col-span-7'>
                <h2 className='font-bold text-4xl'>Current Orders</h2>
                <div className='space-y-5'>
                    {
                        orders.map((order) =>(
                            <OrderCard handleOrder={handleOrder} key={order.id} order={order}></OrderCard>
                        ))

                    }
                </div>
            </div>
            <div className='lg:col-span-5 space-y-5'>
                <h2 className='font-bold text-4xl'>Cooking</h2>
                <div className='shadow p-10 space-y-5'>
                    {
                        cookingItems.map((cookingItem) => (
                            <CookingCard handleCooking={handleCooking} 
                            key={cookingItem.id} 
                            cookingItem={cookingItem}></CookingCard>
                        ) )
                    }
                </div>
                <h2 className='font-bold text-4xl'>Ready to Serve</h2>
                <div className='shadow p-10 space-y-5'>
                    {
                        readyItems.map((order) => (
                            <ServeCard key={order.id} order={order}></ServeCard>
                        ))
                    }
                </div>

            </div>

            </section>
            
        </div>
    );
};

export default OrderContainer;