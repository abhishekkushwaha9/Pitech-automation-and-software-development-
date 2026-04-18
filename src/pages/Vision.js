import React, { useRef } from "react";
import "./Vision.css";
import ThreeHero from "../components/Vision/ThreeHero";
import ThreeBackground from "../components/Vision/ThreeBackground";
import Counter from "../components/Vision/Counter";
import Reveal from "../components/Vision/Reveal";
import {
  IconCpu,
  IconShield,
  IconTarget,
  IconTrendingUp,
  IconLayers,
  IconAlert,
  IconUsers,
  IconLeaf,
  IconFactory,
  IconGear,
  IconChart,
  IconNetwork,
  IconCode,
  IconWrench,
  IconArrowRight,
  IconCheck,
  IconSparkle,
} from "../components/Vision/Icons";

/* ---------------- Data ---------------- */

const visionPillars = [
  {
    title: "Technology",
    description:
      "Be at the forefront of IIoT, Edge AI, and Industry 4.0 adoption in Indian industry.",
    Icon: IconCpu,
  },
  {
    title: "Reach",
    description:
      "Expand our footprint across manufacturing, pharma, F&B, infrastructure, and smart cities.",
    Icon: IconNetwork,
  },
  {
    title: "Talent",
    description:
      "Build a world-class team of automation, IoT engineers, developers, and project professionals.",
    Icon: IconUsers,
  },
  {
    title: "Impact",
    description:
      "Deliver systems that reduce downtime, save energy, and create lasting competitive advantage.",
    Icon: IconTrendingUp,
  },
];

const coreValues = [
  {
    Icon: IconSparkle,
    title: "Innovation First",
    description:
      "We engineer tomorrow's solutions today — pushing the frontier of IoT, AI, and industrial automation.",
  },
  {
    Icon: IconShield,
    title: "Integrity Always",
    description:
      "We operate with complete transparency, honesty, and accountability in every project and promise.",
  },
  {
    Icon: IconTarget,
    title: "Customer at Centre",
    description:
      "Every solution is designed around the customer's real problem. Their success is our success.",
  },
  {
    Icon: IconTrendingUp,
    title: "Excellence in Delivery",
    description:
      "We don't just complete projects — we deliver measurable value, on time, every time.",
  },
  {
    Icon: IconLayers,
    title: "Technology Leadership",
    description:
      "We stay ahead of the curve — adopting Industry 4.0, IIoT, SCADA, PLC, and emerging digital technologies.",
  },
  {
    Icon: IconAlert,
    title: "Safety & Compliance",
    description:
      "Industrial safety and regulatory compliance are non-negotiable in every system we deploy.",
  },
  {
    Icon: IconUsers,
    title: "Team & People First",
    description:
      "We invest in our people, build expertise, and foster a culture of continuous learning.",
  },
  {
    Icon: IconLeaf,
    title: "Sustainable Impact",
    description:
      "We build smarter, greener industrial systems that reduce waste, save energy, and future-proof operations.",
  },
];

const expertiseAreas = [
  {
    Icon: IconNetwork,
    title: "IoT Solutions",
    description:
      "Smart sensors, edge computing, cloud connectivity, real-time dashboards, and industrial IoT architecture.",
    tags: ["IIoT", "Edge", "Cloud", "Dashboards"],
  },
  {
    Icon: IconGear,
    title: "Industrial Automation",
    description:
      "PLC / SCADA programming, HMI design, process automation, machine integration, and control panels.",
    tags: ["PLC", "SCADA", "HMI", "Process Control"],
  },
  {
    Icon: IconChart,
    title: "Digitalization",
    description:
      "Industry 4.0 transformation, MES, CMMS, digital twin, data analytics, and enterprise integration.",
    tags: ["Industry 4.0", "MES", "CMMS", "Digital Twin"],
  },
  {
    Icon: IconLayers,
    title: "System Integration",
    description:
      "End-to-end integration of OT and IT systems — connecting the shop floor to the boardroom.",
    tags: ["OT/IT", "Integration", "Connectivity", "Data Flow"],
  },
  {
    Icon: IconCode,
    title: "Software Development",
    description:
      "Custom SCADA, IoT applications, mobile dashboards, reporting tools, and industrial software.",
    tags: ["Custom Apps", "SCADA", "Mobile", "Reporting"],
  },
  {
    Icon: IconWrench,
    title: "AMC & Support",
    description:
      "Annual Maintenance Contracts, remote monitoring, field service support, and system upgrades.",
    tags: ["Maintenance", "Support", "Monitoring", "Upgrades"],
  },
];

