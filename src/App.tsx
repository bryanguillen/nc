import React, { useEffect, useState } from 'react'
import ScrollIntoView from 'react-scroll-into-view'

import './App.css'

import logo from './assets/logo.png'

// Welcome images
import welcome1 from './assets/nfts/constants-shirts-hair/2.png'
import welcome2 from './assets/nfts/constants-shirts-hair/8.png'
import welcome3 from './assets/nfts/constants-hair-tattoo/1.png'
import welcome4 from './assets/nfts/constants-hair-tattoo/3.png'

// Project specs images
import projectSpecNft from './assets/nfts/constants-shirts-hair/24.png'

// Community benefit images
import communityBenefitsNft from './assets/nfts/constants/3.png'

// About project images
import aboutProjectNft from './assets/nfts/constants/8.png'

// About team images
import aboutTeamNft from './assets/nfts/constants-hair/1.png'

const WELCOME = "welcome"
const ACQUIRE = "acquire"
const SPECS = "specs"
const COMMUNITY = "community"
const ROADMAP = "roadmap"
const TEAM = "team"

interface ButtonProps {
  text: string
  variant?: 'primary' | 'primary-variant'
}

function Button({
  text,
  variant = 'primary'
}: ButtonProps) {
  return (
    <button className={`app-button ${variant}`}>{text}</button>
  )
}

function Welcome() {
  return (
    <TwoColumnSection id={WELCOME} title="Natty Clowns NFT">
      <div className="welcome-text-container">
        <p>Meet Larry (first image) and Joe (who's in the rest of the images).  They were both frail and miserable.  Now, they're jacked and the stars of this NFT collection, which consists of 1,111 NFTs.</p>
        <p>Are you into lifting weights and NFTs?  If so, you've arrived at the right place, my friend.  Keep scrolling down for more.</p>
      </div>
      <div className="welcome-gallery">
        <img className="welcome-gallery-image" src={welcome3}/>
        <img className="welcome-gallery-image" src={welcome4}/>
        <div className="welcome-gallery-image-break"></div>
        <img className="welcome-gallery-image" src={welcome1}/>
        <img className="welcome-gallery-image" src={welcome2}/>
      </div>
    </TwoColumnSection>
  )
}

function Countdown() {
  const [time, setTime] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(previousState => previousState + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <TwoColumnSection id={ACQUIRE} title={'NFT Drop'}>
      <div className="countdown-timer">
        <p className="countdown-timer-text">{time}</p>
        <Button text="Mint"/>
      </div>
      <div className="countdown-description">
        <p>We currently have a rough timeline for when we will be doing the initial drop.  Stay tuned, it'll be announced very soon.</p>
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
        <p>As you'll see below, to access the benefits of owning a swole clown, you will need be signed into your Metamask wallet.</p>
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
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum..........</p>
        <ol>
          <li>Step 1: Some random step</li>
          <li>Step 2: Some random step</li>
          <li>Step 3: Some random step</li>
        </ol>
      </div>
      <div>
        <div className="section-image"></div>
      </div>
    </TwoColumnSection>
  )
}

function CommunityBenefits() {
  return (
    <TwoColumnSection id={COMMUNITY} title={'Community Benefits'}>
      <div>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum..........</p>
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
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum..........</p>
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
      <div className="cta-banner-text">Want to stay up to date on Natty Clowns NFTs?</div>
      <div className="cta-banner-button">
        <Button text="Follow Us On Twitter" variant="primary-variant"/>
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
    </div>
  )
}

export default App;
