import React from 'react'
import Image from 'next/image'

const CardsProductForBrands = ({
    image,
    name,
} : {
    image: any;
    name: string;
}) => {
  return (
    <div className='w-[18%] bg-[#27292DCC] p-2 rounded-xl flex flex-col justify-center text-center items-center gap-4 min-h-[250px]'>
      <Image
        // src={`/${image}.svg`}
        src={image}
        width="120"
        height="100"
        alt="fetch error"
        className="rounded-t-lg w-full"
      />
      <p className="text-white font-medium">{name}</p>
      <button className="rounded-lg bg-[#00B24F] text-white px-4 py-1 text-sm">View</button>
    </div>
  )
}

export default CardsProductForBrands
