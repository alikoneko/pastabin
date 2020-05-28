import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Layout, TagCard, Pagination } from '../components/common'
import { MetaData } from '../components/common/meta'

const Tags = ({ data, location, pageContext }) => {
    let tags = data.allGhostTag.edges
    return (
        <>
        <MetaData location={location} />
        <Layout isHome={true}>
            <div className="container">
                <section className="post-feed">
                    {tags.map(({ node }) => (
                        // The tag below includes the markup for each post - components/common/PostCard.js
                        <TagCard key={node.id} tag={node} />
                    ))}
                </section>
                <Pagination pageContext={pageContext} />
            </div>
        </Layout>
    </>
    )
}

Tags.propTypes = {
    data: PropTypes.shape({
        allGhostTag: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired,
    pageContext: PropTypes.object
}

export default Tags

export const pageQuery = graphql`
    query{
        allGhostTag(sort:{ order: DESC, fields: postCount }){
            edges{
                node {
                    ...GhostTagFields
                }
            }
        }
    }
`