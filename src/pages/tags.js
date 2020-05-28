import React from 'react'
import { Link, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { Layout, PostCard } from '../components/common'
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
                {
                    group.map(function(nodes){
                        return nodes.nodes.map(tag => (
                            <li>{tag.name}</li>
                                )
                            )
                        }
                    )
                }
            </ul>
        </div>
    </Layout>
)

TagsPage.propTypes = {
    data: PropTypes.shape({
        allGhostTag: PropTypes.shape({
            group: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.shape.isRequired
                }).isRequired
            )
        })
    })
}

export default TagsPage

// export const pageQuery = graphql`
//     query {
//         allGhostTag(limit: 2000, sort: {order: DESC}) {
//             group(field: name) {
//                 nodes {
//                     slug
//                     name
//                     count {
//                         posts
//                     }
//                 }
//             }
//         }
//     }
// `

export const pageQuery = graphql`
    query{
        allGhostTag(sort:{ order: DESC, fields: postCount }){
            group(field: name) {
                nodes {
                    name
                    slug
                    postCount
                }
            }
        }
    }
`