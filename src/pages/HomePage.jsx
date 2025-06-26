import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GymHomepage = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 3000);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleRegister = () => {
    navigate('/signup');
  };

  const features = [
    {
      icon: '🏋️',
      title: "Smart Scheduling",
      description: "AI-powered class scheduling that adapts to your preferences and maximizes your workout efficiency"
    },
    {
      icon: '👥',
      title: "Community Driven",
      description: "Connect with fitness enthusiasts and build lasting relationships in our supportive community"
    },
    {
      icon: '📈',
      title: "Track Progress",
      description: "Monitor your fitness journey with detailed analytics and personalized insights"
    }
  ];

  const stats = [
    { number: "50K+", label: "Active Members" },
    { number: "200+", label: "Expert Trainers" },
    { number: "15+", label: "Locations" },
    { number: "98%", label: "Success Rate" }
  ];

  const testimonials = [
    { name: "Sarah Johnson", text: "GymPro transformed my fitness routine completely!", rating: 5 },
    { name: "Mike Chen", text: "The scheduling system is absolutely incredible.", rating: 5 },
    { name: "Emily Davis", text: "Best gym management app I've ever used!", rating: 5 }
  ];

  return (
    <div className="homepage">
      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .homepage {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          position: relative;
          overflow-x: hidden;
          font-family: 'Arial', sans-serif;
        }

        /* Animated Background Elements */
        .bg-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          animation: float 8s ease-in-out infinite;
        }

        .shape-1 {
          width: 200px;
          height: 200px;
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }

        .shape-2 {
          width: 150px;
          height: 150px;
          top: 50%;
          right: 10%;
          animation-delay: 2s;
        }

        .shape-3 {
          width: 100px;
          height: 100px;
          bottom: 20%;
          left: 15%;
          animation-delay: 4s;
        }

        .shape-4 {
          width: 80px;
          height: 80px;
          top: 70%;
          right: 30%;
          animation-delay: 6s;
        }

        /* Cursor follower */
        .cursor-glow {
          position: fixed;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: all 0.3s ease;
          z-index: 2;
          left: ${mousePosition.x}px;
          top: ${mousePosition.y}px;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-30px) rotate(90deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
          75% { transform: translateY(-40px) rotate(270deg); }
        }

        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        @keyframes fadeInUp {
          from { transform: translateY(50px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          padding: 1rem 0;
          transition: all 0.3s ease;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 2rem;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          font-size: 1.8rem;
          font-weight: bold;
        }

        .logo-icon {
          font-size: 2.5rem;
          animation: pulse 2s infinite;
        }

        .nav-buttons {
          display: flex;
          gap: 1rem;
        }

        /* Premium Buttons */
        .btn {
          padding: 12px 30px;
          border: none;
          border-radius: 50px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .btn-primary {
          background: linear-gradient(45deg, #FF6B6B, #4ECDC4, #45B7D1);
          background-size: 300% 300%;
          color: white;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
          animation: gradient 3s ease infinite;
        }

        .btn-primary:hover {
          transform: translateY(-3px) scale(1.05);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
        }

        .btn-primary:before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }

        .btn-primary:hover:before {
          left: 100%;
        }

        .btn-secondary {
          background: transparent;
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
        }

        .btn-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        /* Hero Section */
        .hero {
          position: relative;
          z-index: 10;
          padding: 150px 0 100px;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .hero-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .hero-content {
          animation: ${isLoaded ? 'slideInLeft 1s ease-out' : 'none'};
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          background: linear-gradient(45deg, #ffffff, #f0f0f0, #ffffff);
          background-size: 200% 200%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient 4s ease infinite;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }

        .hero-visual {
          animation: ${isLoaded ? 'slideInRight 1s ease-out 0.3s both' : 'none'};
          position: relative;
        }

        .hero-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 3rem;
          text-align: center;
          position: relative;
          overflow: hidden;
          height: 400px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .hero-card:before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: translateX(-100%);
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .hero-icon {
          font-size: 8rem;
          margin-bottom: 1rem;
          animation: pulse 3s infinite;
        }

        /* Features Section */
        .features {
          padding: 100px 0;
          position: relative;
          z-index: 10;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .section-title {
          text-align: center;
          font-size: 3rem;
          color: white;
          margin-bottom: 4rem;
          font-weight: bold;
          animation: ${isLoaded ? 'fadeInUp 1s ease-out 0.5s both' : 'none'};
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          color: white;
          transform: ${(index) => activeFeature === index ? 'scale(1.05)' : 'scale(1)'};
          opacity: ${(index) => activeFeature === index ? 1 : 0.85};
        }

        .feature-card:hover {
          transform: translateY(-15px) scale(1.05);
          background: rgba(255, 255, 255, 0.2);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
        }

        .feature-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          display: block;
          animation: pulse 2s infinite;
        }

        .feature-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #4ECDC4;
        }

        .feature-description {
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
        }

        /* Stats Section */
        .stats {
          padding: 80px 0;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          padding: 2rem;
          text-align: center;
          color: white;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.05);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        .stat-number {
          font-size: 3rem;
          font-weight: bold;
          color: #4ECDC4;
          margin-bottom: 0.5rem;
          display: block;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.9);
          font-size: 1.1rem;
        }

        /* Testimonials */
        .testimonials {
          padding: 100px 0;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3rem;
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 20px;
          padding: 2rem;
          color: white;
          position: relative;
          transition: all 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-10px);
          background: rgba(255, 255, 255, 0.15);
        }

        .testimonial-text {
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .testimonial-author {
          font-weight: bold;
          color: #4ECDC4;
        }

        .stars {
          color: #FFD700;
          margin-top: 0.5rem;
        }

        /* CTA Section */
        .cta {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          padding: 80px 0;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
        }

        .cta-title {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 1rem;
          font-weight: bold;
          animation: ${isLoaded ? 'fadeInUp 1s ease-out 1s both' : 'none'};
        }

        .cta-subtitle {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 2.5rem;
          animation: ${isLoaded ? 'fadeInUp 1s ease-out 1.2s both' : 'none'};
        }

        .cta-buttons {
          display: flex;
          gap: 2rem;
          justify-content: center;
          animation: ${isLoaded ? 'fadeInUp 1s ease-out 1.4s both' : 'none'};
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-container {
            grid-template-columns: 1fr;
            gap: 2rem;
            text-align: center;
          }

          .hero-title {
            font-size: 2.5rem;
          }

          .hero-buttons, .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .nav-container {
            padding: 0 1rem;
          }

          .section-container {
            padding: 0 1rem;
          }

          .features-grid, .stats-grid, .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .btn {
            padding: 10px 25px;
            font-size: 0.9rem;
          }
        }
      `}</style>

      {/* Background Animation */}
      <div className="bg-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      {/* Cursor Glow Effect */}
      <div className="cursor-glow"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">🏋️</span>
            <span>GymPro</span>
          </div>
          <div className="nav-buttons">
            <button onClick={handleSignIn} className="btn btn-secondary">Sign In</button>
            {/* <button className="btn btn-primary">Register</button> */}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              Transform Your Fitness Journey
            </h1>
            <p className="hero-subtitle">
              Experience the future of gym management with our intelligent scheduling system. 
              Book classes, track progress, and connect with a community that motivates you to achieve your goals.
            </p>
            <div className="hero-buttons">
              <button onClick={handleSignIn} className="btn btn-primary" >🚀 Get Started</button>
              {/* <button className="btn btn-secondary">📖 Learn More</button> */}
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="hero-card">
              <div className="hero-icon">💪</div>
              <h3 style={{color: '#4ECDC4', fontSize: '1.5rem', marginBottom: '1rem'}}>Your Fitness Hub</h3>
              <p style={{color: 'rgba(255,255,255,0.8)'}}>Manage workouts, track progress, and achieve your goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-container">
          <h2 className="section-title">Why Choose GymPro?</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
                style={{
                  transform: activeFeature === index ? 'scale(1.05)' : 'scale(1)',
                  opacity: activeFeature === index ? 1 : 0.85,
                  animationDelay: `${index * 200}ms`
                }}
              >
                <span className="feature-icon">{feature.icon}</span>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="section-container">
          <h2 className="section-title">What Our Members Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">{testimonial.name}</div>
                <div className="stars">{'⭐'.repeat(testimonial.rating)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="section-container">
          <h2 className="cta-title">Ready to Start Your Journey?</h2>
          <p className="cta-subtitle">
            Join thousands of members who have transformed their lives with GymPro
          </p>
          <div className="cta-buttons">
          {/* <button onClick={handleSignIn} className="btn btn-primary" >🚀 Get Started</button> */}
            {/* <button className="btn btn-secondary">📝 Register Today</button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GymHomepage;