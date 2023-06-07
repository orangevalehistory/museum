module.exports = {
    siteMetadata: {
        title: `The Orangevale History Museum`,
        description: `The official site for the museum of the Orangevale History Project`,
        author: `@witcraft.io`,
        siteUrl: `https://orangevalehistorymuseum.org/`
    },
    plugins: [
        `gatsby-plugin-postcss`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`
            }
        },
        {
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages/partners`,
				name: `partner-markdown`
			}
		},
        {
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/content`,
				name: `carousel-markdown`
			}
		},        
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [`gatsby-remark-responsive-iframe`]
            }
        },
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `the-orangevale-history-project`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#000000`,
                // This will impact how browsers show your PWA/website
                // https://css-tricks.com/meta-theme-color-and-trickery/
                // theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/pixil-frame-0.png` // This path is relative to the root of the site.
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [`Playfair Display`, `serif`],
                display: 'swap'
            }
        },
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};
