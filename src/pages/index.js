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
		<SEO title="Home" keywords={[`ghost`, `theme`, `themes`, `blog`, `blogging`, `ghost theme`, `web design`]} />
		<div className="wrapper-1000">
			{/* Intro */}
			<div
				className="introduction"
				style={{
					marginTop: "40px",
					marginBottom: "40px"
				}}
			>
				<div
					style={{
						fontSize: "32px",
						marginBottom: "5px",
					}}
				>
					Stylesheets.dev
				</div>
				<div
					style={{
						fontSize: "24px",
						color: "#666",
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
					margin: "0 -20px"
				}}
			>
				<ThemeCard
					title="Elementary"
					cover={data.elementary.childImageSharp.fluid}
					demo="https://elementary.stylesheets.dev"
					purchase="https://gum.co/elementary-ghost-theme"
					price="$ 24"
				/>
				
				<ThemeCard
					title="Sublime"
					cover={data.sublime.childImageSharp.fluid}
					demo="https://sublime.stylesheets.dev"
					purchase="https://gum.co/sublime"
					price="$ 29"
				/>

				<ThemeCard
					title="Paperback"
					cover={data.paperback.childImageSharp.fluid}
					demo="https://paperback.stylesheets.dev"
					purchase="https://gum.co/paperback-theme"
					price="$ 29"
				/>

				<ThemeCard
					title="Shuttle"
					cover={data.shuttle.childImageSharp.fluid}
					demo="http://shuttle.stylesheets.dev"
					purchase="https://gum.co/shuttle-theme"
					price="$ 49"
				/>

				<ThemeCard
					title="Lotus"
					cover={data.lotus.childImageSharp.fluid}
					demo="https://lotus.stylesheets.dev"
					purchase="https://gum.co/lotus-theme"
					price="FREE"
				/>

				<ThemeCard
					title="Chronicles"
					cover={data.chronicles.childImageSharp.fluid}
					demo="http://chronicles.arban.co"
					purchase="https://gum.co/chronicles"
					price="$ 29"
				/>

				<ThemeCard
					title="Pamphlet"
					cover={data.pamphlet.childImageSharp.fluid}
					demo="http://demo.pamphlet.arban.co"
					purchase="https://gum.co/pamphlet"
					price="$ 24"
				/>

				<ThemeCard
					title="Mariner"
					cover={data.mariner.childImageSharp.fluid}
					demo="http://mariner.pamphlet.press"
					purchase="https://gum.co/mariner"
					price="$ 29"
				/>

				<ThemeCard
					title="GT4"
					cover={data.gt4.childImageSharp.fluid}
					demo="http://gt4.pamphlet.press"
					purchase="https://gum.co/gt4"
					price="FREE"
				/>
			</div>

		</div>
		{/* Footer */}
		<footer className="site-footer">
			<div className="wrapper-1000">
				<div className="footer-bottom" style={{

					padding: "0 0 35px",
					display: "flex",
					justifyContent: "space-between",
					alignItems: "flex-end"
				}}>
					<div className="left" style={{
						color: "#666",
						fontSize: "16px"
					}}>
						© {new Date().getFullYear()}, <a href="https://buildesk.co" target="_blank">Buildesk</a>
					</div>

					<div className="right" style={{
						display: "flex",
						flexDirection: "column",
						textAlign: "right"
					}}>
						<small style={{
							fontWeight: "bold",
							color: "#666"
						}}>Feedback & Support</small>
						<a href="mailto:support@buildesk.co" style={{
							fontSize: "16px"
						}}>support@buildesk.co</a>
					</div>

				</div>
			</div>
		</footer>
	</Layout>
)

export default IndexPage

export const query = graphql`
	query {
		elementary: file(relativePath: { eq: "elementary.png" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}

		sublime: file(relativePath: { eq: "sublime.png" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}

		paperback: file(relativePath: { eq: "paperback2.png" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}

		shuttle: file(relativePath: { eq: "shuttle_2.png" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}

		lotus: file(relativePath: { eq: "lotus.png" }) {
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