const promiseCustomers = [
  "We will understand your problem before we propose a solution.",
  "We will deliver what we promise — on time, on budget, and on scope.",
  "We will be available after delivery — not just during the sale.",
  "We will continuously improve our solutions based on your feedback.",
  "We will treat your plant as if it were our own.",
];

const promiseTeam = [
  "We will invest in your growth — technically and professionally.",
  "We will reward performance, initiative, and ownership.",
  "We will ensure your work creates real impact — not just billable hours.",
  "We will build a workplace where engineers are proud to grow.",
  "We will lead by example — with integrity, discipline, and ambition.",
];

/* ---------------- Helpers ---------------- */

function SectionLabel({ children }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-700/20 bg-cyan-50 text-cyan-800 text-xs font-medium tracking-[0.2em] uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 shadow-[0_0_8px_rgba(8,145,178,0.5)]" />
      {children}
    </div>
  );
}

function SectionTitle({
  label,
  title,
  subtitle,
}) {
  return (
    <Reveal>
      <div className="text-center max-w-3xl mx-auto mb-6">
        <SectionLabel>{label}</SectionLabel>
        <h2 className="mt-5 text-4xl md:text-5xl font-semibold text-slate-900 tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="mt-6 flex items-center justify-center gap-2">
          <span className="h-px w-10 bg-gradient-to-r from-transparent to-cyan-600/50" />
          <span className="w-1.5 h-1.5 rotate-45 bg-amber-600" />
          <span className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-600/50" />
        </div>
      </div>
    </Reveal>
  );
}

