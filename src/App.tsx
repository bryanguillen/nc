import React, { useState } from 'react'
import ScrollIntoView from 'react-scroll-into-view'

import './App.css'

import logo from './assets/logo.png'

// Welcome images
import welcome1 from './assets/nfts/constants-shirts-hair/2.png'
import welcome2 from './assets/nfts/constants-shirts-hair/8.png'
import welcome3 from './assets/nfts/constants-hair-tattoo/1.png'
import welcome4 from './assets/nfts/constants-hair-tattoo/3.png'

// About team images
import projectSpecNft from './assets/nfts/constants-hair/1.png'

// Community benefit images
import communityBenefitsNft from './assets/nfts/constants/3.png'

// Roadmap
import roadMapImage from './assets/roadmap.svg'

// About project images
import aboutProjectNft from './assets/nfts/constants/8.png'

// Project specs images
import aboutTeamNft from './assets/nfts/constants-shirts-hair/24.png'

const WELCOME = "welcome"
const ACQUIRE = "acquire"
const SPECS = "specs"
const COMMUNITY = "community"
const ROADMAP = "roadmap"
const TEAM = "team"

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  text: string
  variant?: 'primary' | 'primary-variant'
}

function Button({
  text,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <button {...rest} className={`app-button ${variant}`}>{text}</button>
  )
}

function Welcome() {
  return (
    <TwoColumnSection id={WELCOME} title="Natty Clowns NFT">
      <div className="welcome-text-container">
        <p>Are you into lifting weights and NFTs?  If so, you've arrived at the right place, my friend.</p>
        <p>Meet Larry (first image) and Joe (who's in the rest of the images).  They were both frail and miserable.  Now, they're jacked and the stars of this new NFT collection, which consists of 1,111 NFTs.</p>
        <p>Scroll down for more info.</p>
      </div>
      <div className="welcome-gallery">
        <img className="welcome-gallery-image" src={welcome3} alt="Natty clown nft"/>
        <img className="welcome-gallery-image" src={welcome4} alt="Natty clown nft"/>
        <div className="welcome-gallery-image-break"></div>
        <img className="welcome-gallery-image" src={welcome1} alt="Natty clown nft"/>
        <img className="welcome-gallery-image" src={welcome2} alt="Natty clown nft"/>
      </div>
    </TwoColumnSection>
  )
}

function ComingSoon() {
  return (
    <div className="coming-soon-container">
      <div>Coming Soon...</div>
    </div>
  )
}

function Countdown() {
  // const [time, setTime] = useState(0)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTime(previousState => previousState + 1)
  //   }, 1000)

  //   return () => clearInterval(interval)
  // }, [])

  return (
    <TwoColumnSection id={ACQUIRE} title={'NFT Drop'}>
      {/* <div className="countdown-timer">
        <p className="countdown-timer-text">{time}</p>
        <Button text="Mint"/>
      </div> */}
      <ComingSoon/>
      <div>
        <p>Currently, we are aiming to do an initial drop on Thursday, April 7th, 2022.</p>
        <p>This drop will be for the early adopters.  As a token of appreciation, it'll be an opportunity to <strong>mint an NFT for FREE</strong>.  #freemint :)</p>
        <p>Why would you even bother minting one of our NFTs?  Checkout the next few sections, especially the roadmap section, to see if this project is a fit for your portfolio.</p>
      </div>
    </TwoColumnSection>
  )
}

function ProjectSpecs() {
  return (
    <TwoColumnSection id={SPECS} title={'Project Specs'}>
      <div>
        <p>This project will consist of 1,111 NFTs.</p>
        <p>Larry and Joe's images will be programmatically generated from a set of traits.  These traits include different faces, hair styles (or lack thereof), shirts, and tattoos.</p>
        <p>These assets will be stored as ERC-721 tokens on the Ethereum blockchain, and of course, hosted on IPFS.</p>
        <p>As you'll see below, to access the benefits of owning a swole clown, you will need to be signed into your Metamask wallet.</p>
      </div>
      <div>
        <img src={projectSpecNft} alt="nft - sad clown in suit" className="section-image"/>
      </div>
    </TwoColumnSection>
  )
}

function ProjectRoadmap() {
  return (
    <TwoColumnSection id={ROADMAP} title={'Project Roadmap'}>
      <div>
        <img src={roadMapImage} className="roadmap-image" alt="roadmpa illustration"/>
      </div>
      <div>
        <p>Here's where we currently stand with our roadmap, which will definitely evolve as we grow.</p>
        <ol className="roadmap-list">
          <li>Phase 1 - Build Initial Community: Here is where we will have periodic drops in an attempt to build our community.  This is where we will attract what matters most, the people.</li>
          <li>Phase 2 - Open & Experiment With Communication Channels: This is where we will begin to leverage (and maybe build) tools to communicate.  We want to provide more than just a Discord server.</li>
          <li>Phase 3 - Attract High Profile Folks: In this phase, we want to attract some folks you may or may not know.  The goal with this is to have people, who have large followings, join.  The reason is: We of course want to put Natty NFTs on the map.</li>
          <li>Phase 4 & Beyond: This is yet to be defined.  But our rough vision is that we want to accumulate exclusive knowledge, knowledge and connections that benefit you.  :)</li>
        </ol>
        <p>Note: The timeline for each will be announced as we go.</p>
      </div>
    </TwoColumnSection>
  )
}

