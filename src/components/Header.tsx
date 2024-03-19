import Link from 'next/link'
import React from 'react'

export default function Header () {
  return (
    <header className='header'>
      <h1 className='header-title'><Link href='/'>Top 100 US Podcasts</Link></h1>
    </header>
  )
}
