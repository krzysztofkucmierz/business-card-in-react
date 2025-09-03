import photo_small from './assets/photo_small.jpg'
import './App.css'

function IconEnvelope() {
  return (
    <svg width="18" height="14" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M3 6.5C3 5.67 3.67 5 4.5 5h15c.83 0 1.5.67 1.5 1.5v11c0 .83-.67 1.5-1.5 1.5h-15C3.67 19 3 18.33 3 17.5v-11zM5 7.25l7 4.75 7-4.75V6.5L12 11 5 6.5v.75z" fill="currentColor" />
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.024-3.037-1.85-3.037-1.85 0-2.134 1.445-2.134 2.939v5.667H9.312V9h3.413v1.561h.049c.476-.9 1.637-1.85 3.372-1.85 3.605 0 4.272 2.373 4.272 5.459v6.282zM5.337 7.433c-.966 0-1.75-.785-1.75-1.75 0-.965.784-1.75 1.75-1.75s1.75.785 1.75 1.75c0 .965-.784 1.75-1.75 1.75zM7.119 20.452H3.556V9h3.563v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.229.792 24 1.771 24h20.451C23.208 24 24 23.229 24 22.277V1.723C24 .771 23.208 0 22.225 0z" fill="currentColor"/>
    </svg>
  )
}

function SocialBar() { 
  return (
      <div className="social-bar">
        <div className="social-icons">
          <a className="social" aria-label="X (Twitter)" href="https://x.com" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </g>
            </svg>
          </a>
          <a className="social" aria-label="Facebook" href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M22 12.07C22 6.62 17.52 2 12 2S2 6.62 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H8.2v-2.9h2.24V9.41c0-2.22 1.32-3.45 3.34-3.45.97 0 1.98.17 1.98.17v2.18h-1.12c-1.1 0-1.44.68-1.44 1.38v1.66h2.45l-.39 2.9h-2.06v7.03C18.34 21.19 22 17.06 22 12.07z" fill="currentColor"/>
            </svg>
          </a>
          <a className="social" aria-label="Instagram" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.3" fill="none"/>
              <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M17.5 6.5h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a className="social" aria-label="GitHub" href="https://github.com/krzysztofkucmierz" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M12 2C7.58 2 4 5.58 4 10c0 3.54 2.29 6.53 5.47 7.58.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52 0-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.28.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 20 10c0-4.42-3.58-8-8-8z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
  )

}

function App() {
  return (
    <div className="page">
      <div className="card">
        <img src={photo_small} className="avatar" alt="My photo" />

        <div className="card-content">
          <header className="card-header">
            <h1>Krzysztof Kućmierz</h1>
            <h2>Full Stack Developer</h2>
            <br/>
          </header>

          <div className="cta">
            <a className="btn btn-email" href="mailto:krzysztof.kucmierz@artificiuminformatica.pl" aria-label="Send email">
              <span className="btn-icon"><IconEnvelope /></span>
              <span>Email</span>
            </a>
            <a className="btn btn-linkedin" href="https://www.linkedin.com/in/krzysztofkucmierz/" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn">
              <span className="btn-icon"><IconLinkedIn /></span>
              <span>LinkedIn</span>
            </a>
          </div>

          <div className="card-body">
            <section className="bio">
              <h2>About</h2>
              <p>
                I am a full stack developer with a passion for creating business applications that solve real-world problems. I effectively apply mature software development to SaaS, AI, data processing and data visualization projects.
              </p>
            </section>

            <section className="interests">
              <h2>Interests</h2>
              <p>
                In my free time, I enjoy exploring new software and AI technologies, doing hands-on projects and sharing best practices on linkedIn. When I'm not coding, you can find me hiking, riding a bike, listening to science podcasts and sci-fi novels and contributing to the local community.
              </p>
            </section>
          </div>
          <SocialBar />
        </div>
      </div>
    </div>
  )
}

export default App
