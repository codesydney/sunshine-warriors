'use client'

import { FC, useState, ReactNode } from 'react'

interface ListItemProps {
  children: ReactNode
  NavLink: string
}

const ListItem = ({ children, NavLink }: ListItemProps) => {
  return (
    <li>
      <a
        href={NavLink}
        className="flex py-2 text-base font-medium text-dark hover:text-primary lg:inline-flex"
      >
        {children}
      </a>
    </li>
  )
}

const Navbar: FC = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="absolute left-0 top-0 z-20 w-full bg-white">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="w-20">
            <a href="/#">
              <img src="/assets/logo.png" alt="logo" className="w-[150px]" />
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="ml-auto inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none lg:hidden"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          <div
            className={`absolute right-0 top-full w-full bg-white p-4 lg:static lg:w-auto lg:bg-transparent lg:p-0 ${!open ? 'hidden lg:flex' : ''}`}
          >
            <ul className="flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-8 lg:space-y-0">
              <ListItem NavLink="/#about">About</ListItem>
              <ListItem NavLink="/#services">Services</ListItem>
              <ListItem NavLink="/#portfolio">Portfolio</ListItem>
              <ListItem NavLink="/#team">Team</ListItem>
              <li>
                <a
                  href="/#contact"
                  className="inline-block rounded-lg bg-[#F7B733] px-6 py-2 text-base font-medium text-white hover:bg-opacity-90"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
