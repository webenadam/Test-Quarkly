import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, LinkBox, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { GiFairyWings } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				אתר נסיון
			</title>
			<meta name={"description"} content={"מנסה לבנות אתר בריאקט ולבדוק השפעות מהירות וקידום אורגני."} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-2">
			<Override
				slot="SectionContent"
				flex-direction="column"
				justify-content="space-between"
				align-items="center"
				lg-flex-direction="row"
			/>
			<Box
				display="flex"
				padding="12px 0 18px 0"
				justify-content="center"
				align-items="flex-start"
				flex-direction="row"
				width="100%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
				lg-justify-content="flex-start"
			>
				<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="18px">
					<Icon category="gi" icon={GiFairyWings} color="#6d32ec" size="37px" />
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--headline3"
						sm-margin="0px 0 0px 0"
						display="block"
					>
						נסיון נחמד
					</Text>
				</LinkBox>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="100%"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
				justify-content="center"
				lg-justify-content="flex-end"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="fi"
					icon={FiMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
				/>
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-start"
					justify-content="center"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
					>
						<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="18px">
							<Icon category="gi" icon={GiFairyWings} color="#6d32ec" size="37px" />
							<Text
								margin="0"
								md-margin="0px 0 0px 0"
								text-align="left"
								font="--headline3"
								sm-margin="0px 0 0px 0"
								display="block"
							>
								Awesome Company
							</Text>
						</LinkBox>
					</Box>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="8px"
						lg-flex-direction="column"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="--lead"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override slot="item-active" border-width={0} />
						<Override slot="item" padding="6px 8px 6px 8px" />
						<Override slot="link-active" cursor="default" color="--primary" />
						<Override slot="link-about" />
					</Components.QuarklycommunityKitMenu>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="0px 0px 0px 0px"
					>
						<Link
							font="--lead"
							padding="10px 0px 10px 0px"
							margin="0px 0px 6px 0px"
							href="tel:12345678"
							text-decoration-line="initial"
							color="--dark"
							lg-margin="0px 0px 24px 0px"
						>
							+1(234)567-89-00
						</Link>
						<SocialMedia
							instagram="https://instagram.com/instagram"
							margin="0px 0px 0px 0px"
							facebook="https://www.facebook.com/quarklyapp/"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							lg-display="flex"
							lg-grid-gap="12px"
						>
							<Override slot="link-twitter" margin="0px 0px 0px 5px">
								<div />
							</Override>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								hover-color="--light"
								display="flex"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
							/>
							<Override slot="icon" size="32px" border-radius="50px" color="--darkL2" />
							<Override slot="link-facebook" margin="0px 5px 0px 0px">
								<div />
							</Override>
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="112px 0 0px 0" background="--color-primary" md-padding="96px 0 0px 0" sm-padding="72px 0 0px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--light"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					This Week's Top Stories About App
				</Text>
				<Text
					margin="0px 0px 40px 0px"
					color="#FFFFFF"
					font="--lead"
					lg-text-align="center"
					lg-width="80%"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
				<Box
					display="flex"
					sm-flex-direction="column"
					sm-width="100%"
					sm-text-align="center"
					justify-content="flex-start"
					align-items="center"
					margin="0px 0px 26px 0px"
				>
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--dark"
						background="--color-secondary"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						transition="background-color 0.2s ease-in-out 0s"
						hover-background="--color-orange"
						sm-margin="0px 0px 16px 0px"
						sm-text-align="center"
						sm-width="100%"
						hover-transition="background-color 0.2s ease-in-out 0s"
					>
						Get Started
					</Link>
					<Link
						href="#"
						padding="10px 24px 10px 24px"
						color="--secondary"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						border-width="2px"
						border-style="solid"
						border-color="--color-secondary"
						sm-margin="0px 0px 0px 0px"
						sm-text-align="center"
						lg-margin="0px 0px 0px 0px"
						sm-width="100%"
						hover-border-color="--color-orange"
						hover-color="--orange"
						hover-transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
						transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
					>
						Check our video
					</Link>
					<Link
						href="#"
						padding="10px 24px 10px 24px"
						color="--secondary"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						border-width="2px"
						border-style="solid"
						border-color="--color-secondary"
						sm-margin="0px 0px 0px 0px"
						sm-text-align="center"
						lg-margin="0px 0px 0px 0px"
						sm-width="100%"
						hover-border-color="--color-orange"
						hover-color="--orange"
						hover-transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
						transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
					>
						Check our video
					</Link>
				</Box>
				<Text
					margin="0px 0px 40px 0px"
					color="#FFFFFF"
					font="--lead"
					lg-text-align="center"
					lg-width="80%"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="center"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
			>
				<Image
					src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone.png?v=2021-08-25T23:23:42.448Z"
					width="555px"
					max-width="100%"
					transform="translateY(10px)"
					transition="transform 0.5s ease-in-out 0s"
					hover-transform="translateY(0px)"
					sm-width="100%"
					background="red"
					srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone.png?v=2021-08-25T23%3A23%3A42.448Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone.png?v=2021-08-25T23%3A23%3A42.448Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone.png?v=2021-08-25T23%3A23%3A42.448Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone.png?v=2021-08-25T23%3A23%3A42.448Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone.png?v=2021-08-25T23%3A23%3A42.448Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone.png?v=2021-08-25T23%3A23%3A42.448Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/phone.png?v=2021-08-25T23%3A23%3A42.448Z&quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"658bc6e68d4a0c002028ad91"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});