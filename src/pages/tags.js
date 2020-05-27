import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout } from '../components/common'
const url = `/tag/`
const TagsPage = ({
    data: {
        allGhostTag: { group },
    }
}) => (
    <Layout>
        <div>
            <h1>
                Tags<br/>
            </h1>
            <ul>
                {group.map(tag => (
                    tag.nodes.map(t => <li><Link to={url + t.slug}>{t.name}</Link></li>) 
                    )
                )}
            </ul>
        </div>
    </Layout>
)

TagsPage.propTypes = {
    data: PropTypes.shape({
        group: PropTypes.arrayOf(
            PropTypes.shape({
                slug: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                count: PropTypes.number.isRequired
            }),
        ),
    })
}

export default TagsPage

export const pageQuery = graphql`
    query {
        allGhostTag(limit: 2000, sort: {order: DESC}) {
            group(field: name) {
                nodes {
                    slug
                    name
                    count {
                        posts
                    }
                }
            }
        }
    }
`