import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import {Contact} from '../components/contact/contact'


const ContactPage = () => {
    return (
        <Layout>
          <Seo title="Contact us" />
            <Contact />
        </Layout>
    )
}
export default ContactPage
