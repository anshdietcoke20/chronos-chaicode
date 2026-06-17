'use client'

const Navbar = () => {
return(

<nav className="bg-neutral-primary fixed w-full z-10  text-white">
    
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 md:p-4">

        <div className="flex items-center space-x-2 rtl:space-x-reverse">
          
          <span className="text-lg md:text-xl text-heading font-semibold whitespace-nowrap">Chronos</span>
        </div>
 
        <ul className="hidden md:flex font-medium space-x-8">
          <li>
            <a href="/dashboard" className="py-2 px-3 text-fg-brand md:p-0" aria-current="page">Dashboard</a>
          </li>
          <li>
            <a href="/about" className="py-2 px-3 text-heading hover:text-fg-brand md:p-0 transition">About</a>
          </li>
          <li>
            <a href="/signin" className="py-2 px-3 text-heading hover:text-fg-brand md:p-0 transition">Login</a>
          </li>
          <li>
            <a href="/signup" className="py-2 px-3 text-heading hover:text-fg-brand md:p-0 transition">Signup</a>
          </li>
        </ul>
      </div>
    </nav>
)
}

export default Navbar; 