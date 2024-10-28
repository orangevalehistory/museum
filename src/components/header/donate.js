import React from "react"
import { Link } from "gatsby"

export const Donate = () => {
  return (
    <Link
      className="block md:flex md:m-4"
      to="/donate"
    >
      <div
        className="font-sans font-light self-center md:border-2 md:border-orange-500 md:border-solid md:p-2 text-orange-500 text-center"
      >
        Donate
      </div>
    </Link>
  )
}