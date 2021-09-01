import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
    return(
        <Layout pageTitle="Home Page">
            <p>I'm making this by following the Gatsby Tutorial.</p>
            <StaticImage
                alt="Clifford, a reddish-brown pitbull, posing on the couch"
                src="../src/images/daily-morning-awesomeness-40-photos-108-33-12.jpg"
            />
        </Layout>
    )
}

export default IndexPage