/* Card with mouse-tracked subtle highlight (light theme) */
function GlowCard({
  children,
  className = "",
}) {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-cyan-600/40 hover:-translate-y-1 shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_50px_-15px_rgba(8,145,178,0.25)] ${className}`}
      style={
        {
          backgroundImage:
            "radial-gradient(420px circle at var(--mx,50%) var(--my,50%), rgba(8,145,178,0.08), transparent 40%)",
        }
      }
    >
      {/* corner accents */}
      <span className="absolute top-0 left-0 w-8 h-8 border-l border-t border-cyan-600/40 rounded-tl-2xl opacity-60 group-hover:opacity-100 transition" />
      <span className="absolute bottom-0 right-0 w-8 h-8 border-r border-b border-amber-600/40 rounded-br-2xl opacity-60 group-hover:opacity-100 transition" />
      {children}
    </div>
  );
}

/* ---------------- Page ---------------- */

export default function Vision() {
  React.useEffect(() => {
    // SEO logic
    document.title = "Our Expertise - PiTech Automation";
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.pitechautomation.com/about/vision');

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        metaDesc.setAttribute("content", "Discover the technical vision and expertise driving PiTech Automation. From IIoT and PLC to Industry 4.0 transformation.");
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-800 selection:bg-cyan-200 selection:text-cyan-900 overflow-x-hidden">
      <ThreeBackground />

      {/* ========== HERO ========== */}
      <section
        id="top"
        className="relative min-h-[88vh] flex items-center pt-10 pb-6 overflow-hidden"
      >
        {/* Three.js scene */}
        <div className="absolute inset-0">
          <ThreeHero />
          {/* radial mask to fade edges into the page bg */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#f8fafc_78%)]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(8,145,178,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(8,145,178,0.35) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 70%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 25%, transparent 70%)",
          }}
        />

        <div className="relative z-10 w-full px-2 sm:px-3 lg:px-4 xl:px-6 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white/80 backdrop-blur text-xs tracking-[0.25em] text-slate-700 uppercase shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              Pitech Automation & Software Solutions
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-slate-900">
              Empowering Industry.
              <br />
              <span className="bg-gradient-to-r from-cyan-700 via-cyan-600 to-amber-600 bg-clip-text text-transparent">
                Enabling the Future.
              </span>
            </h1>
          </Reveal>

           <Reveal delay={300}>
             <p className="mt-4 text-base md:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Industrial IoT · Automation · Digitalization · Industry 4.0
              <br />
              <span className="text-slate-500 text-sm">
                Engineering measurable outcomes for India's most demanding
                industries.
              </span>
            </p>
          </Reveal>

           <Reveal delay={450}>
             <div className="mt-6 flex items-center justify-center gap-4 flex-wrap">
              <a
                href="#vision"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-cyan-700 text-white font-medium text-sm hover:bg-cyan-800 transition shadow-[0_8px_24px_-8px_rgba(8,145,178,0.5)]"
              >
                Explore Our Vision
                <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
              <a
                href="#expertise"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-slate-300 bg-white/70 backdrop-blur text-slate-700 hover:border-cyan-600/50 hover:text-cyan-700 transition text-sm"
              >
                What We Do
              </a>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={600}>
            <div className="mt-8 grid grid-cols-3 gap-px max-w-3xl mx-auto bg-slate-200 border border-slate-200 rounded-xl overflow-hidden backdrop-blur shadow-[0_10px_40px_-15px_rgba(15,23,42,0.15)]">
              {[
                { v: 5, suffix: "+", label: "Years of Excellence" },
                { v: 120, suffix: "+", label: "Projects Delivered" },
                { v: 80, suffix: "+", label: "Industry Clients" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/90 px-4 py-6 text-center"
                >
                  <div className="text-3xl md:text-4xl font-semibold text-slate-900 tabular-nums">
                    <Counter end={s.v} />
                    <span className="text-amber-600">{s.suffix}</span>
                  </div>
                  <div className="mt-2 text-[11px] tracking-[0.18em] uppercase text-slate-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-slate-400 text-[10px] tracking-[0.3em] uppercase">
          <span>Scroll</span>
          <span className="block w-px h-10 bg-gradient-to-b from-cyan-600/60 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ========== VISION STATEMENT ========== */}
      <section id="vision" className="relative py-8 lg:py-10 px-2 sm:px-3 lg:px-4 xl:px-6">
        <div className="w-full max-w-[1440px] mx-auto">
          <SectionTitle
            label="Our Vision"
            title="Where We Are Going"
            subtitle="A clear North Star guiding every project, partnership and product we deliver."
          />

          <Reveal>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-cyan-600/30 via-transparent to-amber-600/30 blur-sm" />
              <div className="relative rounded-2xl border border-slate-200 bg-white/85 backdrop-blur-sm p-10 md:p-14 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.2)]">
                <div className="absolute top-6 left-6 text-cyan-600/30 text-6xl font-serif leading-none">
                  &ldquo;
                </div>
                <p className="text-xl md:text-2xl text-slate-800 leading-relaxed text-center font-light italic">
                  To be India's most trusted and innovative Industrial IoT and
                  Automation Systems House — recognized for engineering
                  excellence, digital transformation leadership, and the
                  measurable value we deliver to every industry we serve.
                </p>
                <div className="absolute bottom-6 right-6 text-cyan-600/30 text-6xl font-serif leading-none rotate-180">
                  &ldquo;
                </div>
              </div>
            </div>
          </Reveal>

          {/* Pillars */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {visionPillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <GlowCard className="p-7 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 grid place-items-center rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-700 group-hover:border-cyan-500 group-hover:bg-cyan-100 group-hover:text-cyan-800 transition">
                      <p.Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-900">
                    {p.title}
                  </h3>
                  <div className="mt-2 h-px w-8 bg-gradient-to-r from-cyan-600 to-transparent group-hover:w-16 transition-all duration-500" />
                  <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CORE VALUES ========== */}
      <section id="values" className="relative py-8 lg:py-10 px-2 sm:px-3 lg:px-4 xl:px-6">
        {/* divider line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        <div className="w-full max-w-[1440px] mx-auto">
          <SectionTitle
            label="Core Values"
            title="The Principles That Define Us"
            subtitle="Eight commitments that shape how we engineer, deliver and grow."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <GlowCard className="p-6 h-full">
                  <div className="w-11 h-11 grid place-items-center rounded-lg bg-gradient-to-br from-cyan-50 to-white border border-slate-200 text-cyan-700 group-hover:text-amber-700 group-hover:border-amber-500/50 group-hover:from-amber-50 transition-all duration-500">
                    <v.Icon className="w-5 h-5" />
                  </div>
                  <h3 className="mt-5 text-base font-semibold text-slate-900">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {v.description}
                  </p>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== EXPERTISE ========== */}
      <section id="expertise" className="relative py-8 lg:py-10 px-3 sm:px-4 lg:px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        <div className="w-full max-w-[1440px] mx-auto">
          <SectionTitle
            label="What We Do"
            title="End-to-End Industrial Technology"
            subtitle="A full stack of capabilities — from sensor to dashboard, shop floor to boardroom."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertiseAreas.map((e, i) => (
              <Reveal key={e.title} delay={i * 70}>
                <GlowCard className="p-7 h-full flex flex-col">
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 grid place-items-center rounded-xl bg-gradient-to-br from-cyan-50 to-slate-50 border border-slate-200 text-cyan-700 group-hover:rotate-6 group-hover:border-cyan-400 transition-all duration-500">
                      <e.Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      / {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-slate-900">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed flex-1">
                    {e.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {e.tags.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] tracking-wider uppercase px-2 py-1 rounded border border-slate-200 bg-slate-50 text-slate-600 group-hover:border-cyan-500/40 group-hover:text-cyan-700 group-hover:bg-cyan-50 transition"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROMISE ========== */}
      <section id="promise" className="relative py-8 lg:py-10 px-3 sm:px-4 lg:px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

        <div className="w-full max-w-[1440px] mx-auto">
          <SectionTitle
            label="The Pitech Promise"
            title="What Every Stakeholder Can Count On"
            subtitle="Commitments we make — and keep — to those who build and benefit from our work."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {[
              {
                kind: "Customers",
                heading: "For Our Customers",
                Icon: IconFactory,
                items: promiseCustomers,
                accent: "cyan",
              },
              {
                kind: "Team",
                heading: "For Our Team",
                Icon: IconUsers,
                items: promiseTeam,
                accent: "amber",
              },
            ].map((block, idx) => (
              <Reveal key={block.kind} delay={idx * 120}>
                <GlowCard className="p-8 md:p-10 h-full">
                  <div className="flex items-center gap-4 pb-5 border-b border-slate-200">
                    <div
                      className={`w-12 h-12 grid place-items-center rounded-lg border ${
                        block.accent === "cyan"
                          ? "border-cyan-600/40 text-cyan-700 bg-cyan-50"
                          : "border-amber-600/40 text-amber-700 bg-amber-50"
                      }`}
                    >
                      <block.Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] tracking-[0.25em] uppercase text-slate-500">
                        Promise · 0{idx + 1}
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {block.heading}
                      </h3>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-4">
                    {block.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <span
                          className={`flex-shrink-0 mt-0.5 w-5 h-5 grid place-items-center rounded-full border ${
                            block.accent === "cyan"
                              ? "border-cyan-600/50 text-cyan-700 bg-cyan-50"
                              : "border-amber-600/50 text-amber-700 bg-amber-50"
                          } group-hover/item:scale-110 transition`}
                        >
                          <IconCheck className="w-3 h-3" strokeWidth={2.5} />
                        </span>
                        <span className="text-sm text-slate-700 leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </Reveal>
            ))}
          </div>

          {/* Tagline */}
          <Reveal delay={200}>
            <div className="mt-10 text-center">
              <div className="inline-block relative px-10 py-6 rounded-2xl border border-slate-200 bg-white/85 backdrop-blur shadow-[0_10px_40px_-15px_rgba(15,23,42,0.15)]">
                <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-cyan-600 to-transparent" />
                <p className="text-lg md:text-2xl font-light text-slate-900 tracking-wide">
                  <span className="text-cyan-700 font-medium">Connecting</span>{" "}
                  Machines.{" "}
                  <span className="text-cyan-700 font-medium">Digitizing</span>{" "}
                  Operations.{" "}
                  <span className="text-amber-700 font-medium">Delivering</span>{" "}
                  Growth.
                </p>
                <div className="absolute -bottom-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-amber-600 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ========== COMPANY HIGHLIGHT - GALAXY SECTION ========== */}
      <section className="relative py-10 px-3 sm:px-4 lg:px-6 mt-6 overflow-hidden">
        {/* Animated Galaxy Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50" />
          {/* Pulsing orbs */}
          <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-cyan-200/40 blur-[100px] animate-[pulse_8s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-amber-200/30 blur-[100px] animate-[pulse_10s_ease-in-out_infinite_1s]" />
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-indigo-100/30 blur-[120px] animate-[pulse_12s_ease-in-out_infinite_2s]" />
          {/* Subtle grid */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(rgba(8,145,178,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(8,145,178,0.5) 1px, transparent 1px)",
              backgroundSize: "50px 50px",
            }}
          />
          {/* Twinkling stars effect */}
          <div className="absolute inset-0">
            <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-cyan-400 rounded-full animate-[ping_3s_ease-in-out_infinite]" />
            <div className="absolute top-[60%] left-[85%] w-1 h-1 bg-amber-400 rounded-full animate-[ping_4s_ease-in-out_infinite_1s]" />
            <div className="absolute top-[35%] left-[70%] w-0.5 h-0.5 bg-cyan-600 rounded-full animate-[pulse_2s_ease-in-out_infinite]" />
            <div className="absolute top-[75%] left-[25%] w-0.5 h-0.5 bg-amber-600 rounded-full animate-[pulse_3s_ease-in-out_infinite_0.5s]" />
            <div className="absolute top-[15%] left-[60%] w-1 h-1 bg-indigo-400 rounded-full animate-[ping_5s_ease-in-out_infinite_2s]" />
          </div>
        </div>

        <div className="relative w-full max-w-[1440px] mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <div className="mb-8">
                <img 
                  src="/images/pitech-logo.png" 
                  alt="PiTech Automation" 
                  className="h-12 w-auto mx-auto" 
                />
              </div>
              
              <p className="max-w-2xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed">
                A Complete Industrial Solution - Custom automation, machine manufacturing, and premium product trading. 
                Efficiency and reliability with our SPMs, Laser Marking, and Testing Benches.
              </p>

              {/* Capability chips */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
                {["IIoT", "PLC / SCADA", "Industry 4.0", "AMC & Support"].map((chip) => (
                  <span 
                    key={chip}
                    className="group relative inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 bg-white/70 backdrop-blur text-sm font-medium text-slate-700 shadow-sm hover:border-cyan-500/50 hover:text-cyan-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-600 group-hover:animate-pulse" />
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Feature cards with diamond icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { 
                icon: "◈",
                title: "Support", 
                subtitle: "24/7", 
                desc: "Remote & Field response",
                color: "cyan"
              },
              { 
                icon: "◈",
                title: "Quality", 
                subtitle: "100%", 
                desc: "Rigorous system check",
                color: "amber"
              },
              { 
                icon: "◈",
                title: "Warranty", 
                subtitle: "5 Yrs", 
                desc: "Extended maintenance",
                color: "cyan"
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={item * 100}>
                <div className="group relative">
                  {/* Glow behind */}
                  <div className={`absolute -inset-0.5 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition ${item.color === 'cyan' ? 'bg-cyan-400' : 'bg-amber-400'}`} />
                  
                  <div className="relative h-full rounded-2xl border border-slate-200 bg-white/80 backdrop-blur-xl p-8 shadow-[0_8px_30px_-12px_rgba(15,23,42,0.15)] hover:shadow-[0_20px_50px_-15px_rgba(8,145,178,0.25)] hover:-translate-y-1 transition-all duration-500">
                    {/* Diamond icon */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border-2 ${item.color === 'cyan' ? 'border-cyan-200 bg-cyan-50 text-cyan-700 group-hover:border-cyan-400 group-hover:bg-cyan-100' : 'border-amber-200 bg-amber-50 text-amber-700 group-hover:border-amber-400 group-hover:bg-amber-100'} transition-all duration-300`}>
                        <span className="text-xl leading-none transform group-hover:rotate-45 transition-transform duration-500">{item.icon}</span>
                      </div>
                      <div className={`text-3xl font-bold tracking-tight ${item.color === 'cyan' ? 'text-cyan-700' : 'text-amber-600'}`}>
                        {item.subtitle}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                    
                    {/* Bottom accent */}
                    <div className={`absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent ${item.color === 'cyan' ? 'via-cyan-500/50' : 'via-amber-500/50'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom tagline */}
          <Reveal delay={400}>
            <div className="mt-20 pt-8 border-t border-slate-200/60">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-slate-500 font-medium w-full justify-center">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-600 animate-pulse" />
                    Engineered in India
                  </span>
                  <span className="w-px h-3 bg-slate-300" />
                  <span>Built for the World</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}