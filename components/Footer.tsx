import React from 'react'

const Footer = () => {
  return (
    <div className='w-full bg-[#396C03]'>
      <div className='min-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center'>
        <div className='w-1/2'>
            <h1>FastServe</h1>
            <p></p>
        </div>
        <div className='w-1/2'>
            <div>
                <h1 className='py-6 font-bold text-white'>Quick links</h1>
                <span>Browse FastServe</span>
                <span>Browse Food tim</span>
                <span>Registrations</span>
            </div>
            <div className='text-white'>
                <h1 className='py-6 font-bold text-white'>About</h1>
                <span>About us</span>
                <span>Mission</span>
                <span>Contact</span>
            </div>
            <div className='text-white'>
                <h1 className='py-6 font-bold text-white'>Social</h1>
                <span>Facebook</span>
                <span>Twitter</span>
                <span>Instagram</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
