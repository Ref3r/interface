import React from 'react'
import Image from 'next/image'
import CardsInfProductForBrands from '@/components/cards/influencers/CardsInfProductForBrands'
import CardsInfRecentOrders from '@/components/cards/influencers/CardsInfRecentOrders'

function ProductsInf() {
  return (
    <div className="flex w-[98%] py-4">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="flex justify-center items-center gap-10 w-full">
          <div className="flex flex-col justify-center items-center gap-4 w-[75%]">
            <div className="bg-[#111111] p-6 flex flex-col rounded-lg w-full gap-20">
              <div className="flex justify-between items-center bg-[#232528] text-white py-2 px-8 rounded-full">
                <p>Top Selling Product</p>
                <p>View all products &#62;</p>
              </div>
              <div className="flex gap-4 flex-wrap">
                <CardsInfProductForBrands
                  image={"Mobile1.svg"}
                  name="Techno Pova"
                />
                <CardsInfProductForBrands
                  image={"Mobile2.svg"}
                  name="Techno Spark"
                />
                <CardsInfProductForBrands
                  image={"Mobile3.svg"}
                  name="Realme Narzo"
                />
                <CardsInfProductForBrands
                  image={"Mobile4.svg"}
                  name="Redmi Note 12"
                />
                <CardsInfProductForBrands
                  image={"Mobile5.svg"}
                  name="Redmi 13 C"
                />
                {/* <CardsProductForBrands image={"Product1.svg"} name="Yamaha Bike" /> */}
              </div>
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

        <div className="bg-[#111111] p-6 w-full rounded-xl flex flex-col gap-6">
          <div className="flex justify-between items-center bg-[#232528] text-white py-2 px-8 rounded-full">
            <p>Recent Order</p>
            <p>View all products &#62;</p>
          </div>
          <div className="flex gap-6 flex-wrap">
            <CardsInfRecentOrders image={`Recent1.svg`} name="Product 01" />
            <CardsInfRecentOrders image={`Recent2.svg`} name="Product 02" />
            <CardsInfRecentOrders image={`Recent3.svg`} name="Product 03" />
            <CardsInfRecentOrders image={`Recent4.svg`} name="Product 04" />
            <CardsInfRecentOrders image={`Recent5.svg`} name="Product 05" />
            <CardsInfRecentOrders image={`Recent6.svg`} name="Product 06" />
            <CardsInfRecentOrders image={`Recent7.svg`} name="Product 07" />
          </div>  
        </div>
      </div>
    </div>
  )
}

export default ProductsInf
