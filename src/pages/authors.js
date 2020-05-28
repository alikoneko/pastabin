import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Layout, AuthorCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

const Authors = ({ data, location, pageContext }) => {
    let authors = data.allGhostAuthor.edges
    return (
        <>
        <MetaData location={location} />
        <Layout>
            <div className="container">
                <section className="post-feed">
                    {
                        authors.map(({ node }) => (
                            // The tag below includes the markup for each post - components/common/PostCard.js
                            <AuthorCard key={node.id} author={node} />
                            )
                        )
                    }
                </section>
                <Pagination pageContext={pageContext} />
            </div>
        </Layout>
    </>
    )
}

Authors.propTypes = {
    data: PropTypes.shape({
        allGhostAuthor: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    pageContext: PropTypes.object
}

export default Authors

export const pageQuery = graphql`
    query{
        allGhostAuthor(sort:{ order: DESC, fields: postCount }){
            edges{
                node {
                    ...GhostAuthorFields
                }
            }
        }
    }
`