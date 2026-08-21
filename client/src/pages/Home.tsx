/**
 * STYLE REMINDER — ORBITAL SYSTEMS LAB
 * Neo-futurist systems design: deep graphite, lunar white, signal cyan, controlled 3D depth,
 * asymmetric engineering-editorial layout, compact telemetry labels, motion only with purpose.
 */
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Download,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Radio,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useRef } from "react";

const projects = [
  {
    index: "01",
    code: "ALICE / MACOS",
    title: "An AI companion that lives at the cursor.",
    description:
      "A voice-first macOS assistant that sees screen context, listens through push-to-talk, streams reasoning, and guides people toward the right interface element.",
    stack: ["SwiftUI", "AppKit", "ScreenCaptureKit", "Cloudflare Workers"],
    image: "/manus-storage/saurabh-alice-visual_ed8fc543.jpg",
    href: "https://github.com/skmandal3240/ALICE",
    stat: "Multi-modal, guidance-first UX",
  },
  {
    index: "02",
    code: "SHADE / RUST",
    title: "A secure headless browser for agentic work.",
    description:
      "A V8-backed browser engine with a full DOM and network stack, CDP compatibility, stealth networking, SSRF safeguards, and an MCP server for safe automation.",
    stack: ["Rust", "V8", "CDP", "Tokio"],
    image: "/manus-storage/saurabh-shade-visual_6b5c9dfb.jpg",
    href: "https://github.com/skmandal3240/SHADE",
    stat: "CLI, library, Docker deployment",
  },
  {
    index: "03",
    code: "ASTRO / LOCAL FIRST",
    title: "Personal AI with permissions at its core.",
    description:
      "A local-first platform that indexes a Markdown vault, answers with precise file citations, and gates file, shell, and browser actions behind explicit approvals.",
    stack: ["Ollama", "ONNX", "RAG", "Policy Engine"],
    image: "/manus-storage/saurabh-astro-visual_5a0c7702.jpg",
    href: "https://github.com/skmandal3240/ASTRO",
    stat: "Citations, memory, audit journal",
  },
  {
    index: "04",
    code: "SIA / EDGE INTELLIGENCE",
    title: "Private, on-device AI for India.",
    description:
      "An edge-first companion designed around a full perception-to-action loop, consent, local memory, encrypted data, and DPDP-aligned governance.",
    stack: ["Ollama", "ONNX", "GraphRAG", "LoRA"],
    image: "/manus-storage/saurabh-orbital-hero_d37a0c7e.jpg",
    href: "https://github.com/skmandal3240/SIA",
    stat: "Safety governor and consent architecture",
  },
];

const capabilities = [
  {
    icon: Layers3,
    id: "01 / LOCAL INTELLIGENCE",
    title: "On-device systems",
    copy: "Builds assistants where screen, voice, file, and memory data stay on the device by default.",
  },
  {
    icon: Radio,
    id: "02 / MULTI-MODAL",
    title: "Voice & perception",
    copy: "Pairs screen understanding, audio input, streaming responses, and clear visual guidance into one considered interface.",
  },
  {
    icon: ShieldCheck,
    id: "03 / GOVERNANCE",
    title: "Trust by design",
    copy: "Uses capability grants, privacy-preserving gateways, consent flows, audit trails, and encryption where it matters.",
  },
  {
    icon: Braces,
    id: "04 / SYSTEMS",
    title: "Full-stack systems craft",
    copy: "Works across Rust, Swift, Python, React, CI, Docker, browser automation, and production tooling.",
  },
];

function TelemetryLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="telemetry-label">
      <span className="telemetry-dot" /> {children}
    </span>
  );
}

