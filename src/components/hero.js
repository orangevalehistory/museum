import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { BgImage } from "gbimage-bridge"

//gatsbyImageData(layout: FULL_WIDTH, quality: 50, webpOptions: { quality: 70 })
/*
          gatsbyImageData(
            width: 200
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
*/
export const Hero = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "GRAND_OPENING_ohm.png" }) {
          childImageSharp {
            gatsbyImageData(
              quality: 50
              webpOptions: { quality: 70 }
            )
          }
        }
      }
    `
  )
  const pluginImage = getImage(placeholderImage)

  //BgImage style={{ backgroundPosition: "100% 100%" }}

  return (
    <div>
      <BgImage
        image={pluginImage}
        className="hero-image text-white flex items-center justify-center"
        >
        {/* <div>
          <div
            className="text-5xl md:text-7xl 2xl:text-9xl text-center"
            style={{ lineHeight: "1.25em" }}
          >
            The Orangevale <br />
            History Project
          </div>
          <div className="text-sm md:text-lg 2xl:text-2xl text-center font-bold pt-6 pb-2">
            The official historical society of the Orangevale community
          </div>
        </div> */}
      </BgImage>
    </div>
  )
}
