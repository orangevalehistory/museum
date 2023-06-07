import React from "react"

export const Donate = () => {
  return (
      <a
        className="block md:flex md:m-4"
        href="https://www.paypal.com/donate/?hosted_button_id=7BBVDWWJVASPU"
        target="_blank"
        rel="noreferrer noopener"
        aria-disabled="false"
      >
        <div
          className="font-sans font-light self-center md:border-2 md:border-orange-500 md:border-solid md:p-2 text-orange-500 text-center"
        >
          Donate
        </div>
      </a>
  )
}