function PrismCore() {
  const frame = useRef<HTMLDivElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rotateX = useSpring(useTransform(rawY, [-0.5, 0.5], [12, -12]), {
    stiffness: 110,
    damping: 22,
  });
  const rotateY = useSpring(useTransform(rawX, [-0.5, 0.5], [-16, 16]), {
    stiffness: 110,
    damping: 22,
  });

  const move = (event: React.PointerEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - bounds.left) / bounds.width - 0.5);
    rawY.set((event.clientY - bounds.top) / bounds.height - 0.5);
  };

  return (
    <div className="core-stage" onPointerMove={move} onPointerLeave={() => { rawX.set(0); rawY.set(0); }} ref={frame}>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="orbit orbit-three" />
      <div className="orbit-marker marker-one" />
      <div className="orbit-marker marker-two" />
      <motion.div className="prism-assembly" style={{ rotateX, rotateY }}>
        <div className="prism-halo" />
        <div className="prism-shell prism-shell-a" />
        <div className="prism-shell prism-shell-b" />
        <div className="prism-core">
          <span />
          <span />
          <span />
        </div>
        <div className="core-reflection" />
      </motion.div>
      <div className="core-axis axis-x" />
      <div className="core-axis axis-y" />
      <div className="core-caption caption-north">INFERENCE / LOCAL</div>
      <div className="core-caption caption-east">04.12</div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="site-shell">
      <div className="noise-layer" aria-hidden="true" />
      <aside className="instrument-rail" aria-label="Section coordinates">
        <a className="rail-mark" href="#top"><img src="/manus-storage/saurabh-orbit-mark_82a45df5.png" alt="" /></a>
        <div className="rail-line" />
        <nav className="rail-nav"><a href="#top"><span>00</span><i /> Origin</a><a href="#work"><span>01</span><i /> Work</a><a href="#systems"><span>02</span><i /> System</a><a href="#credentials"><span>03</span><i /> Evidence</a><a href="#contact"><span>04</span><i /> Contact</a></nav>
        <span className="rail-status">ONLINE</span>
      </aside>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Saurabh Mandal home">
          <img src="/manus-storage/saurabh-orbit-mark_82a45df5.png" alt="Saurabh Mandal orbital monogram" />
          <span className="brand-wordmark">SAURABH<span>MANDAL</span></span>
        </a>
        <span className="header-coordinates">NODE / 25.6176° N · 85.1430° E</span>
        <a className="header-link" href="#contact">Start a conversation <ArrowUpRight size={15} /></a>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="hero-gridline hero-gridline-v" />
          <div className="hero-gridline hero-gridline-h" />
          <div className="hero-copy">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.23, 1, 0.32, 1] }}
            >
              <TelemetryLabel>AI SYSTEMS ENGINEER / PATNA, INDIA</TelemetryLabel>
            </motion.div>
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: 0.08, ease: [0.23, 1, 0.32, 1] }}
            >
              Intelligence,<br />
              <em>under control.</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            >
              I’m Saurabh Mandal. I design local-first AI companions, browser infrastructure, and privacy-aware systems that turn powerful models into responsible tools.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.23, 1, 0.32, 1] }}
            >
              <a className="primary-action" href="#work">Explore selected work <ArrowDown size={16} /></a>
              <a className="quiet-action" href="/manus-storage/saurabh-orbit-mark_82a45df5.png" download="saurabh-mandal-mark.png"><Download size={16} /> Brand mark</a>
            </motion.div>
          </div>
          <motion.div
            className="hero-visual-wrap"
            initial={{ opacity: 0, scale: 0.95, x: 32 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.18, ease: [0.23, 1, 0.32, 1] }}
          >
            <div className="hero-image-field"><img src="/manus-storage/saurabh-orbital-hero_d37a0c7e.jpg" alt="Abstract orbital system core" /></div>
            <PrismCore />
          </motion.div>
          <div className="hero-footnote"><span>AVAILABLE FOR COLLABORATION</span><span>SCROLL TO ORBIT</span></div>
        </section>

        <section id="work" className="work-section" aria-labelledby="work-heading">
          <div className="section-intro work-intro">
            <div><TelemetryLabel>SELECTED WORK / 2024–2026</TelemetryLabel></div>
            <h2 id="work-heading">Systems with a <em>human</em> edge.</h2>
            <p>Four ambitious explorations in local intelligence, trustworthy automation, and interfaces that make complexity usable.</p>
          </div>

          <div className="project-rail">
            {projects.map((project, index) => (
              <motion.article
                className={`project-card project-card-${index + 1}`}
                key={project.index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.55, delay: index * 0.06, ease: [0.23, 1, 0.32, 1] }}
                whileHover={{ y: -8, rotateX: 1.2, rotateY: index % 2 === 0 ? -1.4 : 1.4 }}
              >
                <div className="project-image"><img src={project.image} alt="" /><div className="image-scan" /></div>
                <div className="project-topline"><span>{project.index}</span><span>{project.code}</span></div>
                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="stack-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
                <div className="project-footer"><span>{project.stat}</span><a href={project.href} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={19} /></a></div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="systems" className="systems-section" aria-labelledby="systems-heading">
          <div className="systems-visual" aria-hidden="true">
            <div className="systems-rings"><i /><i /><i /></div>
            <div className="systems-node node-a" /><div className="systems-node node-b" /><div className="systems-node node-c" />
            <div className="systems-plate"><span>LOCAL</span><strong>↗</strong><span>CONTROL</span></div>
          </div>
          <div className="systems-content">
            <TelemetryLabel>WORKING PRINCIPLES</TelemetryLabel>
            <h2 id="systems-heading">The model is only one part of the system.</h2>
            <p className="systems-lead">Great AI experiences also need interfaces, agency, performance, provenance, and safeguards. I design across the layers that make that possible.</p>
            <div className="capability-list">
              {capabilities.map((capability) => {
                const Icon = capability.icon;
                return <article className="capability" key={capability.id}>
                  <div className="capability-icon"><Icon size={19} /></div>
                  <div><span>{capability.id}</span><h3>{capability.title}</h3><p>{capability.copy}</p></div>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section className="signal-section" aria-label="Engineering philosophy">
          <div className="signal-grid" />
          <div className="signal-copy"><Sparkles size={19} /><p>“The most useful intelligence doesn’t ask for blind trust. It earns it through clarity, consent, and control.”</p></div>
          <div className="signal-meta"><span>CALIBRATION / 01</span><span>PRIVACY-AWARE</span><span>LOCAL-FIRST</span><span>HUMAN-OPERABLE</span></div>
        </section>

        <section id="credentials" className="credentials-section" aria-labelledby="credentials-heading">
          <div className="credentials-heading"><TelemetryLabel>SYSTEM EVIDENCE / VERIFIED SIGNALS</TelemetryLabel><h2 id="credentials-heading">Proof beyond the <em>prototype.</em></h2></div>
          <div className="credentials-layout">
            <article className="education-card">
              <div className="card-corner">FOUNDATION / 01</div>
              <span className="eyebrow">SYSTEMS &amp; INTERFACE PRACTICE</span>
              <h3>Computer Science<br />engineering base.</h3>
              <p>Dr. A.P.J. Abdul Kalam University · 2021–2025 · CGPA 7.22</p>
              <div className="education-line" /><span className="eyebrow">EXPERIENCE HIGHLIGHTS</span>
              <ul><li><Check size={14} /> React.js and measured UI optimization at Zucol Pvt. Ltd.</li><li><Check size={14} /> Product-facing frontend development at Digichum Infotech.</li><li><Check size={14} /> Applied ML: fraud detection with Scikit-learn and TensorFlow.</li></ul>
            </article>
            <article className="certifications-card">
              <div className="card-corner">SIGNALS / 02</div>
              <h3>Evidence,<br /><em>registered.</em></h3>
              <div className="cert-list">
                <div><span>01</span><strong>JavaScript foundations</strong><small>IBM SkillsBuild · w3schools · 2025</small></div>
                <div><span>02</span><strong>Data analytics</strong><small>Magnoto Software · 2026</small></div>
                <div><span>03</span><strong>Cyber security awareness</strong><small>Palo Alto Networks</small></div>
                <div><span>04</span><strong>Python &amp; digital growth</strong><small>Coursera · Google</small></div>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-heading">
          <div className="contact-orbit" aria-hidden="true"><span /><span /><span /></div>
          <div className="contact-copy"><TelemetryLabel>OPEN CHANNEL / 2026</TelemetryLabel><h2 id="contact-heading">Let’s build an intelligent system people can <em>trust.</em></h2></div>
          <div className="contact-actions">
            <a className="contact-email" href="mailto:skmandal3240@gmail.com">skmandal3240@gmail.com <ArrowUpRight /></a>
            <div className="contact-links"><a href="https://github.com/skmandal3240" target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a><a href="https://linkedin.com/in/saurabh-mandal-3a31a5230" target="_blank" rel="noreferrer"><Linkedin size={18} /> LinkedIn</a><a href="mailto:skmandal3240@gmail.com"><Mail size={18} /> Email</a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><span>© 2026 SAURABH MANDAL</span><span>DESIGNED AS AN ORBITAL SYSTEM</span><a href="#top">BACK TO ORIGIN ↑</a></footer>
    </div>
  );
}
