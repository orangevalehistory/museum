import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
// also available faTwitter, faInstagram, faFacebook
import { faYoutube } from "@fortawesome/free-brands-svg-icons"



export const YoutubeLinks = ({title, link, children}) => {

    return (
        <div className="inline-block pb-12 md:w-1/2 md:border-2 md:border-white md:border-solid">
        <div className="my-10 text-center">
          <h1 className="text-3xl text-white">
            {title}
          </h1>
        </div>
        <div className="text-center relative">
          <div className="">
            <a href={link}>
                {children}
              <div
                width="44px"
                height="44px"
                viewBox="0 0 408.221 408.221"
                style={{ position: "absolute", top: "39%", left: "49%" }}
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </div>
            </a>
          </div>
        </div>
      </div>
    )
}