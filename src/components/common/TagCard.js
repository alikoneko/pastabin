import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const TagCard = ({ tag }) => {
    const url = `/tag/${tag.slug}/`

    return (
        <Link to={url} className="post-card">
            <header className="post-card-header">
                {tag.feature_image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${tag.feature_image})` ,
                    }}></div>}
                <h2 className="post-card-title">{tag.name}</h2>
            </header>
            <section className="post-card-excerpt">{tag.description}</section>
            <footer className="post-card-footer">
                <div className="post-card-footer-left">
                    <div> # tagged: {tag.postCount}</div>
                </div>
            </footer>
        </Link>
    )
}

TagCard.propTypes = {
    tag: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        description: PropTypes.string,
        postCount: PropTypes.number.isRequired
    }).isRequired,
}

export default TagCard
