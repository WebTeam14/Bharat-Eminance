import { createFileRoute } from "@tanstack/react-router";
import {
  HeartPulse,
  GraduationCap,
  HandHeart,
  Briefcase,
  Stethoscope,
  BookOpen,
  Users,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import heroImg from "@/assets/hero.jpg";
import educationImg from "@/assets/education.jpg";
import medicalImg from "@/assets/medical.jpg";
import employmentImg from "@/assets/employment.jpg";
import logoImg from "@/assets/logo.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bharat Eminence Foundation — Health, Education & Hope for Every Indian" },
      {
        name: "description",
        content:
          "Bharat Eminence Foundation works across India to deliver free medical care, quality education, and employment support to those who need it most.",
      },
      { property: "og:title", content: "Bharat Eminence Foundation — Health, Education & Hope" },
      {
        property: "og:description",
        content:
          "Free medical camps, scholarships, and employment programs building a stronger, healthier, more skilled India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: HeartPulse,
    title: "Medical Care",
    description:
      "Free health camps, mobile clinics, and treatment support bringing quality healthcare to rural and underserved communities.",
    image: medicalImg,
    points: ["Free health check-up camps", "Mobile medical units", "Surgery & treatment aid", "Medicine distribution"],
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Scholarships, school support, and digital literacy programs that open doors for children and young adults across Bharat.",
    image: educationImg,
    points: ["Scholarships for students", "School infrastructure support", "Digital literacy drives", "Career guidance & mentoring"],
  },
  {
    icon: Briefcase,
    title: "Employment",
    description:
      "Skill training, interview preparation, and employment support that turn education into a steady livelihood for students and first-generation job seekers.",
    image: employmentImg,
    points: ["Campus & open job drives", "Resume, interview & soft-skill training", "Employer & industry partnerships", "Internships and apprenticeships"],
  },
];

