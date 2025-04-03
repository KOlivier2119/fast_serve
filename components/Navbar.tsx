import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between'>
        <h1 className='text-[#396C03] font-medium'>FoodTime</h1>
        <div className='flex gap-3'>
            <h1>Home</h1>
            <h1>Blog</h1>
            <h1>About Us</h1>
            <select name="EN" id="">
                <option value="">EN</option>
                <option value="">FR</option>
                <option value="">SN</option>
            </select>
        </div>
        <div>
            <Link href="" className='bg-[#396C03] text-white rounded-full py-2 px-3'>Login</Link>
            <Link href=""></Link>
        </div>
    </nav>
  )
}

export default Navbar
