/**
 * LOCAL SIGNAL STYLE REMINDER
 * This page is a dark systems-lab portfolio: asymmetrical signal-path layout,
 * graphite surfaces, Signal Lime accents, technical metadata, purposeful 3D depth,
 * and concise evidence-led copy. Avoid generic cards, purple gradients, or centered marketing layouts.
 */
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Cpu,
  Github,
  Layers3,
  Mail,
  MousePointer2,
  Orbit,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const projects = [
  {
    number: "01",
    name: "ALICE",
    title: "A macOS companion that stays near the cursor.",
    description:
      "A voice-first desktop assistant that sees screen context, streams answers, and guides people by pointing directly at interfaces.",
    stack: ["SwiftUI", "AppKit", "ScreenCaptureKit", "Cloudflare Worker"],
    signal: "VOICE + VISION",
    href: "https://github.com/skmandal3240/ALICE",
    className: "project-alice",
    icon: MousePointer2,
  },
  {
    number: "02",
    name: "SHADE",
    title: "A Rust browser engine for agent-scale automation.",
    description:
      "A V8-backed headless browser with a real DOM, CDP compatibility, hardened networking, and an embedded MCP server.",
    stack: ["Rust", "V8", "CDP", "MCP"],
    signal: "BROWSER CORE",
    href: "https://github.com/skmandal3240/SHADE",
    className: "project-shade",
    icon: Terminal,
  },
  {
    number: "03",
    name: "ASTRO",
    title: "Personal AI that asks before it acts.",
    description:
      "A local-first platform for cited vault answers, explicit memory, approval-gated tools, and an auditable learning loop.",
    stack: ["Python", "Ollama", "RAG", "Policy Engine"],
    signal: "GOVERNED MEMORY",
    href: "https://github.com/skmandal3240/ASTRO",
    className: "project-astro",
    icon: ShieldCheck,
  },
  {
    number: "04",
    name: "SIA",
    title: "Edge-first intelligence for private daily life.",
    description:
      "An on-device AI companion designed around consent, layered memory, local data handling, and a controlled perception-to-action loop.",
    stack: ["Python", "ONNX", "Ollama", "GraphRAG"],
    signal: "EDGE SYSTEM",
    href: "https://github.com/skmandal3240/SIA",
    className: "project-sia",
    icon: Cpu,
  },
];

const capabilities = [
  ["Local-first AI", "Ollama · ONNX · edge runtime"],
  ["Agent systems", "MCP · capabilities · audit paths"],
  ["Multimodal UX", "screen · voice · streaming response"],
  ["Browser internals", "V8 · DOM · CDP · network stack"],
  ["Systems craft", "Rust · Swift · Python · async design"],
  ["Web interfaces", "React · TypeScript · product UX"],
];

const sectionLinks = [
  ["01", "Work", "#work"],
  ["02", "Method", "#method"],
  ["03", "Evidence", "#evidence"],
  ["04", "Contact", "#contact"],
];

function SignalCore() {
  const coreRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const node = coreRef.current;
    if (!node || shouldReduceMotion) return;

    const moveCore = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      node.style.setProperty("--core-x", `${x * 16}deg`);
      node.style.setProperty("--core-y", `${y * -16}deg`);
      node.style.setProperty("--glow-x", `${50 + x * 18}%`);
      node.style.setProperty("--glow-y", `${50 + y * 18}%`);
    };

    const resetCore = () => {
      node.style.setProperty("--core-x", "0deg");
      node.style.setProperty("--core-y", "0deg");
      node.style.setProperty("--glow-x", "50%");
      node.style.setProperty("--glow-y", "50%");
    };

    node.addEventListener("pointermove", moveCore);
    node.addEventListener("pointerleave", resetCore);
    return () => {
      node.removeEventListener("pointermove", moveCore);
      node.removeEventListener("pointerleave", resetCore);
    };
  }, [shouldReduceMotion]);

  return (
    <div
      ref={coreRef}
      className="signal-core-wrap"
      aria-label="Interactive local signal visual"
      role="img"
    >
      <div className="core-axis core-axis-a" />
      <div className="core-axis core-axis-b" />
      <div className="core-orbit orbit-a"><span /></div>
      <div className="core-orbit orbit-b"><span /></div>
      <div className="core-orbit orbit-c"><span /></div>
      <div className="core-capsule">
        <div className="core-surface" />
        <div className="core-membrane" />
        <div className="core-node node-one" />
        <div className="core-node node-two" />
        <div className="core-node node-three" />
      </div>
      <div className="core-readout readout-a">LOCAL</div>
      <div className="core-readout readout-b">SIGNAL</div>
      <div className="core-coordinate coordinate-a">23.72° N</div>
      <div className="core-coordinate coordinate-b">SYSTEM / 01</div>
    </div>
  );
}

