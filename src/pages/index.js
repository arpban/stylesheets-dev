import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

import "./index.scss"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ThemeCard from "../components/ThemeCard/ThemeCard"

const IndexPage = ({ data }) => (
	<Layout>
		<SEO title="Home" keywords={[`ghost`, `themes`, `blog`]} />
		<div className="wrapper-1000">
			{/* Intro */}
			<div
				className="introduction"
				style={{
					marginTop: "120px",
					marginBottom: "40px"
				}}
			>
				<div
					style={{
						fontSize: "32px",
						marginBottom: "10px",
					}}
				>
					Stylesheets.dev
				</div>
				<div
					style={{
						fontSize: "24px",
						opacity: "0.7",
						lineHeight: "32px",
					}}
				>
					Beautifully designed ghost themes for whatever you're building.
				</div>
			</div>

			{/* Themes */}
			<div
				className="themes"
				style={{
					display: "flex",
					flexWrap: "wrap",
					margin: "0 -30px"
				}}
			>
				<ThemeCard
					title="Shuttle"
					cover={data.shuttle.childImageSharp.fluid}
					demo=""
					purchase=""
					price="49"
				/>

				<ThemeCard
					title="Chronicles"
					cover={data.chronicles.childImageSharp.fluid}
					demo="http://chronicles.arban.co"
					purchase="https://gum.co/chronicles"
					price="29"
				/>

				<ThemeCard
					title="Mariner"
					cover={data.mariner.childImageSharp.fluid}
					demo="http://mariner.pamphlet.press"
					purchase="https://gum.co/mariner"
					price="29"
				/>

				<ThemeCard
					title="GT4"
					cover={data.gt4.childImageSharp.fluid}
					demo="http://gt4.pamphlet.press"
					purchase="https://gum.co/gt4"
					price="14"
				/>

				<ThemeCard
					title="Pamphlet"
					cover={data.pamphlet.childImageSharp.fluid}
					demo="http://demo.pamphlet.arban.co"
					purchase="https://gum.co/pamphlet"
					price="14"
				/>
			</div>

		</div>
		{/* Footer */}
		<footer className="site-footer">
			<div className="wrapper-1000">
				<div className="footer-bottom" style={{

					padding: "60px 0 35px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-end"
				}}>
					<div className="left">
						© {new Date().getFullYear()}, Created with ♥️ at <a href="https://buildesk.co" target="_blank">Buildesk</a>
					</div>

					<div className="right" style={{
						display: "flex",
						flexDirection: "column",
						textAlign: "right"
					}}>
						<small style={{
							fontWeight: "bold",
							opacity: "0.7"
						}}>Feedback & Support</small>
						<a href="mailto:support@stylesheets.dev" style={{
							fontSize: "18px"
						}}>support@stylesheets.dev</a>
					</div>

				</div>
			</div>
		</footer>
	</Layout>
)

export default IndexPage

export const query = graphql`
	query {
		shuttle: file(relativePath: { eq: "shuttle.png" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}

		chronicles: file(relativePath: { eq: "chronicles.png" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}

		mariner: file(relativePath: { eq: "mariner.png" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}

		gt4: file(relativePath: { eq: "gt4.png" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}

		pamphlet: file(relativePath: { eq: "pamphlet.png" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`
