import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const AuthorCard = ({ author }) => {
    const url = `/author/${author.slug}/`
    const twitterUrl = author.twitter ? `https://twitter.com/${author.twitter.replace(/^@/, ``)}` : null
    const facebookUrl = author.facebook ? `https://www.facebook.com/${author.facebook.replace(/^\//, ``)}` : null

    return (
        <Link to={url} className="post-card">
            <header className="post-card-header">
                {author.profile_image &&
                    <div className="post-card-image" style={{
                        backgroundImage: `url(${author.profile_image})` ,
                    }}></div>}
                <h2 className="post-card-title">{author.name}</h2>
            </header>
            <section className="post-card-excerpt">{author.bio}</section>
            <footer className="post-card-footer">
                <div className="post-card-footer-right">
                    <div className="author-header-meta">
                        {author.website && <a className="author-header-item" href={author.website} target="_blank" rel="noopener noreferrer">Website</a>}
                        {twitterUrl && <a className="author-header-item" href={twitterUrl} target="_blank" rel="noopener noreferrer">Twitter</a>}
                        {facebookUrl && <a className="author-header-item" href={facebookUrl} target="_blank" rel="noopener noreferrer">Facebook</a>}
                    </div>
                </div>
            </footer>
        </Link>
    )
}

AuthorCard.propTypes = {
    author: PropTypes.shape({
        slug: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        profile_image: PropTypes.string,
        bio: PropTypes.string,
        website: PropTypes.number.isRequired,
        twitter: PropTypes.string,
        facebook: PropTypes.string,
        website: PropTypes.string
    }).isRequired,
}

export default AuthorCard