function GrainMark({ className = "" }: { className?: string }) {
  return <span className={`grain-mark ${className}`} aria-hidden="true" />;
}

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(projects[0].name);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="local-signal">
      <div className="page-noise" aria-hidden="true" />
      <div className="page-grid" aria-hidden="true" />

      <header className={`site-header ${scrolled ? "site-header-scrolled" : ""}`}>
        <a className="brand-lockup" href="#top" aria-label="Saurabh Mandal home">
          <img src="/manus-storage/local-signal-mark_84234d23.png" alt="" className="brand-mark" />
          <span className="brand-wordmark">SAURABH / MANDAL</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {sectionLinks.map(([number, label, href]) => (
            <a href={href} key={href}>
              <span>{number}</span>{label}
            </a>
          ))}
        </nav>
        <a href="mailto:skmandal3240@gmail.com" className="header-status">
          <span className="status-dot" />
          OPEN TO BUILD
        </a>
      </header>

      <section className="hero-section" id="top">
        <div className="hero-meta hero-meta-top">PATNA, IN · LOCAL-FIRST SYSTEMS</div>
        <div className="hero-stage">
          <motion.div
            className="hero-copy"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
          >
            <motion.p variants={reveal} className="eyebrow"><span /> SYSTEMS / AI ENGINEER</motion.p>
            <motion.h1 variants={reveal}>
              BUILDING<br />
              <em>INTELLIGENCE</em><br />
              THAT STAYS CLOSE.
            </motion.h1>
            <motion.p variants={reveal} className="hero-intro">
              I design local-first AI companions, browser infrastructure, and careful interfaces for systems that people can inspect, guide, and trust.
            </motion.p>
            <motion.div variants={reveal} className="hero-actions">
              <a className="signal-button" href="#work">
                Explore the work <ArrowDown size={17} />
              </a>
              <a className="text-button" href="/manus-storage/saurabh-mandal-cv_b69ee361.pdf" target="_blank" rel="noreferrer">
                Open CV <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            <img
              className="hero-art"
              src="/manus-storage/local-signal-hero-core_a241f3af.png"
              alt="Abstract orbital signal core"
            />
            <SignalCore />
            <div className="hero-visual-caption">
              <span>ACTIVE FIELD</span>
              <strong>PROXIMITY / PRIVACY / PRECISION</strong>
            </div>
          </motion.div>
        </div>
        <div className="hero-floor">
          <span>SCROLL TO TRACE</span>
          <div className="hero-floor-line"><i /></div>
          <span>2026 / PORTFOLIO</span>
        </div>
      </section>

      <aside className="signal-rail" aria-label="Section indicators">
        <span className="rail-orb" />
        {sectionLinks.map(([number, label, href]) => (
          <a href={href} key={href} title={label}>
            <span>{number}</span>
          </a>
        ))}
        <div className="rail-line" />
      </aside>

      <section className="statement-section signal-section" id="method">
        <div className="section-index">00 / APPROACH</div>
        <div className="statement-layout">
          <div className="statement-mark">
            <span className="statement-ring" />
            <span className="statement-dot" />
            <span className="statement-arrow">↘</span>
          </div>
          <motion.div
            className="statement-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.p variants={reveal} className="eyebrow"><span /> THE OPERATING PRINCIPLE</motion.p>
            <motion.h2 variants={reveal}>Useful AI needs an <em>inner boundary.</em></motion.h2>
            <motion.p variants={reveal}>
              The projects here make intelligence tangible without making it opaque: data stays local when it can, actions stay governed, and complex systems return something people can understand.
            </motion.p>
          </motion.div>
          <div className="principle-tags" aria-label="Core principles">
            {[
              "LOCAL BY DEFAULT",
              "CONSENT IN THE LOOP",
              "VISIBLE SYSTEMS",
              "AUDITABLE ACTIONS",
            ].map((item, index) => (
              <motion.span
                key={item}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
              >
                <i>{String(index + 1).padStart(2, "0")}</i>{item}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section signal-section" id="work">
        <div className="section-heading-row">
          <div className="section-index">01 / SELECTED SYSTEMS</div>
          <p>Four explorations in proximity, agency, and technical control.</p>
        </div>

        <div className="work-board">
          <div className="work-board-header">
            <span className="live-indicator"><i /> CASE FILES / ACTIVE</span>
            <span>FOCUS: {activeProject}</span>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  key={project.name}
                  className={`project-card ${project.className} ${activeProject === project.name ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveProject(project.name)}
                  onFocus={() => setActiveProject(project.name)}
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ delay: index * 0.08, duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={shouldReduceMotion ? {} : { y: -8, rotateX: 2, rotateY: index % 2 === 0 ? -2 : 2 }}
                >
                  <div className="card-grid-lines" aria-hidden="true" />
                  <div className="project-card-top">
                    <span>{project.number} / CASE</span>
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div className="project-art" aria-hidden="true">
                    <span className="project-orb project-orb-a" />
                    <span className="project-orb project-orb-b" />
                    <span className="project-route" />
                    <span className="project-square" />
                    <span className="project-ping ping-a" />
                    <span className="project-ping ping-b" />
                    <span className="project-coordinate">{project.number}.FIELD / 64.02</span>
                  </div>
                  <div className="project-card-copy">
                    <div className="project-signal"><i />{project.signal}<b>READY</b></div>
                    <h3>{project.name}</h3>
                    <p>{project.title}</p>
                    <div className="project-tags">
                      {project.stack.map((item) => <span key={item}>{item}</span>)}
                    </div>
                  </div>
                  <div className="project-link-label">OPEN REPOSITORY <ArrowUpRight size={15} /></div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </section>

      <section className="capability-section signal-section">
        <div className="capability-visual">
          <img src="/manus-storage/local-signal-memory-field_b942c07c.png" alt="Abstract local memory field" />
          <div className="capability-visual-meta"><span>CAPABILITY FIELD</span><span>02.0 / LOCKED</span></div>
        </div>
        <div className="capability-copy">
          <div className="section-index">02 / CAPABILITY FIELD</div>
          <h2>Work that crosses the <em>system boundary.</em></h2>
          <p>
            From on-device model pathways to platform interfaces, I work across the layers that make intelligent products feel safe, fast, and unusually present.
          </p>
          <div className="capability-list">
            {capabilities.map(([title, detail], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.05 }}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{title}</strong>
                <em>{detail}</em>
                <ChevronRight size={15} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="evidence-section signal-section" id="evidence">
        <div className="section-heading-row evidence-heading">
          <div className="section-index">03 / EVIDENCE</div>
          <p>Learning records and interface work that form the visible edge of a wider systems practice.</p>
        </div>
        <div className="evidence-layout">
          <div className="certificate-stack">
            <motion.figure
              className="certificate certificate-javascript"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18, rotate: shouldReduceMotion ? 0 : -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: -3 }}
              viewport={{ once: true }}
              whileHover={shouldReduceMotion ? {} : { y: -8, rotate: -1 }}
            >
              <img src="/manus-storage/javascript-skillsbuild-certificate_fbacfa5e.jpeg" alt="IBM SkillsBuild JavaScript Tutorial I completion certificate" />
              <figcaption>IBM SKILLSBUILD / JAVASCRIPT TUTORIAL I</figcaption>
            </motion.figure>
            <motion.figure
              className="certificate certificate-analytics"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18, rotate: shouldReduceMotion ? 0 : 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 4 }}
              viewport={{ once: true }}
              whileHover={shouldReduceMotion ? {} : { y: -8, rotate: 1 }}
            >
              <img src="/manus-storage/data-analytics-certificate_cfdac625.webp" alt="Data Analytics course completion certificate" />
              <figcaption>MAGENOTO / DATA ANALYTICS</figcaption>
            </motion.figure>
          </div>
          <div className="evidence-copy">
            <h2>Built from both <em>interfaces and infrastructure.</em></h2>
            <div className="experience-ledger">
              <article>
                <span>2025</span>
                <div><strong>Zucol Pvt. Ltd.</strong><p>Frontend Developer · React and UI optimization</p></div>
                <Check size={16} />
              </article>
              <article>
                <span>2025</span>
                <div><strong>Digichum Infotech</strong><p>Frontend + business development internship</p></div>
                <Check size={16} />
              </article>
              <article>
                <span>2021–25</span>
                <div><strong>B.E. Computer Science Engineering</strong><p>Dr. A.P.J. Abdul Kalam University</p></div>
                <Check size={16} />
              </article>
            </div>
            <a className="text-button evidence-cv" href="/manus-storage/saurabh-mandal-cv_b69ee361.pdf" target="_blank" rel="noreferrer">
              Inspect full background <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section signal-section" id="contact">
        <GrainMark className="contact-grain-one" />
        <GrainMark className="contact-grain-two" />
        <div className="contact-topline"><span>04 / OPEN CHANNEL</span><span>AVAILABLE FOR COLLABORATION</span></div>
        <div className="contact-layout">
          <div>
            <p className="eyebrow"><span /> START A CONVERSATION</p>
            <h2>Have a difficult system worth making <em>legible?</em></h2>
          </div>
          <div className="contact-actions">
            <span className="contact-status"><i /> ROUTE OPEN / HUMAN INPUT</span>
            <a className="contact-mail" href="mailto:skmandal3240@gmail.com">
              <Mail size={20} /> skmandal3240@gmail.com <ArrowUpRight size={20} />
            </a>
            <div className="contact-links">
              <a href="https://github.com/skmandal3240" target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href="https://www.linkedin.com/in/saurabh-mandal-3a31a5230" target="_blank" rel="noreferrer"><Layers3 size={17} /> LinkedIn</a>
            </div>
          </div>
        </div>
        <footer>
          <span>© 2026 SAURABH MANDAL</span>
          <span>LOCAL SIGNAL / SYSTEMS PORTFOLIO</span>
          <span><Orbit size={14} /> BUILT FOR THE NEARBY FUTURE</span>
        </footer>
      </section>
    </main>
  );
}
