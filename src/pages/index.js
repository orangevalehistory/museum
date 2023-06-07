import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Hero } from "../components/hero"
import { YoutubeLinks } from "../components/youtube-links"
import "../styles/global.css"
import {SimpleSlider} from "../components/carousel/simple-carousel"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div id="home-page">
        <Hero />
        <SimpleSlider />
        <div className="md:flex text-white bg-gray-900 relative inline-block justify-center items-center ">
          <div className="md:w-1/2 mt-8 p-4">
            <StaticImage
              src="../images/GRAND_OPENING_ohm.png"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </div>

          <div className="md:w-1/2">
            <div style={{ margin: "15% 20% 15% 20%" }}>
              <div className="items-center flex">
                <h1 className="text-4xl">
                  About the <br />
                  Orangevale History Museum
                </h1>
              </div>

              <p className="text-left text-lg font-bold py-8 px-2">
                We are a group of community volunteers who desire to document
                and preserve Orangevale's stories. We meet monthly and hope to
                continue to capture the people and history that make our
                community unique. 
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-gray-900 w-full text-center text-white">
        <div
          style={{ width: "80%" }}
          className="md:m-16 pb-16 inline-block align-middle"
        >
          <YoutubeLinks
            title="Interviews of long time residents"
            link="https://www.youtube.com/playlist?list=PL5aD6MSZI_C7s5QrNj3JXNmzN6XLb6pp-"
          >
            <StaticImage
              src="../images/long-time-residents.jpg"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Link to Interviews of long time residents on Youtube"
              height={180}
            />
          </YoutubeLinks>

          <YoutubeLinks
            title="OHP Monthly Sessions"
            link="https://www.youtube.com/playlist?list=PL5aD6MSZI_C6sgKQ7Y1zyYKDrSjQcIOtL"
          >
            <StaticImage
              src="../images/session.png"
              loading="eager"
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt="Link to OHP Monthly Sessions on Youtube"
              height={180}
            />
          </YoutubeLinks>
        </div> 
      </div>*/}
    </Layout>
  )
}

export default IndexPage
