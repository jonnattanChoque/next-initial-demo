
import Link from 'next/link'
import React from 'react'

const menuItems = [
    { text: 'Home', link: '/' },
    { text: 'About', link: '/about' },
    { text: 'Pricing', link: '/pricing' },
]

export const Navbar = () => {
  return (
    <nav>
        {menuItems.map((item, index) => (
            <Link href={item.link} key={index}>
                <span>{item.text}</span>
            </Link>
        ))}
    </nav>
  )
}
