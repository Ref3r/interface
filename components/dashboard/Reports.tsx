"use client"
import React from 'react'
import Image from 'next/image'
import CardsReports from '../cards/CardsReports'

function Reports() {
  return (
    <div className="flex w-[98%] py-4">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="flex justify-center items-center gap-10 w-full">
          <div className="flex flex-col justify-center items-center gap-4 w-[75%]">
            <div className="w-full">
              <Image
                src={`/RevenueForProducts.svg`}
                width="425"
                height="100"
                alt="home fill"
                className="w-full"
              />
            </div>

            <div className="w-full">
              <Image
                src={`/RevenueForProducts.svg`}
                width="425"
                height="100"
                alt="home fill"
                className="w-full"
              />
            </div>
          </div>

          <div className="w-[25%] h-full">
            <Image
              src={`/TotalSales.svg`}
              width="425"
              height="100"
              alt="home fill"
            />
            <Image
              src={`/HiredCharts.svg`}
              width="450"
              height="100"
              alt="home fill"
            />
          </div>
        </div>

        <div className="bg-[#111111] py-4 w-full rounded-xl flex flex-col gap-4">
          <div className='w-full px-6 flex items-center'>
            <div className='w-[40%]'>
              <p className='text-white text-lg font-semibold'>NAME</p>
            </div>
            <div className='w-[25%]'>
              <p className='text-white text-lg font-semibold'>REVENUE GENERATED</p>
            </div>
            <div className='w-[15%]'>
              <p className='text-white text-lg font-semibold'>STATUS</p>
            </div>
            <div className='w-[20%]'>
              <p className='text-white text-lg font-semibold'>REVENUE GRAPH</p>
            </div>
          </div>

          <CardsReports image={"/icons/ProfileIcon.svg"} name='Jane Cooper' mail='jane.cooper@example.com' amount={"30"} /> 
          <CardsReports image={"/icons/ProfileIcon.svg"} name='Jane Cooper' mail='jane.cooper@example.com' amount={"30"} /> 
        </div>
      </div>
    </div>
  )
}

export default Reports
