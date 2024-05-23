"use client";
import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";
import CardsProductForBrands from "../cards/CardsProductForBrands";
import CardsRecentOrders from "../cards/CardsRecentOrders";
import { useBrandProducts } from "@/hooks/useBrandProducts";

function Products() {
  const { storeUrl, products } = useBrandProducts();
  const [isProductsLoaded, setIsProductsLoaded] = useState(false);
  const [productArray, setProductArray] = useState([]);

  useEffect(() => {
    if (products) {
      setIsProductsLoaded(true);
      setProductArray(products.products);
    }
  }, [products]);

  if (isProductsLoaded) {
    // console.log(productArray[0].image.src);
    // console.log(storeUrl);
  }
  return (
    <div className="flex w-[98%] py-4">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="flex justify-center items-center gap-10 w-full">
          <div className="flex flex-col justify-center items-center gap-4 w-[75%]">
            <div className="bg-[#111111] p-6 flex flex-col rounded-lg w-full gap-20">
              <div className="flex justify-between items-center bg-[#232528] text-white py-2 px-8 rounded-full">
                <p>Top Selling Product</p>
                {/* <p>View all products &#62;</p> */}
              </div>
              <div className="flex gap-4 flex-wrap">
                {isProductsLoaded ? (
                  productArray.map((e) => (
                    <CardsProductForBrands
                      key={e.handle}
                      image={e.image.src}
                      name={e.title}
                      link={"https://" + storeUrl + "/products/" + e.handle}
                    />
                  ))
                ) : (
                  <></>
                )}

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
            <CardsRecentOrders image={`Recent1.svg`} name="Product 01" />
            <CardsRecentOrders image={`Recent2.svg`} name="Product 02" />
            <CardsRecentOrders image={`Recent3.svg`} name="Product 03" />
            <CardsRecentOrders image={`Recent4.svg`} name="Product 04" />
            <CardsRecentOrders image={`Recent5.svg`} name="Product 05" />
            <CardsRecentOrders image={`Recent6.svg`} name="Product 06" />
            <CardsRecentOrders image={`Recent7.svg`} name="Product 07" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
