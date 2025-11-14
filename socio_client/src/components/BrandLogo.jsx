import React from 'react'
import { Link } from 'react-router-dom'

const BrandLogo = ({ className = '', onClick }) => {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Socio home"
      className={`inline-block transition-transform hover:scale-[1.01] active:scale-[0.99] ${className}`}
    >
      <span className="text-3xl md:text-4xl font-extrabold tracking-tight font-brand leading-none select-none bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-indigo-100 to-rose-200 drop-shadow">
        socio
      </span>
    </Link>
  )
}

export default BrandLogo
