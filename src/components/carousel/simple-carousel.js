//https://react-slick.neostack.com/docs/get-started
//be aware slick-carousel has a peer-dependancy on jQuery. You can always grab the CSS from there and convert it into any CSS in JS solution that you might be using.
import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';
import Slider from 'react-slick';
import '../../styles/carousel.css';

export const SimpleSlider = () => {
    const queryResult = useStaticQuery(
        graphql`
            query {
                markdownRemark(
                    frontmatter: { component: { eq: "carousel_images" } }
                ) {
                    frontmatter {
                        component
                        images {
                            gallery {
                                image {
                                    childImageSharp {
                                        gatsbyImageData
                                    }
                                    name
                                }
                                alt
                                link
                            }
                        }
                    }
                }
            }
        `
    );
    const frontmatter = queryResult.markdownRemark.frontmatter;
    const gallery = frontmatter.images.gallery;

    const settings = {
        adaptiveHeight: 'true',
        centerMode: 'true',
        centerPadding: 0,
        dots: true,
        infinite: true,
        initialSlide: 0,
        speed: 500,
        autoplaySpeed: 5000,
        slidesToScroll: 1,
        autoplay: true,
        cssEase: 'linear',
        pauseOnFocus: 'true'
    };


    let slidesToShow = 2
    if (typeof window !== "undefined") {
        slidesToShow = (window.innerWidth < 992) ? 1 : 2
    }
    settings.slidesToShow = slidesToShow
    
    return (
        <div className='py-0 px-2 my-1 md:p-12 bg-gray-900'>
            <Slider {...settings}>
                {gallery.map((elem) => (
                    <div key={elem.image.name} className="testimonials__item">
                        <div className="testimonials__item-inner">
                            <div className="">
                                <a href={elem.link}>
                                    <GatsbyImage
                                        className="w-full"
                                        image={getImage(elem.image)}
                                        alt={elem.alt}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};
