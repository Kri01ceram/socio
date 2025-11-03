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
  <span className="text-3xl md:text-4xl font-extrabold tracking-tight font-brand text-default select-none leading-none">
        socio
      </span>
    </Link>
  )
}

export default BrandLogo
