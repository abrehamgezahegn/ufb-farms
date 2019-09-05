import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

const SEO = () => {

  const data = useStaticQuery(graphql`
      query SEO {
          site {
            siteMetadata {
              defaultTitle: title
              titleTemplate
              defaultDescription: description
              siteUrl: url
              defaultImage: image
            }
          }
  }
  `)



  const { defaultTitle, titleTemplate , defaultDescription ,siteUrl , defaultImage} = data.site.siteMetadata;

  const seo = {
        title:  defaultTitle,
        description:  defaultDescription,
        image: `${siteUrl}${ defaultImage}`,
        url: `${siteUrl}${"/"}`,
        titleTemplate: titleTemplate
      }
  return (
       <Helmet title={seo.title} titleTemplate={seo.titleTemplate}>
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
  )
}

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  article: PropTypes.bool,
}

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
  article: false,
}