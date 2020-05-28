import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import { Layout, TagCard } from '../components/common'
import { MetaData } from '../components/common/meta'

const Tags = ({ data }) => {
    let tags = data.allGhostTag.edges
    return (
        <div>
            <MetaData location={location} />
            <Layout>
                <div>
                    <h1>
                        Tags<br/>
                    </h1>
                    {
                        tags.map(node => {
                            return (
                                <TagCard id={node.node.slug} tag={node.node}/>
                            )
                        })
                    }
                </div>
            </Layout>
        </div>
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