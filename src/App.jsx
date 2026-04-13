import { Button, Card, Chip, Form, Input, Label, TextArea, TextField } from '@heroui/react';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';

const insightCards = [
  {
    id: 'insight-1',
    subtitle: 'Importance of Building a Strong Academic Foundation',
    summary: 'Foundational concepts in algorithms and data structures shaped how I learn, teach, and approach research.',
    body:
      'Foundational concepts in algorithms and data structures shaped how I learn, teach, and approach research. Working as a Teaching Assistant and taking advanced coursework showed me that deeper progress is built on a strong base.',
    points: [
      'Teaching and tutoring showed me that strong basics make advanced work easier to understand.',
      'My TA work in CSCE 146 and coursework in CSCE 350 reinforced the value of layered learning.',
    ],
  },
  {
    id: 'insight-2',
    subtitle: 'Concerns and Risks in Artificial Intelligence',
    summary: 'This section stays ready for your final AI-focused draft and supporting artifacts.',
    body:
      'This section stays ready for your final AI-focused draft and supporting artifacts. The structure is simple enough to match the rest of the portfolio while still leaving room for a longer reflection later.',
    points: ['Add the final AI draft here when you want it integrated.', 'The section keeps the same reading rhythm as the rest of the page.'],
  },
  {
    id: 'insight-3',
    subtitle: 'Value of Disseminating Knowledge',
    summary: 'Clear communication turns technical work into something other people can understand, use, and improve.',
    body:
      'Clear communication turns technical work into something other people can understand, use, and improve. My work in SPCH 145 and Gamecock Cyber Club reinforced that teaching and sharing knowledge are essential parts of technical growth.',
    points: [
      'Public communication made technical ideas easier to explain to different audiences.',
      'Club leadership helped turn dense technical material into accessible dialogue.',
    ],
  },
];

const leadershipHighlights = [
  'Artist-centered detection workflow for generative AI misuse',
  'Pilot testing with UofSC and independent creators',
  'Legal and copyright review for practical accountability',
];
const navigationItems = [
  { to: '/about', label: 'About Me' },
  { to: '/key-insights', label: 'Key Insights' },
  { to: '/leadership', label: 'Leadership' },
  { to: '/contact', label: 'Contact' },
];