function CommunityBenefits() {
  return (
    <TwoColumnSection id={COMMUNITY} title={'Community Benefits'}>
      <div>
        <p>We are not going to sit here and pretend that we have it all figured out.</p>
        <p>Here is what we do know though: We will build a community of like minded and ambitious people.</p>
        <p>Our Why: <strong>We want you to make at least one real connection, with a fellow member, that will impact your life in a positive way</strong>.</p>
        <p>What does this one connection look like?  Well, it's someone who shares the same values as you.  We believe that a large part of your net worth, in life, is your network.</p>
        <p>Lastly, how will we communicate?  This, we can define along the way.  It could be a Discord server and more.</p>
        <p>So, if you're into lifting weights and crypto, come and join.</p>
      </div>
      <div>
        <img src={communityBenefitsNft} alt="angry and shirtless clown" className="section-image"/>
      </div>
    </TwoColumnSection>
  )
}

function AboutProject() {
  return (
    <TwoColumnSection id={'about'} title={'Why This NFT Project?'}>
      <div>
        <p>Two reasons: <strong>The art</strong> and <strong>the community</strong>.</p>
        <p>We love the NFT space, but honestly, we feel like it could use more than just apes (even though we love apes and everything else).  So with that in mind, <strong>what's the harm in creating art that weight lifters resonate with.</strong>  Art for the sake of art.</p>
        <p>Second, as mentioned above, other than art for the sake of art, we want to get like minded and ambitious people together.  We feel that those who have the right connections get <strong>many advantages</strong> in life.  We want that for ourselves, and <strong>we want it for you</strong>.</p>
      </div>
      <div>
        <img src={aboutProjectNft} alt="happy and shirtless clown" className="section-image"/>
      </div>
    </TwoColumnSection>
  )
}

function AboutTeam() {
  return (
    <TwoColumnSection id={TEAM} title={'About Team'}>
      <div>
        <p>Our team is small, very small.</p>
        <p>It's currently made up of 2 people, a software engineer (Bryan) and an artist (Yudisstiann).</p>
        <p>We are very excited to have the opportunity to bring this art into fruition.  More importantly though, we are excited about the community that will be built around it.</p>
        <p>We look forward to getting to know those of you who support our work.</p>
      </div>
      <div>
        <img src={aboutTeamNft} alt="angry clown and shirtless" className="section-image"/>
      </div>
    </TwoColumnSection>
  )
}

interface OwnProps {
  children: React.ReactNode
  id: string
  title: string
}

function TwoColumnSection({
  children,
  title,
  id,
}: OwnProps) {
  return (
    <section id={id} className="two-column-section">
      <h2 className="two-column-section-header">{title}</h2>
      <div className="two-column-section-body">
        {children}
      </div>
    </section>
  )
}

interface NavLinksProps {
  mobile?: boolean
  toggleNavVisibility?: () => void
}

interface NavLinkProps {
  id: string
  text: string
  toggleNavVisibility?: () => void
}


// used to encapsulate scroll into review and keep code dry; essentially a wrapper
function NavLink({
  id,
  text,
  toggleNavVisibility
}: NavLinkProps) {
  return (
    <ScrollIntoView selector={`#${id}`} onClick={toggleNavVisibility ? toggleNavVisibility : undefined}>
      <div className="nav-link">{text}</div>
    </ScrollIntoView>
  )
}

function NavLinks({
  mobile = false,
  toggleNavVisibility
}: NavLinksProps) {
  return (
    <div className={`nav-links ${mobile ? 'nav-links-xs' : 'nav-links-md'}`}>
      <NavLink toggleNavVisibility={toggleNavVisibility} id={WELCOME} text="Welcome"/>
      <NavLink toggleNavVisibility={toggleNavVisibility} id={ACQUIRE} text="Acquire"/>
      <NavLink toggleNavVisibility={toggleNavVisibility} id={SPECS} text="Specs"/>
      <NavLink toggleNavVisibility={toggleNavVisibility} id={COMMUNITY} text="Community"/>
      <NavLink toggleNavVisibility={toggleNavVisibility} id={ROADMAP} text="Roadmap"/>
      <NavLink toggleNavVisibility={toggleNavVisibility} id={TEAM} text="About Team"/>
    </div>
  )
}

function Navigation() {
  const [navVisible, setNavVisible] = useState(false)

  const toggleNavVisibility = () => setNavVisible(previousState => !previousState)

  const renderMobileNavLinks = () => {
    if (!navVisible) return null
    
    return (
      <NavLinks toggleNavVisibility={toggleNavVisibility} mobile/>
    )
  }

  return (
    <header className="navigation">
      <div className="logo-container">
        <img src={logo} className="navigation-logo" alt="Natty Clowns Logo"/>
      </div>
      <div className="hamburger-icon" onClick={toggleNavVisibility}>
        <div className="hamburger-icon-stripe"></div>
        <div className="hamburger-icon-stripe"></div>
        <div className="hamburger-icon-stripe"></div>
      </div>
      <NavLinks/>
      {renderMobileNavLinks()}
    </header>
  )
}

const CtaBanner = () => {
  return (
    <div className="cta-banner">
      <div className="cta-banner-text">Want to stay up to date on Natty Clowns?</div>
      <div className="cta-banner-button">
        <Button onClick={() => window.location.href='https://mobile.twitter.com/NattyClownsNFTs'} text="Follow Us On Twitter" variant="primary-variant"/>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={logo} className="navigation-logo" alt="Natty Clowns Logo"/>
      </div>
      <div>
        <p>© 2022 Natty Clowns NFT</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Welcome/>
      <Countdown/>
      <CtaBanner/>
      <ProjectSpecs/>
      <CommunityBenefits/>
      <ProjectRoadmap/>
      <AboutProject/>
      <CtaBanner/>
      <AboutTeam/>
      <Footer/>
    </div>
  )
}

export default App;
