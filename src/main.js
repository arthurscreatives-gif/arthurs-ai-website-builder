import './style.css'

const workers = [
  {
    title: 'The Strategist',
    icon: '◌',
    copy: 'Maps opportunities, clusters topics, and prioritizes the fixes that move revenue first.',
  },
  {
    title: 'The Copywriter',
    icon: '✦',
    copy: 'Generates crisp on-brand metadata, page updates, and conversion-friendly supporting copy.',
  },
  {
    title: 'The Auditor',
    icon: '◈',
    copy: 'Scans every template, route, and content surface for technical SEO risk before it spreads.',
  },
  {
    title: 'The Optimizer',
    icon: '◎',
    copy: 'Ships structured data, internal linking, speed, and schema improvements around the clock.',
  },
  {
    title: 'The Analyst',
    icon: '▣',
    copy: 'Turns rankings, traffic, and crawl signals into plain-language action for every stakeholder.',
  },
]

const plans = [
  {
    name: 'Starter',
    price: '$49',
    detail: 'For solo brands testing autonomous SEO.',
    perks: ['1 site monitored', 'Core fixes every day', 'Weekly love report'],
  },
  {
    name: 'Professional',
    price: '$149',
    detail: 'For teams ready to scale content and code performance.',
    perks: ['10 sites monitored', 'Advanced worker automations', 'Priority dashboard alerts'],
    featured: true,
  },
  {
    name: 'Agency',
    price: '$399',
    detail: 'For agencies managing fleets of client properties.',
    perks: ['100 sites monitored', 'White-label reporting', 'Team seats + client access'],
  },
]

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="page-shell">
    <div class="ambient ambient-left" aria-hidden="true"></div>
    <div class="ambient ambient-right" aria-hidden="true"></div>
    <header class="site-header">
      <a class="brand" href="#top" aria-label="AI_SEO_LOVE home">
        <span class="brand-mark" aria-hidden="true">A</span>
        <span class="brand-copy">
          <strong>AI_SEO_LOVE</strong>
          <span>Autonomous SEO Engine</span>
        </span>
      </a>
      <nav class="site-nav" aria-label="Primary">
        <a href="#workers">The Workers</a>
        <a href="#pricing">Pricing</a>
        <a href="#dashboard">Dashboard</a>
        <a href="#login">Login</a>
      </nav>
      <a class="button button-gold header-cta" href="#deploy">Deploy Now</a>
    </header>

    <main id="top">
      <section class="hero panel">
        <div class="hero-copy">
          <p class="eyebrow">
            <span class="eyebrow-dot" aria-hidden="true"></span>
            SELF-HEALING SEO SYSTEM
          </p>
          <h1>SEO THAT LOVES YOUR BRAND.</h1>
          <p class="hero-text">
            AI_SEO_LOVE pairs five specialized workers with a living dashboard so your site can fix technical debt,
            publish smarter pages, and grow visibility without losing your voice.
          </p>
          <form class="email-form" novalidate aria-describedby="email-status">
            <label for="email" class="sr-only">Work email address</label>
            <input id="email" name="email" type="email" inputmode="email" autocomplete="email" placeholder="Enter your work email" required />
            <button class="button button-gold" type="submit">GO</button>
          </form>
          <p id="email-status" class="form-status" role="status" aria-live="polite">Check eligibility for your next deploy.</p>
          <dl class="trust-grid" aria-label="Platform trust metrics">
            <div>
              <dt>500+</dt>
              <dd>brands onboarded</dd>
            </div>
            <div>
              <dt>10,000+</dt>
              <dd>SEO fixes automated</dd>
            </div>
            <div>
              <dt>99.9%</dt>
              <dd>uptime on watch</dd>
            </div>
            <div>
              <dt>24/7</dt>
              <dd>AI support coverage</dd>
            </div>
          </dl>
        </div>
        <div class="hero-visual" aria-hidden="true">
          <div class="orbit-card">
            <div class="core-mark">A</div>
            <div class="orbit orbit-one"></div>
            <div class="orbit orbit-two"></div>
            <div class="visual-pill visual-pill-top">Search</div>
            <div class="visual-pill visual-pill-right">Schema</div>
            <div class="visual-pill visual-pill-bottom">Growth</div>
            <div class="visual-pill visual-pill-left">Love</div>
            <div class="signal signal-a"></div>
            <div class="signal signal-b"></div>
            <div class="signal signal-c"></div>
          </div>
          <div class="mini-metrics">
            <article>
              <span>Crawl Score</span>
              <strong>96%</strong>
            </article>
            <article>
              <span>Fixes Deployed</span>
              <strong>+1,284</strong>
            </article>
          </div>
        </div>
      </section>

      <section id="workers" class="content-section">
        <div class="section-heading">
          <p class="section-kicker">AUTONOMOUS LABOR</p>
          <h2>Five specialists. One calm, always-on engine.</h2>
          <p>
            Every worker handles a different layer of growth so your team sees strategy, copy, code health, and reporting
            move in sync.
          </p>
        </div>
        <div class="workers-grid">
          ${workers
            .map(
              (worker) => `
                <article class="worker-card panel">
                  <div class="worker-icon" aria-hidden="true">${worker.icon}</div>
                  <h3>${worker.title}</h3>
                  <p>${worker.copy}</p>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section id="dashboard" class="content-section split-layout">
        <div class="section-heading split-copy">
          <p class="section-kicker">PRODUCT PROOF</p>
          <h2>Broken Code Kills Brands.</h2>
          <p>
            The dashboard surfaces what matters first: health, fixes, ranking momentum, and pages that deserve immediate
            love before performance slips.
          </p>
          <ul class="proof-list">
            <li>Daily issue triage with impact scoring</li>
            <li>Visibility gains mapped to deployed improvements</li>
            <li>Client-ready snapshots for technical and content teams</li>
          </ul>
        </div>
        <div class="dashboard-card panel" role="img" aria-label="SEO dashboard with metrics chart and site navigation">
          <aside class="dashboard-sidebar">
            <span class="sidebar-logo">A</span>
            <a href="#dashboard" class="is-active">Overview</a>
            <a href="#workers">Workers</a>
            <a href="#pricing">Billing</a>
            <a href="#deploy">Deployments</a>
          </aside>
          <div class="dashboard-main">
            <div class="metric-grid">
              <article>
                <span>SEO Health</span>
                <strong>94</strong>
                <small>+7 this week</small>
              </article>
              <article>
                <span>Issues Fixed</span>
                <strong>412</strong>
                <small>143 critical</small>
              </article>
              <article>
                <span>Keywords Improved</span>
                <strong>188</strong>
                <small>62 in top 3</small>
              </article>
            </div>
            <div class="chart-card">
              <div class="chart-copy">
                <span>Traffic Growth</span>
                <strong>+38%</strong>
              </div>
              <div class="chart-lines" aria-hidden="true">
                <span style="height: 30%"></span>
                <span style="height: 48%"></span>
                <span style="height: 42%"></span>
                <span style="height: 65%"></span>
                <span style="height: 58%"></span>
                <span style="height: 82%"></span>
                <span style="height: 100%"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-section split-layout scale-layout">
        <div class="scale-panel panel">
          <p class="section-kicker">AGENCY SCALE</p>
          <h2>Manage 100 Sites. One Login.</h2>
          <div class="feature-pills" aria-label="Agency features">
            <span>Client dashboards</span>
            <span>White-label reports</span>
            <span>Team permissions</span>
            <span>Automated deploys</span>
          </div>
          <div class="site-list">
            <div>
              <strong>Northwind Apparel</strong>
              <span>92 health · 17 fixes queued</span>
            </div>
            <div>
              <strong>Halo Clinics</strong>
              <span>88 health · 6 templates flagged</span>
            </div>
            <div>
              <strong>Studio Meridian</strong>
              <span>97 health · 31 keywords surging</span>
            </div>
          </div>
        </div>
        <div class="coverage-panel">
          <article class="panel coverage-card">
            <span class="globe" aria-hidden="true">◎</span>
            <h3>Global Coverage</h3>
            <p>Monitor international sites, local intent, and region-specific opportunities from one command center.</p>
          </article>
          <div class="team-grid">
            <article class="panel team-card">
              <strong>Maya</strong>
              <span>Technical Lead</span>
              <small>Approves schema and release rules</small>
            </article>
            <article class="panel team-card">
              <strong>Jordan</strong>
              <span>Client Strategist</span>
              <small>Shares branded growth snapshots every Friday</small>
            </article>
          </div>
        </div>
      </section>

      <section id="pricing" class="content-section">
        <div class="section-heading">
          <p class="section-kicker">PRICING</p>
          <h2>Pick the right amount of love.</h2>
          <p>Choose a plan that fits a single flagship site or an entire client portfolio.</p>
        </div>
        <div class="pricing-grid">
          ${plans
            .map(
              (plan) => `
                <article class="pricing-card panel ${plan.featured ? 'is-featured' : ''}">
                  ${plan.featured ? '<p class="popular-badge">Most Popular</p>' : ''}
                  <h3>${plan.name}</h3>
                  <p class="price"><span>${plan.price}</span>/mo</p>
                  <p class="pricing-copy">${plan.detail}</p>
                  <ul>
                    ${plan.perks.map((perk) => `<li>${perk}</li>`).join('')}
                  </ul>
                  <a class="button ${plan.featured ? 'button-gold' : 'button-secondary'}" href="#deploy">Choose ${plan.name}</a>
                </article>
              `,
            )
            .join('')}
        </div>
      </section>

      <section id="deploy" class="final-cta panel">
        <div class="cta-glow" aria-hidden="true"></div>
        <div class="section-heading final-copy">
          <p class="section-kicker">DEPLOY THE SEAL</p>
          <h2>Ready for the Seal?</h2>
          <p>
            Launch your autonomous SEO engine, earn your Artisan SEO Certification, and give your brand a dashboard that
            never stops caring.
          </p>
          <div class="cta-actions">
            <div class="cta-button-row">
              <a class="button button-gold" href="mailto:hello@ai-seo-love.test?subject=Deploy%20AI_SEO_LOVE">Deploy Now</a>
              <a id="login" class="button button-secondary" href="mailto:hello@ai-seo-love.test?subject=AI_SEO_LOVE%20Client%20Login">Client Login</a>
            </div>
            <p class="trust-note">Certification included · Live migration support · Human review when you need it</p>
          </div>
        </div>
      </section>
    </main>
  </div>
`

const form = document.querySelector('.email-form')
const input = document.querySelector('#email')
const status = document.querySelector('#email-status')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  if (!input.checkValidity()) {
    input.setAttribute('aria-invalid', 'true')
    status.textContent = 'Please enter a valid work email to check eligibility.'
    return
  }

  input.removeAttribute('aria-invalid')
  status.textContent = `Thanks, ${input.value} is on the AI_SEO_LOVE priority deploy list.`
  form.reset()
})

input.addEventListener('input', () => {
  if (input.validity.valid) {
    input.removeAttribute('aria-invalid')
    status.textContent = 'Check eligibility for your next deploy.'
  }
})
