import React, { useEffect, useState } from 'react'
import './App.css'

function Welcome() {
  return (
    <TwoColumnSection title="Lorem Ipsum">
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
    <TwoColumnSection title={'NFT Drop Countdown'}>
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
    <TwoColumnSection title={'Project Specs'}>
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
    <TwoColumnSection title={'Project Roadmap'}>
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
    <TwoColumnSection title={'Community Benefits'}>
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
    <TwoColumnSection title={'Why This NFT Project?'}>
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
    <TwoColumnSection title={'About Team'}>
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
  title: string
}

function TwoColumnSection({
  children,
  title,
}: OwnProps) {
  return (
    <section className="two-column-section">
      <h2 className="two-column-section-header">{title}</h2>
      <div className="two-column-section-body">
        {children}
      </div>
    </section>
  )
}

function App() {
  return (
    <div className="app">
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
