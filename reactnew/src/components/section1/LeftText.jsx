import React from 'react'

export default function LeftText() {
  return (
    <div className='flex flex-col justify-between h-full w-1/3'>
        <div className='flex flex-col gap-16 p-4 mt-10'>
        <h1 className='font-bold text-6xl '>
            Prospective Customer Segmentation
        </h1>
        <p>Depending on customer satisfaction and access to banking products, potential target audience can be divided into three groups </p>
        </div>
        <div className='mb-15'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
</svg>

        </div>
    </div>
  )
}
