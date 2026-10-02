"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Portfolio() {
  return (
    <main> 
      {/* NAVIGATION */}
<header className="site-nav">
  <a href="#" className="nav-logo">
    ASLAM<span>.DEV</span>
  </a>

  <nav className="nav-links">
    <a href="#work">WORK</a>
    <a href="#journey">JOURNEY</a>
    <a href="#about">ABOUT</a>
    <a href="#contact">CONTACT</a>
  </nav>

  <a href="#contact" className="nav-availability">
    AVAILABLE
  </a>
</header>
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 0.8, 0.2, 1],
            }}
          >
            <div className="eyebrow">
              SOFTWARE DEVELOPER · DUBAI, UAE
            </div>

           <h1>
              I BUILD
              <br />
              DIGITAL PRODUCTS
              <br />
              FROM IDEA
              <br />
              TO <span>INTERFACE.</span>
            </h1>

            <p className="hero-description">
              Full-stack and mobile developer focused on building practical
              digital products across web, mobile, APIs and AI.
            </p>

            <div className="hero-actions">
              <a href="#work" className="button button-primary">
                VIEW MY WORK
              </a>

              <a
                href="https://github.com/mohaslam11"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-text-link"
              >
                GITHUB ↗
              </a>
            </div>

            <div className="availability">
              <span className="availability-dot" />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            </motion.div>

            <motion.div
              className="hero-visual"
              aria-label="Layered product interface illustration"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.85,
                delay: 0.15,
                ease: [0.22, 0.8, 0.2, 1],
              }}
            >  
            <div className="visual-back-card">
              <div className="visual-topbar">
                <span />
                <span />
                <span />
              </div>

              <div className="visual-lines">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className="visual-main-card">
              <div className="visual-header">
                <div>
                  <small>PRODUCT SYSTEM</small>
                  <strong>ASLAM.DEV</strong>
                </div>

                <div className="visual-status">
                  LIVE
                </div>
              </div>

              <div className="visual-content">
                <div className="visual-large-block">
                  <span>01</span>
                  <strong>IDEA</strong>
                  <small>REQUIREMENTS</small>
                </div>

                <div className="visual-large-block active">
                  <span>02</span>
                  <strong>SYSTEM</strong>
                  <small>ENGINEERING</small>
                </div>

                <div className="visual-large-block">
                  <span>03</span>
                  <strong>PRODUCT</strong>
                  <small>SHIP · IMPROVE</small>
                </div>
              </div>

              <div className="visual-footer">
                <span>REACT</span>
                <span>NODE</span>
                <span>FLUTTER</span>
                <span>AI</span>
              </div>
            </div>

            <div className="visual-floating-card">
              <span>BUILD</span>
              <strong>→</strong>
              <span>SHIP</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="section work-section">
        <div className="section-heading">
          <div className="section-number">01 / WORK</div>

          <div>
            <h2>Selected products.</h2>
            <p>
              A selection of products I&apos;ve designed, built and shipped.
            </p>
          </div>
        </div>

        <div className="projects">

  {/* =====================================================
      CHERISH VOGUE
  ====================================================== */}

  <motion.article
    className="project project-dark project-cherish"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, ease: [0.22, 0.8, 0.2, 1] }}
  >
    <div className="project-info">

      <div className="project-meta">
        <span>01</span>
        <span>ECOMMERCE · FULL STACK</span>
      </div>

      <h3>Cherish Vogue</h3>

      <p>
        A premium fashion e-commerce platform with a custom admin
        system, product management and a complete customer-facing
        shopping experience.
      </p>

      <div className="project-stack">
        <span>Next.js</span>
        <span>React</span>
        <span>TypeScript</span>
        <span>Firebase</span>
        <span>Cloudinary</span>
      </div>

      <div className="project-system-label">
        <span>01</span>
        <strong>STOREFRONT</strong>

        <span>02</span>
        <strong>COMMERCE</strong>

        <span>03</span>
        <strong>ADMIN</strong>
      </div>

      <a href="#contact" className="project-link">
        VIEW CASE STUDY →
      </a>

        <a
      href="https://cherish-vogue-piuq.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="project-live-link"
    >
      LIVE SITE ↗
    </a>

    </div>


    <div className="project-preview cherish-real-preview">

      <div className="project-browser">

        <div className="browser-toolbar">

          <div className="browser-dots">
            <span />
            <span />
            <span />
          </div>

          <span className="browser-domain">
            CHERISHVOGUE.AE
          </span>

        </div>

        <div className="browser-image-wrap">
          <Image
            src="/projects/cherish/cherish-home.png"
            alt="Cherish Vogue ecommerce homepage"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="project-real-image"
          />
        </div>

      </div>


      <motion.div
        className="floating-shot cherish-product-shot"
        whileHover={{
          y: -8,
          rotate: -1
        }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/projects/cherish/cherish-product.png"
          alt="Cherish Vogue product page"
          fill
          sizes="340px"
          className="project-real-image"
        />

        <span className="shot-label">
          PRODUCT
        </span>
      </motion.div>


      <motion.div
        className="floating-shot cherish-admin-shot"
        whileHover={{
          y: -8,
          rotate: 1
        }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src="/projects/cherish/cherish-admin.png"
          alt="Cherish Vogue admin dashboard"
          fill
          sizes="340px"
          className="project-real-image"
        />

        <span className="shot-label">
          ADMIN SYSTEM
        </span>
      </motion.div>

    </div>

  </motion.article>


  {/* =====================================================
      VARNIKA
  ====================================================== */}

  <motion.article
    className="project project-light project-varnika"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, ease: [0.22, 0.8, 0.2, 1] }}
  >

    <div className="project-info">

      <div className="project-meta">
        <span>02</span>
        <span>MARKETPLACE · FULL STACK</span>
      </div>

      <h3>Varnika Store</h3>

      <p>
        A modern boutique commerce platform combining an editorial
        storefront with product discovery, product management and a
        dedicated administration system.
      </p>

      <div className="project-stack">
        <span>Next.js</span>
        <span>TypeScript</span>
        <span>Firebase</span>
        <span>Tailwind</span>
        <span>Vercel</span>
      </div>

      <a href="#contact" className="project-link">
        VIEW CASE STUDY →
      </a>

              <a
          href="https://varnika-store.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-live-link"
        >
          LIVE SITE ↗
        </a>

    </div>


    <div className="project-preview varnika-real-preview">

      <div className="varnika-main-shot">

        <div className="visual-shot-number">
          01 / STOREFRONT
        </div>

        <div className="varnika-main-image">
          <Image
            src="/projects/varnika/varnika-home.png"
            alt="Varnika boutique storefront"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="project-real-image"
          />
        </div>

      </div>


      <div className="varnika-secondary-grid">

        <motion.div
          className="varnika-small-shot"
          whileHover={{ y: -6 }}
        >

          <div className="visual-shot-number">
            02 / PRODUCT
          </div>

          <div className="varnika-small-image">
            <Image
              src="/projects/varnika/varnika-product.png"
              alt="Varnika product detail page"
              fill
              sizes="320px"
              className="project-real-image"
            />
          </div>

        </motion.div>


        <motion.div
          className="varnika-small-shot"
          whileHover={{ y: -6 }}
        >

          <div className="visual-shot-number">
            03 / SYSTEM
          </div>

          <div className="varnika-small-image">
            <Image
              src="/projects/varnika/varnika-admin.png"
              alt="Varnika administration dashboard"
              fill
              sizes="320px"
              className="project-real-image"
            />
          </div>

        </motion.div>

      </div>

    </div>

  </motion.article>


  {/* =====================================================
      SAHACHARI
  ====================================================== */}

  <motion.article
    className="project project-blue project-sahachari"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, ease: [0.22, 0.8, 0.2, 1] }}
  >

    <div className="project-info">

      <div className="project-meta">
        <span>03</span>
        <span>MOBILE · PRODUCT</span>
      </div>

      <h3>Sahachari</h3>

      <p>
        A local marketplace and services application connecting users
        with nearby services, rentals, businesses and community
        opportunities through a mobile-first experience.
      </p>

      <div className="project-stack">
        <span>Flutter</span>
        <span>Dart</span>
        <span>REST API</span>
        <span>Firebase</span>
        <span>CI/CD</span>
      </div>

      <a href="#contact" className="project-link">
        VIEW CASE STUDY →
      </a>

              <a
          href="https://play.google.com/store/apps/details?id=com.corestoneinnovation.sahachariuser&pcampaignid=web_share"
          target="_blank"
          rel="noopener noreferrer"
          className="project-live-link"
        >
          VIEW ON PLAY STORE ↗
        </a>

    </div>


    <div className="project-preview sahachari-real-preview">

      <div className="mobile-showcase-label">
        <span>REAL PRODUCT</span>
        <strong>MOBILE EXPERIENCE</strong>
      </div>


      <motion.div
        className="device device-left"
        whileHover={{
          y: -12,
          rotate: -3
        }}
        transition={{ duration: 0.3 }}
      >

        <div className="device-speaker" />

        <div className="device-screen">
          <Image
            src="/projects/sahachari/sahachari-services.png"
            alt="Sahachari services screen"
            fill
            sizes="260px"
            className="device-image"
          />
        </div>

      </motion.div>


      <motion.div
        className="device device-main"
        whileHover={{
          y: -14
        }}
        transition={{ duration: 0.3 }}
      >

        <div className="device-speaker" />

        <div className="device-screen">
          <Image
            src="/projects/sahachari/sahachari-home.png"
            alt="Sahachari mobile application home screen"
            fill
            priority={false}
            sizes="300px"
            className="device-image"
          />
        </div>

      </motion.div>


      <motion.div
        className="device device-right"
        whileHover={{
          y: -12,
          rotate: 3
        }}
        transition={{ duration: 0.3 }}
      >

        <div className="device-speaker" />

        <div className="device-screen">
          <Image
            src="/projects/sahachari/sahachari-market.png"
            alt="Sahachari marketplace screen"
            fill
            sizes="260px"
            className="device-image"
          />
        </div>

      </motion.div>


      <div className="mobile-showcase-caption">
        <span>DISCOVER</span>
        <span>BOOK</span>
        <span>CONNECT</span>
      </div>

    </div>

  </motion.article>

