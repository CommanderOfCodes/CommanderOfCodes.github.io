import './HeroSection.css';
import profileImg from '../assets/2.jpeg';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <img src={profileImg} alt="Aadish" className="profile-img" />
        <h1>Hi, I'm Aadish 👋</h1>
        <p>I’m building my personal blog and portfolio to share my thoughts, work, and passion for tech.</p>
        <div className="social-links">
          <a href="https://github.com/CommanderOfCodes" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

