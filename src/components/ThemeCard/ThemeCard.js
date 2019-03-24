import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import "./ThemeCard.scss"

const ThemeCard = ({ title, cover, demo, purchase, price, comingSoon }) => (
	<div className="theme-card">
		<div className="card-wrapper">
			<div className="browser">
				<a href={demo} target="_blank" rel="noopener noreferrer">
					<div className="browser-title-bar">
						<div className="circle" />
						<div className="circle" />
						<div className="circle" />
					</div>
					<div className="browser-window">
						<Img fluid={cover} />
					</div>
					<div className="browser-overlay">
						<div className="overlay-wrapper">
							<div className="text">{comingSoon ? "Coming Soon" : "Preview"}</div>
						</div>
					</div>
				</a>
			</div>
			<div className="details">
				<div className="left">
					<div className="title">
						<a href={demo} target="_blank" rel="noopener noreferrer">
							{title}
						</a>
					</div>
				</div>
				<div className="right">
					<div className="price">
						{price} 
						<a hidden={comingSoon} href={purchase} target="_blank">
							{price === "FREE" ? "Download" : "Purchase"}
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
)

ThemeCard.propTypes = {
	title: PropTypes.string,
	cover: PropTypes.object,
	demo: PropTypes.string,
	purchase: PropTypes.string,
	price: PropTypes.string,
}

ThemeCard.defaultProps = {
	title: ``,
	cover: ``,
	demo: ``,
	purchase: ``,
	price: ``,
	comingSoon: false
}

export default ThemeCard
