import React from 'react'
import { Link } from 'react-router-dom'

const BrandLogo = ({ className = '', onClick }) => {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="Socio home"
      className={`inline-block transition-transform hover:scale-[1.02] active:scale-[0.98] ${className}`}
    >
      <span className="inline-flex items-baseline gap-0.5 select-none leading-none">
        <span className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-600 bg-clip-text text-transparent drop-shadow-sm">
          so
        </span>
        <span className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent drop-shadow-sm">
          cio
        </span>
      </span>
    </Link>
  )
}

export default BrandLogo