function SiteFrame({ children }) {
  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <div className="site-header__copy">
          <Chip color="default" variant="flat" size="sm" className="site-kicker">
            GLD ePortfolio
          </Chip>
          <h1>Alex Ervin</h1>
          <p>A simple portfolio for Leadership Distinction in Research at the University of South Carolina.</p>
        </div>

        <nav className="site-nav" aria-label="Primary navigation">
          <span className="site-nav__label">Portfolio pages</span>
          <div className="site-nav__links">
            {navigationItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-pill${isActive ? ' nav-pill--active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      </header>

      <main className="content-stack">{children}</main>

      <footer className="footer-bar">
        <p>Email: jaervin616@gmail.com</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
        <p>GitHub: github.com/yourusername</p>
      </footer>
    </div>
  );
}

function AboutPage() {
  return (
    <Card className="section-card" variant="bordered">
      <Card.Header className="section-card__header">
        <Chip color="default" variant="flat" size="sm">
          Introduction
        </Chip>
        <div>
          <Card.Title>About Me</Card.Title>
          <Card.Description>A concise introduction to my academic path, interests, and goals.</Card.Description>
        </div>
      </Card.Header>
      <Card.Content className="about-layout">
        <div className="about-copy">
          <p>
            My name is Alexander Ervin. I am a senior at the University of South Carolina majoring in Computer
            Information Systems, and I will graduate in May 2026 with Leadership Distinction in Research.
          </p>
          <p>
            I am pursuing research in ethics, trust, interpretability, and robustness in modern computing systems,
            especially artificial intelligence. My long-term goal is to become a professor at a research institution
            such as UofSC.
          </p>
          <p>
            Over time, college shifted me from simply trying to pass and graduate to becoming more ambitious,
            expressive, and invested in research.
          </p>
        </div>

        <div className="media-grid">
          <Card className="media-card" variant="bordered">
            <Card.Content className="media-card__image-wrap">
              <img src="./assets/ProfPhoto.jpg" alt="Professional photo" className="media-card__image" />
            </Card.Content>
            <Card.Footer className="media-card__footer">Professional photo</Card.Footer>
          </Card>

          <Card className="media-card" variant="bordered">
            <Card.Content className="media-card__image-wrap">
              <img src="./assets/tigerburn.jpg" alt="Me at the 2025-26 Tiger Burn" className="media-card__image" />
            </Card.Content>
            <Card.Footer className="media-card__footer">Me at the 2025-26 Tiger Burn</Card.Footer>
          </Card>
        </div>
      </Card.Content>
    </Card>
  );
}

function KeyInsightsPage() {
  return (
    <>
      {insightCards.map((section, index) => (
        <Card className="section-card" key={section.id} variant="bordered">
          <Card.Header className="section-card__header">
            <Chip color="default" variant="flat" size="sm">
              Key Insight {index + 1}
            </Chip>
            <div>
              <Card.Title>{section.subtitle}</Card.Title>
              <Card.Description>{section.summary}</Card.Description>
            </div>
          </Card.Header>

          <Card.Content className="insight-layout">
            <p>{section.body}</p>
            <ul>
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </Card.Content>
        </Card>
      ))}
    </>
  );
}

function LeadershipPage() {
  return (
    <Card className="section-card" variant="bordered">
      <Card.Header className="section-card__header">
        <Chip color="default" variant="flat" size="sm">
          Leadership
        </Chip>
        <div>
          <Card.Title>Lineage</Card.Title>
          <Card.Description>A creator-centered pilot for detecting unauthorized AI training and style imitation.</Card.Description>
        </div>
      </Card.Header>

      <Card.Content className="leadership-layout">
        <div className="leadership-copy">
          <p>
            Throughout my time at UofSC as a student, Teaching Assistant, and Research Assistant, I have been exposed
            to a wide range of issues at the intersection of computing and society. My goal is to address this issue by
            creating a local pilot program of Lineage, a tool for artists seeking to empirically prove that their work
            is being utilized by a large language model.
          </p>

          <div className="leadership-highlight-list">
            {leadershipHighlights.map((item) => (
              <Chip key={item} color="default" variant="flat">
                {item}
              </Chip>
            ))}
          </div>
        </div>

        <div className="leadership-plan">
          <h3>Implementation plan</h3>
          <ul>
            <li>Build the detection workflow with open-source datasets.</li>
            <li>Test the tool with student and independent creators.</li>
            <li>Review legal and copyright implications before scaling.</li>
          </ul>
        </div>
      </Card.Content>
    </Card>
  );
}

function ContactPage() {
  return (
    <Card className="section-card" variant="bordered">
      <Card.Header className="section-card__header">
        <Chip color="default" variant="flat" size="sm">
          Contact
        </Chip>
        <div>
          <Card.Title>Get in Touch</Card.Title>
          <Card.Description>Use the form below if you want to connect about research, the portfolio, or opportunities.</Card.Description>
        </div>
      </Card.Header>

      <Card.Content>
        <Form className="contact-form" action="mailto:jaervin616@gmail.com" method="post" encType="text/plain">
          <TextField name="name" className="contact-field" isRequired>
            <Label>Name</Label>
            <Input variant="bordered" placeholder="Your name" />
          </TextField>

          <TextField name="email" className="contact-field" isRequired>
            <Label>Email</Label>
            <Input type="email" variant="bordered" placeholder="you@example.com" />
          </TextField>

          <TextField name="message" className="contact-field contact-field--full" isRequired>
            <Label>Message</Label>
            <TextArea variant="bordered" rows={6} placeholder="What would you like to discuss?" />
          </TextField>

          <Button type="submit" variant="solid" className="contact-submit">
            Send Message
          </Button>
        </Form>
      </Card.Content>
    </Card>
  );
}

function App() {
  return (
    <SiteFrame>
      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/key-insights" element={<KeyInsightsPage />} />
        <Route path="/leadership" element={<LeadershipPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/about" replace />} />
      </Routes>
    </SiteFrame>
  );
}

export default App;
