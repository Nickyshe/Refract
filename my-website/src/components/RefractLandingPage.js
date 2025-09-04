import { Book, Code, Lightbulb, PlayCircle, ArrowRight } from 'lucide-react';

const RefractLandingPage = () => {
  const cards = [
    {
      title: "Getting Started",
      description: "Create your first Refract project and learn the fundamentals of optical state management",
      icon: <Book className="lucide-icon" />,
      href: "/docs/introduction"
    },
    {
      title: "API Reference", 
      description: "Complete reference documentation for all Refract APIs, hooks, and methods",
      icon: <Code className="lucide-icon" />,
      href: "/docs/create-component"
    },
    {
      title: "Guides",
      description: "Practical guides and best practices for building scalable Refract applications", 
      icon: <Lightbulb className="lucide-icon" />,
      href: "/docs/state-management"
    },
    {
      title: "Examples",
      description: "Real-world examples and interactive demonstrations to get you started quickly",
      icon: <PlayCircle className="lucide-icon" />,
      href: "/docs/hello-world"
    }
  ];

  const pageStyle = {
    position: 'relative',
    left: '50%',
    right: '50%',
    marginLeft: '-50vw',
    marginRight: '-50vw',
    width: '100vw',
    minHeight: '100vh',
    backgroundColor: 'var(--ifm-background-color)',
    backgroundImage: `
      radial-gradient(circle at 20% 80%, var(--ifm-color-emphasis-200, rgba(0,0,0,0.05)) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, var(--ifm-color-emphasis-200, rgba(0,0,0,0.05)) 0%, transparent 50%)
    `,
    marginTop: 'calc(-1 * var(--ifm-navbar-height, 60px))',
    marginBottom: 0,
    paddingTop: 'var(--ifm-navbar-height, 60px)',
  };

  const containerStyle = {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '80px 24px',
    fontFamily: 'var(--ifm-font-family-base, system-ui)',
    position: 'relative'
  };

  const heroStyle = {
    textAlign: 'center',
    marginBottom: '80px'
  };

  const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    color: 'var(--ifm-color-primary, #000)',
    marginBottom: '24px',
    lineHeight: '1.1',
    background: 'var(--ifm-color-primary)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  };

  const descriptionStyle = {
    fontSize: '1.25rem',
    color: 'var(--ifm-color-emphasis-700, #555)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6'
  };

  const sectionHeaderStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '48px',
    justifyContent: 'center'
  };

  const sectionTitleStyle = {
    fontSize: '1.75rem',
    fontWeight: '600',
    color: 'var(--ifm-color-primary, #000)',
    margin: '0'
  };

  const dividerStyle = {
    height: '1px',
    backgroundColor: 'var(--ifm-color-emphasis-300, #ddd)',
    width: '60px'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '32px',
    maxWidth: '800px',
    margin: '0 auto',
    '@media (max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '24px'
    }
  };

  const cardStyle = {
    display: 'block',
    padding: '40px 32px',
    backgroundColor: 'var(--ifm-background-surface-color, #fff)',
    border: '1px solid var(--ifm-color-emphasis-300, #e0e0e0)',
    borderRadius: '16px',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    minHeight: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  };

  const cardHeaderStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: '16px'
  };

  const cardTitleContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  };

  const iconContainerStyle = {
    width: '44px',
    height: '44px',
    borderRadius: '12px',
    backgroundColor: 'var(--ifm-color-emphasis-100, #f8f9fa)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--ifm-color-primary, #000)', // default icon stroke
    transition: 'all 0.3s ease',
    flexShrink: 0
  };

  const cardTitleStyle = {
    fontSize: '1.25rem',
    fontWeight: '600',
    color: 'var(--ifm-color-primary, #000)',
    margin: '0',
    transition: 'color 0.3s ease'
  };

  const arrowStyle = {
    width: '20px',
    height: '20px',
    color: 'var(--ifm-color-emphasis-500, #999)',
    opacity: '0',
    transform: 'translateX(-8px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    flexShrink: 0
  };

  const cardDescriptionStyle = {
    color: 'var(--ifm-color-emphasis-700, #555)',
    fontSize: '0.95rem',
    lineHeight: '1.5',
    margin: '0'
  };

  return (
    <div style={pageStyle}>
      <style>{`
        .lucide-icon {
          width: 24px;
          height: 24px;
          stroke: currentColor;
        }
      `}</style>
      <div style={containerStyle}>
        {/* Hero Section */}
        <div style={heroStyle}>
          <h1 style={titleStyle}>
            Welcome to Refract Documentation
          </h1>
          <p style={descriptionStyle}>
            A powerful framework for building reactive applications with optical state management and compositional components
          </p>
        </div>

        {/* Explore the Docs Section */}
        <div>
          <div style={sectionHeaderStyle}>
            <div style={dividerStyle}></div>
            <h2 style={sectionTitleStyle}>Explore the Docs</h2>
            <div style={dividerStyle}></div>
          </div>
          
          <div style={gridStyle}>
            {cards.map((card, index) => (
              <a
                key={index}
                href={card.href}
                style={cardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(0, 0, 0, 0.12)';
                  e.currentTarget.style.borderColor = 'var(--ifm-color-primary, #000)';
                  const arrow = e.currentTarget.querySelector('.card-arrow');
                  const icon = e.currentTarget.querySelector('.card-icon');
                  if (arrow) {
                    arrow.style.opacity = '1';
                    arrow.style.transform = 'translateX(0)';
                  }
                  if (icon) {
                    icon.style.backgroundColor = 'var(--ifm-color-primary)';
                    icon.style.color = 'var(--ifm-background-surface-color, #fff)';
                    icon.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = 'var(--ifm-color-emphasis-300, #e0e0e0)';
                  const arrow = e.currentTarget.querySelector('.card-arrow');
                  const icon = e.currentTarget.querySelector('.card-icon');
                  if (arrow) {
                    arrow.style.opacity = '0';
                    arrow.style.transform = 'translateX(-8px)';
                  }
                  if (icon) {
                    icon.style.backgroundColor = 'var(--ifm-color-emphasis-100, #f8f9fa)';
                    icon.style.color = 'var(--ifm-color-primary, #000)';
                    icon.style.transform = 'scale(1)';
                  }
                }}
              >
                {/* Card Header */}
                <div style={cardHeaderStyle}>
                  <div style={cardTitleContainerStyle}>
                    <div className="card-icon" style={iconContainerStyle}>
                      {card.icon}
                    </div>
                    <h3 style={cardTitleStyle}>
                      {card.title}
                    </h3>
                  </div>
                  <ArrowRight className="card-arrow" style={arrowStyle} />
                </div>
                
                {/* Card Content */}
                <p style={cardDescriptionStyle}>
                  {card.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefractLandingPage;


