"use client"

import type React from "react"
import { useMemo, useState } from "react"

export default function CollegeAndCareerLinks() {
  const [lang, setLang] = useState("en")
  const t = useMemo(() => (lang === "en" ? en : es), [lang])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* WSFCS logo: replace src with an official PNG from the district brand portal if available locally */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/WSFCS_logo_placeholder.svg/120px-WSFCS_logo_placeholder.svg.png"
              alt={t.altLogo}
              className="w-12 h-12 object-contain rounded bg-white p-1 shadow"
              onError={(e) => {
                // graceful fallback if placeholder 404s
                ;(e.target as HTMLImageElement).style.display = "none"
              }}
            />
            <div>
              <h1 className="text-2xl font-bold leading-tight">{t.title}</h1>
              <p className="text-blue-100 text-sm">{t.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <LangToggle lang={lang} setLang={setLang} />
            <a
              href="#help"
              className="hidden sm:inline-flex px-3 py-2 rounded-2xl bg-yellow-400/90 text-blue-900 font-semibold shadow hover:bg-yellow-300 transition"
            >
              {t.needHelp}
            </a>
          </div>
        </div>
      </header>

      {/* Intro banner */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 flex flex-col gap-3">
          <p className="text-lg">{t.heroLine1}</p>
          <p className="text-sm text-blue-100">{t.heroLine2}</p>
        </div>
      </section>

      {/* Content grid */}
      <main className="max-w-6xl mx-auto px-4 py-8 grid gap-6 md:grid-cols-3">
        <Card title={t.sections.localScholarships.title} accent>
          <List items={t.sections.localScholarships.items} />
        </Card>

        <Card title={t.sections.stateScholarships.title}>
          <List items={t.sections.stateScholarships.items} />
        </Card>

        <Card title={t.sections.undocumented.title}>
          <List items={t.sections.undocumented.items} />
        </Card>

        <Card title={t.sections.affordableColleges.title} accent>
          <List items={t.sections.affordableColleges.items} />
        </Card>

        <Card title={t.sections.twoYear.title}>
          <List items={t.sections.twoYear.items} />
        </Card>

        <Card title={t.sections.careers.title}>
          <List items={t.sections.careers.items} />
        </Card>

        <Card title={t.sections.howToPay.title}>
          <List items={t.sections.howToPay.items} />
        </Card>

      
        <Card title={t.sections.tools.title}>
          <List items={t.sections.tools.items} />
        </Card>
      </main>

      {/* Disclaimer & footer */}
      <section className="max-w-6xl mx-auto px-4 pb-10">
        <div className="rounded-2xl bg-yellow-50 text-yellow-900 p-4 border border-yellow-200">
          <p className="text-sm">{t.disclaimer}</p>
        </div>
      </section>

      <footer className="bg-blue-900 text-blue-100">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="font-semibold">WS/FCS</span> · {t.footerLine}
          </div>
          <div className="flex gap-3 opacity-90">
            <a
              className="underline hover:opacity-100"
              href="https://www.wsfcs.k12.nc.us/page/wsfcs-brand-guidelines"
              target="_blank"
              rel="noreferrer"
            >
              {t.brandGuide}
            </a>
            <a
              className="underline hover:opacity-100"
              href="https://www.wsfcs.k12.nc.us/page/graphic-design-and-brand-standards"
              target="_blank"
              rel="noreferrer"
            >
              {t.logoAssets}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function LangToggle({ lang, setLang }: { lang: "en" | "es"; setLang: (l: "en" | "es") => void }) {
  return (
    <div className="flex rounded-2xl bg-white/10 border border-white/20 overflow-hidden">
      {(["en", "es"] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={
            "px-3 py-2 text-sm font-semibold transition " +
            (lang === code ? "bg-yellow-400 text-blue-900" : "text-white hover:bg-white/10")
          }
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

function Card({ title, children, accent = false }: { title: string; children: React.ReactNode; accent?: boolean }) {
  return (
    <div className={`rounded-2xl border p-5 shadow-sm bg-white ${accent ? "border-yellow-300" : "border-gray-200"}`}>
      <h2 className="text-lg font-bold mb-3 text-blue-900">{title}</h2>
      {children}
    </div>
  )
}

function List({ items }: { items: { label: string; href: string; note?: string }[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it) => (
        <li key={it.href} className="group">
          <a href={it.href} target="_blank" rel="noreferrer" className="inline-flex items-start gap-2">
            <span className="mt-[3px] h-2.5 w-2.5 rounded-full bg-yellow-400 group-hover:bg-yellow-300"></span>
            <div>
              <div className="font-medium text-blue-800 group-hover:underline">{it.label}</div>
              {it.note && <div className="text-sm text-gray-600">{it.note}</div>}
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}

// ————————————————————————————————————————————————
// CONTENT (EN/ES)
// ————————————————————————————————————————————————

const en = {
  title: "College and Career Links and Opportunities",
  subtitle: "Winston-Salem/Forsyth County Schools · Triad Area · Bilingual (EN/ES)",
  altLogo: "WS/FCS logo",
  needHelp: "Need help?",
  heroLine1:
    "Explore local scholarships, affordable degree options, apprenticeships, and free career training for English Learners and Latino families.",
  heroLine2:
    "Curated for WS/FCS students. Many resources offer information in Spanish and support for DACA/undocumented students.",
  brandGuide: "WS/FCS Brand Guide",
  logoAssets: "Official Logo Assets",
  disclaimer:
    "Deadlines, amounts, and eligibility change often—always confirm details on the official pages before applying.",
  footerLine: "College & Career resource hub for students and families (non-official WS/FCS site).",
  sections: {
    localScholarships: {
      title: "Local Scholarships (Forsyth / Triad)",
      items: [
        {
          label: "The Winston-Salem Foundation – One-Stop Scholarships",
          href: "https://www.wsfoundation.org/one-stop-scholarships",
          note: "150+ local funds with a single application.",
        },
        {
          label: "Winston-Salem Foundation – Scholarship Portal (AcademicWorks)",
          href: "https://wsfoundation.academicworks.com/",
          note: "Create an account to be auto-matched to local awards.",
        },
        {
          label: "Hispanic League Scholarship (Forsyth County)",
          href: "https://www.hispanicleague.org/education-initiative/hispanic-league-scholarship",
          note: "For Hispanic/Latino students from Forsyth County.",
        },
        {
          label: "Crosby Scholars Forsyth – Scholarships & Last Dollar Grants",
          href: "https://www.crosbyscholars.org/scholarships-financial-aid/",
          note: "For active Crosby Scholars; need-based Last Dollar Grant.",
        },
      ],
    },
    stateScholarships: {
      title: "North Carolina Scholarships & Grants",
      items: [
        {
          label: "CFNC Scholarship Search (Español disponible)",
          href: "https://www.cfnc.org/pay-for-college/scholarship-search/",
          note: "Filter by county, eligibility, and more.",
        },
        {
          label: "NC Hispanic College Fund (NCSHP)",
          href: "https://www.thencshp.org/nc-hispanic-college-fund",
          note: "$1,000–$2,000 awards for NC Hispanic/Latino grads.",
        },
      ],
    },
    undocumented: {
      title: "For DACA / Undocumented Students",
      items: [
        {
          label: "Golden Door Scholars (DACA/TPS/Undocumented)",
          href: "https://www.cfnc.org/pay-for-college/scholarship-search/golden-door-scholars/",
          note: "Up to ~$40,000; apply by fall (check dates).",
        },
        {
          label: "TheDream.US – National & Opportunity Scholarships",
          href: "https://www.thedream.us/scholarships/",
          note: "Largest scholarship for undocumented students; partner colleges directory.",
        },
      ],
    },
    affordableColleges: {
      title: "Affordable NC Universities (NC Promise)",
      items: [
        {
          label: "NC Promise Overview (UNC System)",
          href: "https://www.northcarolina.edu/impact/affordability-efficiency/nc-promise/",
          note: "In‑state tuition is $500/semester at select UNC campuses.",
        },
        {
          label: "UNC Pembroke – NC Promise details",
          href: "https://www.uncp.edu/about/nc-promise-uncp",
          note: "Example of total cost and FAQs.",
        },
        {
          label: "Western Carolina University – NC Promise FAQs",
          href: "https://www.wcu.edu/apply/undergraduate-admissions/costs-and-aid/ncpromise-faq.aspx",
          note: "Part‑time per‑credit info and more.",
        },
        {
          label: "Elizabeth City State University – NC Promise",
          href: "https://www.northcarolina.edu/impact/affordability-efficiency/nc-promise/",
          note: "NC Promise campus.",
        },
        {
          label: "Fayetteville State University – NC Promise",
          href: "https://www.northcarolina.edu/impact/affordability-efficiency/nc-promise/",
          note: "NC Promise campus.",
        },
      ],
    },
    twoYear: {
      title: "2‑Year Pathways (Forsyth Tech)",
      items: [
        {
          label: "Forsyth Tech – Scholarships Portal",
          href: "https://forsythtech.academicworks.com/",
          note: "Apply for college‑specific scholarships.",
        },
        {
          label: "Forsyth Tech – Types of Financial Aid",
          href: "https://www.forsythtech.edu/students/how-to-pay-for-college/types-of-aid/",
          note: "Grants, scholarships, work‑study, payment plans.",
        },
        {
          label: "Forsyth Tech – Dual Enrollment / High School Programs",
          href: "https://www.forsythtech.edu/highschoolers/",
          note: "Earn college credit in high school.",
        },
      ],
    },
    careers: {
      title: "Apprenticeships & Free Career Training (Triad)",
      items: [
        {
          label: "ApprenticeshipNC – Earn While You Learn",
          href: "https://www.nccommunitycolleges.edu/businesses/apprenticeships/",
          note: "Registered apprenticeships for high school grads.",
        },
        {
          label: "Forsyth Tech – LEAP Apprenticeships",
          href: "https://www.forsythtech.edu/students/courses-programs/apprenticeships/",
          note: "Local apprenticeship requirements and info.",
        },
        {
          label: "Goodwill NWNC – Career Services & Training",
          href: "https://www.goodwillnwnc.org/programs-and-services/",
          note: "Free classes, certifications, and job help.",
        },
        {
          label: "NCWorks Triad Career Centers",
          href: "https://www.ptrc.org/services/workforce-development/career-seeker-services/ncworks-career-centers-local-area-locations/ncworks",
          note: "Local centers for job search and training.",
        },
      ],
    },
    howToPay: {
      title: "How to Pay for College",
      items: [
        {
          label: "FAFSA – Federal Student Aid (studentaid.gov)",
          href: "https://studentaid.gov/",
          note: "Complete the FAFSA (some pages available in Español).",
        },
        {
          label: "CFNC – Paying for College (Español)",
          href: "https://www.cfnc.org/",
          note: "NC grants, scholarships, Residency, and planning tools.",
        },
      ],
    },
    wsfcsHelp: {
      title: "WS/FCS Programs & Support",
      items: [
        {
          label: "WS/FCS Work‑Based Learning (example: West Forsyth)",
          href: "https://www.wsfcs.k12.nc.us/o/wfhs/page/work-based-learning-opportunities",
          note: "Job‑shadowing, internships, apprenticeships.",
        },
        {
          label: "North Forsyth CTE – Apprenticeship Honors",
          href: "https://www.wsfcs.k12.nc.us/o/nfhs/page/north-forsyth-cte-pathways-and-courses",
          note: "Earn CTE credit via ApprenticeshipNC.",
        },
      ],
    },
    tools: {
      title: "Tools & Scholarship Lists",
      items: [
        {
          label: "Hispanic Scholarship Fund (national)",
          href: "https://www.hsf.net/",
          note: "For students of Hispanic heritage.",
        },
        {
          label: "Scholarship search (Scholarships.com – Hispanic)",
          href: "https://www.scholarships.com/financial-aid/college-scholarships/scholarships-by-type/minority-scholarships/hispanic-scholarships",
          note: "Browse mainstream and Hispanic‑serving awards.",
        },
      ],
    },
  },
}

const es: typeof en = {
  ...en,
  title: "Enlaces y Oportunidades Universitarias y Profesionales",
  subtitle: "Winston-Salem/Forsyth County Schools · Área del Triad · Bilingüe (EN/ES)",
  altLogo: "Logo de WS/FCS",
  needHelp: "¿Necesitas ayuda?",
  heroLine1:
    "Explora becas locales, opciones universitarias económicas, aprendizajes (apprenticeships) y capacitación laboral gratuita para Estudiantes de Inglés y familias latinas.",
  heroLine2:
    "Recursos seleccionados para estudiantes de WS/FCS. Muchos ofrecen información en español y apoyo para estudiantes con DACA/sin estatus.",
  brandGuide: "Guía de marca de WS/FCS",
  logoAssets: "Recursos oficiales del logo",
  disclaimer:
    "Las fechas límite, montos y requisitos cambian con frecuencia. Verifica siempre los detalles en las páginas oficiales antes de postular.",
  footerLine: "Centro de recursos de universidad y carreras para estudiantes y familias (sitio no oficial de WS/FCS).",
  sections: {
    ...en.sections,
    localScholarships: {
      ...en.sections.localScholarships,
      title: "Becas Locales (Forsyth / Triad)",
    },
    stateScholarships: {
      ...en.sections.stateScholarships,
      title: "Becas y Ayudas de Carolina del Norte",
    },
    undocumented: {
      ...en.sections.undocumented,
      title: "Para Estudiantes con DACA / sin estatus",
    },
    affordableColleges: {
      ...en.sections.affordableColleges,
      title: "Universidades Económicas en NC (NC Promise)",
    },
    twoYear: { ...en.sections.twoYear, title: "Colegios de 2 Años (Forsyth Tech)" },
    careers: { ...en.sections.careers, title: "Aprendizajes y Capacitación Gratuita" },
    howToPay: { ...en.sections.howToPay, title: "Cómo Pagar la Universidad" },
    wsfcsHelp: { ...en.sections.wsfcsHelp, title: "Programas y Apoyo de WS/FCS" },
    tools: { ...en.sections.tools, title: "Herramientas y Listas de Becas" },
  },
}