</div>
      </section>

      {/* PROCESS */}
      <section className="section process-section">
        <div className="section-heading">
          <div className="section-number">02 / PROCESS</div>

          <div>
            <h2>From idea to product.</h2>
            <p>
              I approach software as a complete system, not just a collection
              of screens.
            </p>
          </div>
        </div>

        <div className="process-grid">
          <div className="process-item">
            <span>01</span>

            <h3>IDEA</h3>

            <p>
              Understand the problem, requirements, users and the flow before
              writing the first line of code.
            </p>

            <div className="process-tags">
              <span>Requirements</span>
              <span>User Flow</span>
              <span>Planning</span>
            </div>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-item active">
            <span>02</span>

            <h3>SYSTEM</h3>

            <p>
              Connect the interface, APIs, database, authentication and AI
              into a practical technical architecture.
            </p>

            <div className="process-tags">
              <span>Frontend</span>
              <span>Backend</span>
              <span>APIs</span>
              <span>AI</span>
            </div>
          </div>

          <div className="process-arrow">→</div>

          <div className="process-item">
            <span>03</span>

            <h3>PRODUCT</h3>

            <p>
              Deploy the product, monitor it, improve the experience and keep
              building based on real usage.
            </p>

            <div className="process-tags">
              <span>Deploy</span>
              <span>Monitor</span>
              <span>Improve</span>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="section journey-section">
        <div className="section-heading">
          <div className="section-number">03 / JOURNEY</div>

          <div>
            <h2>How I got here.</h2>
            <p>
              From Android development to full-stack products and AI
              integration.
            </p>
          </div>
        </div>

        <div className="journey">
          <div className="journey-line" />

          <div className="journey-item">
            <div className="journey-year">2022</div>

            <div className="journey-marker" />

            <div className="journey-content">
              <span>FOUNDATION</span>
              <h3>Android Development</h3>
              <p>
                Started building mobile applications with Java, Android SDK
                and Firebase.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-year">2024</div>

            <div className="journey-marker" />

            <div className="journey-content">
              <span>EXPANSION</span>
              <h3>Flutter & Product Development</h3>
              <p>
                Moved into Flutter development, REST APIs, Firebase and
                production mobile applications.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-year">2025</div>

            <div className="journey-marker" />

            <div className="journey-content">
              <span>PRODUCTION</span>
              <h3>Full-Stack Engineering</h3>
              <p>
                Expanded into React, Next.js, Node.js, PHP, databases,
                deployment and production web applications.
              </p>
            </div>
          </div>

          <div className="journey-item">
            <div className="journey-year">NOW</div>

            <div className="journey-marker active" />

            <div className="journey-content">
              <span>BUILDING</span>
              <h3>Full-Stack + AI</h3>
              <p>
                Combining product engineering with AI integrations to build
                practical software that solves real problems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="about" className="section skills-section">
        <div className="section-heading">
          <div className="section-number">04 / TOOLBOX</div>

          <div>
            <h2>The stack.</h2>
            <p>
              Tools I use to move from idea, to architecture, to production.
            </p>
          </div>
        </div>

        <div className="skills-grid">
          <div className="skill-group">
            <span>FRONTEND</span>

            <h3>Interfaces</h3>

            <p>
              React, Next.js, TypeScript, JavaScript, HTML, CSS and Tailwind
              CSS.
            </p>
          </div>

          <div className="skill-group">
            <span>MOBILE</span>

            <h3>Applications</h3>

            <p>
              Flutter, Dart, BLoC, Android SDK, Java and Firebase.
            </p>
          </div>

          <div className="skill-group">
            <span>BACKEND</span>

            <h3>Systems</h3>

            <p>
              Node.js, PHP, REST APIs, webhooks, authentication and backend
              architecture.
            </p>
          </div>

          <div className="skill-group">
            <span>AI</span>

            <h3>Intelligence</h3>

            <p>
              Gemini, OpenAI, Claude and AI-assisted development workflows.
            </p>
          </div>

          <div className="skill-group">
            <span>DATA</span>

            <h3>Storage</h3>

            <p>
              Firebase, MySQL, MongoDB and PostgreSQL concepts.
            </p>
          </div>

          <div className="skill-group">
            <span>DELIVERY</span>

            <h3>Production</h3>

            <p>
              Git, GitHub, Vercel, Linux, CI/CD, hosting, backups and
              deployment.
            </p>
          </div>
        </div>
      </section>

      {/* CURRENTLY BUILDING */}
      <section className="section building-section">
        <div className="building-label">CURRENTLY BUILDING</div>

        <div className="building-content">
          <div>
            <h2>
              Turning documents
              <br />
              into useful answers.
            </h2>

            <p>
              Exploring a medical-document analysis product using Flutter,
              Node.js, PDF processing and AI to transform complex reports into
              understandable information.
            </p>
          </div>

          <div className="building-tech">
            <span>FLUTTER</span>
            <span>NODE.JS</span>
            <span>GEMINI</span>
            <span>PDF</span>
            <span>AI</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-inner">
          <div className="section-number">05 / CONTACT</div>

          <h2>
            HAVE A PROBLEM
            <br />
            WORTH BUILDING?
          </h2>

          <p>
            I&apos;m currently available for software development
            opportunities, freelance projects and product collaborations.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="contact-email"
          >
            LET&apos;S BUILD SOMETHING →
          </a>

          <div className="contact-meta">
            <span>DUBAI, UAE</span>
            <span>AVAILABLE NOW</span>
          </div>
        </div>
      </section>
    </main>
  );
}