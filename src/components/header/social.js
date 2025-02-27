import React from "react"
import { Link } from 'gatsby';
import { FaYoutube } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaCalendarAlt } from "react-icons/fa"


export const Social = () => {
  return (
    <div className="inline-block m-0 mt-2 md:flex">
      <div className="inline md:block">
        <a
          className="md:my-3 mx-3 inline-block"
          href="https://www.youtube.com/channel/UCweueUCQIa05jrevbAZSu4w"
          target="_blank"
          rel="noreferrer"
        >
          <FaYoutube size="30px" />
        </a>
      </div>
      <div className="inline md:block">
        <a
          className="md:my-3 mx-3 inline-block"
          href="https://www.facebook.com/profile.php?id=61573316514318"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook size="30px" />
        </a>
      </div>
      <div className="inline md:block">
        <a
          className="md:my-3 mx-3 inline-block"
          href="https://www.instagram.com/ovhistoryproject/"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size="30px" />
        </a>
      </div>
      <div className="inline md:block">
        <Link
          className="md:my-3 mx-3 inline-block"
          to="/events/"
          target="_blank"
          rel="noreferrer"
        >
          <FaCalendarAlt size="30px" />
        </Link>
      </div>        
    </div>
  )
}
