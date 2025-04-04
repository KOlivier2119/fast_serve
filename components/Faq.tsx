import React from 'react'
import Link from 'next/link'

const Faq = () => {
  return (
    <div className=''>
      <h1 className='text-center text-xl text-[#3F3F3F]'>Frequently asked questions</h1>
      <div className=''>
        <Link href="" className='px-5 py-3 bg-[#396C03] rounded-full text-white'>General</Link>
        <Link href="" className='px-5 py-3 bg-[#fff] rounded-full text-[#396C03]'>For Business</Link>
      </div>
      <section id='accordion'>
        
      </section>
    </div>
  )
}

export default Faq
