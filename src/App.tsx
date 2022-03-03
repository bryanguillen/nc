import React, { useEffect, useState } from 'react'
import ScrollIntoView from 'react-scroll-into-view'

import './App.css'

import logo from './assets/logo.png'

const WELCOME = "welcome"
const ACQUIRE = "acquire"
const SPECS = "specs"
const COMMUNITY = "community"
const ROADMAP = "roadmap"
const TEAM = "team"

function Welcome() {
  return (
    <TwoColumnSection id={WELCOME} title="Lorem Ipsum">
      <div className="welcome-text-container">
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .........</p>
      </div>
      <div className="welcome-gallery">
        <div className="welcome-gallery-image"></div>
        <div className="welcome-gallery-image"></div>
        <div className="welcome-gallery-image-break"></div>
        <div className="welcome-gallery-image"></div>
        <div className="welcome-gallery-image"></div>
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
    <TwoColumnSection id={ACQUIRE} title={'NFT Drop Countdown'}>
      <div className="countdown-timer">
        <p>{time}</p>
        <button>Mint</button>
      </div>
      <div className="countdown-description">
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum .........</p>
      </div>
    </TwoColumnSection>
  )
}

function ProjectSpecs() {
  return (
    <TwoColumnSection id={SPECS} title={'Project Specs'}>
      <div>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum..........</p>
      </div>
      <div>
        <div className="project-specs-image"></div>
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
        <div className="project-specs-image"></div>
      </div>
    </TwoColumnSection>
  )
}

function CommunityBenefits() {
  return (
    <TwoColumnSection id={COMMUNITY} title={'Community Benefits'}>
      <div>
        <div className="project-specs-image"></div>
      </div>
      <div>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum..........</p>
      </div>
    </TwoColumnSection>
  )
}

function AboutProject() {
  return (
    <TwoColumnSection id={'about'} title={'Why This NFT Project?'}>
      <div>
        <div className="project-specs-image"></div>
      </div>
      <div>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum..........</p>
      </div>
    </TwoColumnSection>
  )
}

function AboutTeam() {
  return (
    <TwoColumnSection id={TEAM} title={'About Team'}>
      <div>
        <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum..........</p>
      </div>
      <div>
        <div className="project-specs-image"></div>
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

function App() {
  return (
    <div className="app">
      <Navigation/>
      <Welcome/>
      <Countdown/>
      <ProjectSpecs/>
      <CommunityBenefits/>
      <ProjectRoadmap/>
      <AboutProject/>
      <AboutTeam/>
    </div>
  )
}

export default App;
