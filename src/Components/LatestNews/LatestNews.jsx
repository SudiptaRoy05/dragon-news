import React from 'react'
import Marquee from 'react-fast-marquee'
import { Link } from 'react-router-dom'

export default function LatestNews() {
  return (
    <div className='flex items-center gap-3 bg-gray-300 py-2 px-2 mt-2'>
        <p className='bg-[#D72050] text-white font-semibold px-3 py-2'>Latest</p>
        <Marquee pauseOnHover={true} speed={100} className='space-x-12'>
            <Link to='news'>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Link>
            <Link to='news'>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Link>
            <Link to='news'>
            Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Link>
        </Marquee>
    </div>
  )
}