const stats = [
  { value: "250+", label: "Medical camps held" },
  { value: "12,000+", label: "Students supported" },
  { value: "85,000+", label: "Lives touched" },
  { value: "120+", label: "Villages reached" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={logoImg}
              alt="Bharat Eminence Foundation emblem"
              width={986}
              height={844}
              className="h-11 w-auto shrink-0 object-contain"
            />
            <span className="font-display text-lg font-semibold leading-tight">
              Bharat Eminence
              <span className="block text-xs font-normal tracking-widest text-muted-foreground uppercase">
                Foundation
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#medical" className="text-foreground/80 transition-colors hover:text-primary">
              Medical
            </a>
            <a href="#education" className="text-foreground/80 transition-colors hover:text-primary">
              Education
            </a>
            <a href="#employment" className="text-foreground/80 transition-colors hover:text-primary">
              Employment
            </a>
            <a href="#impact" className="text-foreground/80 transition-colors hover:text-primary">
              Impact
            </a>
          </nav>
          <a
            href="#donate"
            className="rounded-full bg-saffron px-5 py-2.5 text-sm font-semibold text-saffron-foreground shadow-sm transition-transform hover:scale-105"
          >
            Donate Now
          </a>
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Community health and education camp in India" className="h-full w-full object-cover" width={1920} height={1088} />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/20" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-6 py-32 md:py-44">
          <p className="animate-fade-up mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-saffron/60 bg-foreground/30 px-4 py-1.5 text-xs font-semibold tracking-widest text-saffron uppercase backdrop-blur">
            Serving Bharat Since 2015
          </p>
          <h1 className="animate-fade-up max-w-2xl text-balance text-4xl font-bold leading-tight text-background md:text-6xl">
            Health, Education & Hope for Every Indian
          </h1>
          <p className="animate-fade-up-delay mt-6 max-w-xl text-lg text-background/85">
            Bharat Eminence Foundation brings free medical care, quality education, and real
            career opportunities to the people who need it most — one village, one family, one
            child at a time.
          </p>
          <div className="animate-fade-up-delay mt-10 flex flex-wrap gap-4">
            <a
              href="#donate"
              className="inline-flex items-center gap-2 rounded-full bg-saffron px-7 py-3.5 font-semibold text-saffron-foreground shadow-lg transition-transform hover:scale-105"
            >
              Support Our Mission <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#pillars"
              className="inline-flex items-center gap-2 rounded-full border border-background/40 px-7 py-3.5 font-semibold text-background backdrop-blur transition-colors hover:bg-background/10"
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="impact" className="border-b border-border bg-primary py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl font-bold text-saffron md:text-5xl">{stat.value}</p>
              <p className="mt-2 text-sm font-medium text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section id="pillars" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-widest text-saffron uppercase">What We Do</p>
          <h2 className="mt-3 text-balance text-3xl font-bold md:text-5xl">Three Pillars of Change</h2>
          <p className="mt-4 text-muted-foreground">
            Our work rests on three pillars — healing the sick, educating the young, and
            building careers that lift whole families.
          </p>
        </div>

        <div className="mt-16 space-y-24">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              id={i === 0 ? "medical" : i === 1 ? "education" : "employment"}
              className={`grid items-center gap-10 md:grid-cols-2 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-3xl shadow-xl">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div>
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <pillar.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-6 text-3xl font-bold">{pillar.title}</h3>
                <p className="mt-4 text-lg text-muted-foreground">{pillar.description}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {pillar.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm font-medium">
                      <span className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-saffron" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission quote */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="font-display text-2xl font-medium leading-relaxed text-foreground md:text-3xl">
            "The true measure of a nation's eminence is how it cares for its weakest. We work every
            day so that no child is denied education and no family is denied healthcare."
          </p>
          <p className="mt-6 text-sm font-semibold tracking-widest text-muted-foreground uppercase">
            — Our Founding Promise
          </p>
        </div>
      </section>

      {/* Get involved / Donate */}
      <section id="donate" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: HandHeart,
              title: "Donate",
              text: "Your contribution funds medicines, books, and meals for families across India.",
              cta: "Give Today",
            },
            {
              icon: Users,
              title: "Volunteer",
              text: "Join our camps and classrooms — doctors, teachers, and helping hands are always welcome.",
              cta: "Join Us",
            },
            {
              icon: Stethoscope,
              title: "Partner",
              text: "Hospitals, schools, and companies can partner with us to multiply our reach.",
              cta: "Partner With Us",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary">
                <card.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-2xl font-bold">{card.title}</h3>
              <p className="mt-3 text-muted-foreground">{card.text}</p>
              <a
                href="mailto:connect@bharateminence.org"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-primary transition-colors group-hover:text-saffron"
              >
                {card.cta} <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-3.5">
              <div className="w-fit rounded-2xl bg-card p-2.5">
                <img
                  src={logoImg}
                  alt="Bharat Eminence Foundation"
                  width={1254}
                  height={1254}
                  className="h-16 w-auto object-contain"
                />
              </div>
              <div className="font-display text-xl font-bold leading-tight text-primary-foreground">
                Bharat Eminence
                <span className="block text-xs font-medium tracking-widest text-saffron uppercase">
                  Foundation
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/75">
              A registered non-profit working for health, education, and meaningful livelihoods
              across India.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-saffron uppercase">Our Work</h4>
            <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><HeartPulse className="h-4 w-4" /> Medical Camps & Clinics</li>
              <li className="flex items-center gap-2"><BookOpen className="h-4 w-4" /> Education & Scholarships</li>
              <li className="flex items-center gap-2"><Briefcase className="h-4 w-4" /> Employment & Careers</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold tracking-widest text-saffron uppercase">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> connect@bharateminence.org</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 11 4000 0000</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> New Delhi, India</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-primary-foreground/15 px-6 pt-6 text-center text-xs text-primary-foreground/60">
          © 2026 Bharat Eminence Foundation. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
