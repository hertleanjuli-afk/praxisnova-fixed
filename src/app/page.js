'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Mail, Calendar } from 'lucide-react'

// HubSpot config â Portal-ID eintragen (zu finden unter HubSpot > Einstellungen > Konto-Einrichtung)
const HUBSPOT_PORTAL_ID = '147989409'
const HUBSPOT_FORM_ID = '4ec76e7c-f7b3-4144-8d9d-8e7f42f8db3d'

export default function HomePage() {
  const [showEmailPopup, setShowEmailPopup] = useState(false)
  const [flippedCard, setFlippedCard] = useState(null)
  const [emailSubmitted, setEmailSubmitted] = useState(false)
  const [emailLoading, setEmailLoading] = useState(false)
  const [emailError, setEmailError] = useState(null)
  const [showCalendly, setShowCalendly] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmailPopup(true)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  // Calendly Widget Script laden
  useEffect(() => {
    const link = document.createElement('link')
    link.href = 'https://assets.calendly.com/assets/external/widget.css'
    link.rel = 'stylesheet'
    document.head.appendChild(link)
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.head.appendChild(script)
    return () => {
      document.head.removeChild(link)
      document.head.removeChild(script)
    }
  }, [])

  const openCalendly = (e) => {
    e.preventDefault()
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/meyer-samantha-praxisnovaai/30min'
      })
    } else {
      window.open('https://calendly.com/meyer-samantha-praxisnovaai/30min', '_blank')
    }
  }

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    setEmailLoading(true)
    setEmailError(null)
    const formData = new FormData(e.target)
    const firstName = formData.get('name').split(' ')[0]
    const lastName = formData.get('name').split(' ').slice(1).join(' ') || ''
    const email = formData.get('email')

    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: firstName },
              { name: 'lastname', value: lastName },
              { name: 'email', value: email },
            ],
            context: {
              pageUri: window.location.href,
              pageName: 'PraxisNova AI â Startseite'
            }
          })
        }
      )
      if (!res.ok) throw new Error('Submission failed')
      setEmailSubmitted(true)
      setTimeout(() => {
        setShowEmailPopup(false)
        setEmailSubmitted(false)
      }, 3000)
    } catch (err) {
      setEmailError('Es gab einen Fehler. Bitte versuchen Sie es erneut.')
    } finally {
      setEmailLoading(false)
    }
  }

  const workshops = [
    {
      id: 1,
      title: 'KI fÃ¼r Kundenkommunikation & Akquise',
      trainer: 'Anjuli Hertle',
      shortText: 'Mehr AbschlÃ¼sse, weniger Aufwand. Ihr Vertriebsteam gewinnt wertvolle Stunden zurÃ¼ck und konzentriert sich auf das Wesentliche: den Abschluss.',
      modules: [
        'KI-gestÃ¼tzte Lead-Generierung: die richtigen Kunden finden, automatisch',
        'Automatisierte Erstkommunikation: schneller antworten, ohne Copy-Paste',
        'Personalisierte Angebote in Minuten statt Stunden',
        'Integration in Ihre Systeme, individuell angepasst'
      ],
      color: 'from-primary-blue to-primary-blue-light'
    },
    {
      id: 2,
      title: 'KI fÃ¼r Zeitplanung & Projektmanagement',
      trainer: 'Samantha Meyer',
      shortText: 'Weniger Verwaltung, mehr Projektzeit. Ihr Team arbeitet fokussierter und liefert Ergebnisse, die Ihre Marge verbessern.',
      modules: [
        'Intelligente Zeitplanung: KI plant realistisch, nicht optimistisch',
        'Ressourcen-Optimierung: Ihr Team effektiver einsetzen',
        'Automatische Dokumentation: Papierkram entfÃ¤llt komplett',
        'Integration in Ihre Systeme, individuell angepasst'
      ],
      color: 'from-primary-red to-primary-red-light'
    }
  ]

  const pricingTiers = [
    {
      name: 'STARTER',
      price: '7.900',
      features: [
        '1 Workshop Ihrer Wahl',
        '3 Standard-Module',
        'bis 10 Teilnehmer',
        '30 Tage E-Mail Support'
      ],
      highlighted: false
    },
    {
      name: 'PROFESSIONAL',
      price: '11.900',
      badge: 'BELIEBT',
      features: [
        '1 Workshop Ihrer Wahl',
        '3 Standard-Module',
        'bis 15 Teilnehmer',
        '60 Tage Support + 1 Follow-up Call'
      ],
      highlighted: true
    },
    {
      name: 'VIP',
      price: '19.900',
      features: [
        '2 Workshops',
        '3 Standard + 1 Custom-Modul',
        'bis 20 Teilnehmer',
        '90 Tage WhatsApp Support + 2 Follow-up Calls'
      ],
      highlighted: false
    }
  ]

  const stats = [
    { value: '70%', label: 'weniger Verwaltungsaufwand ab Monat 1' },
    { value: '10+ Std.', label: 'pro Woche zurÃ¼ckgewonnen, pro Mitarbeiter' },
    { value: '6 Wochen', label: 'durchschnittliche Amortisationszeit' },
    { value: '25%', label: 'mehr AbschlÃ¼sse im ersten Quartal' },
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Email Popup */}
      <AnimatePresence>
        {showEmailPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setShowEmailPopup(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowEmailPopup(false)}
                className="absolute top-4 right-4 text-primary-gray hover:text-primary-blue transition-colors"
              >
                <X size={24} />
              </button>

              {!emailSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-primary-blue mb-2">
                    Mehr Infos erhalten?
                  </h3>
                  <p className="text-primary-gray mb-6">
                    Hinterlassen Sie uns Ihre E-Mail und wir senden Ihnen detaillierte Informationen zu unseren Workshops.
                  </p>
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Ihr Name"
                      required
                      disabled={emailLoading}
                      className="w-full px-4 py-3 border-2 border-primary-gray-light rounded-lg focus:border-primary-blue focus:outline-none transition-colors disabled:opacity-50"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Ihre E-Mail"
                      required
                      disabled={emailLoading}
                      className="w-full px-4 py-3 border-2 border-primary-gray-light rounded-lg focus:border-primary-blue focus:outline-none transition-colors disabled:opacity-50"
                    />
                    {emailError && (
                      <p className="text-red-500 text-sm">{emailError}</p>
                    )}
                    <button
                      type="submit"
                      disabled={emailLoading}
                      className="w-full bg-primary-red hover:bg-primary-red-light text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {emailLoading ? 'Wird gesendet...' : 'Infos anfordern'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">â</div>
                  <h3 className="text-2xl font-bold text-primary-blue mb-2">Vielen Dank!</h3>
                  <p className="text-primary-gray">Wir haben Ihre Anfrage erhalten und melden uns in KÃ¼rze.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-40 border-b border-primary-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-blue">PraxisNova AI</div>
          <div className="flex gap-4">
            <button
              onClick={() => setShowEmailPopup(true)}
              className="hidden sm:block px-6 py-2 text-primary-blue hover:text-primary-blue-light transition-colors font-medium"
            >
              Mehr Infos
            </button>
            <button
              onClick={openCalendly}
              className="bg-primary-red hover:bg-primary-red-light text-white px-6 py-2 rounded-lg transition-all font-medium"
            >
              Kostenlose Beratung buchen
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-gray-light via-white to-primary-gray-light">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-blue mb-6"
          >
            Weniger Admin.<br />
            Mehr Umsatz.<br />
            <span className="text-gradient">Mit KI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-primary-gray max-w-3xl mx-auto mb-10"
          >
            KI-Schulungen fÃ¼r Bauunternehmen, Architekten und Immobilienprofis. Ihr Team gewinnt bis zu 10 Stunden pro Woche zurÃ¼ck, die direkt in Akquise und Projektarbeit fliessen.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={openCalendly}
              className="bg-primary-red hover:bg-primary-red-light text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Calendar size={24} />
              Kostenlose Beratung buchen
            </button>
            <button
              onClick={() => document.getElementById('workshops').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 rounded-lg font-bold text-lg transition-all inline-flex items-center justify-center gap-2"
            >
              Workshops entdecken
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-primary-blue">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/75">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Audiences Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-primary-blue mb-4"
          >
            Kennen Sie das?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xl text-center text-primary-gray mb-12 max-w-2xl mx-auto"
          >
            Wertvolle Arbeitszeit, die in Verwaltung statt in Wachstum fliesst.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-8 mt-4">
            {[
              {
                icon: 'ðï¸',
                title: 'BAUUNTERNEHMEN',
                problems: [
                  'Angebotserstellung kostet Stunden statt Minuten',
                  'Projektdokumentation bindet FachkrÃ¤fte unnÃ¶tig',
                  'Kommunikation mit Subunternehmern frisst Zeit, die auf der Baustelle fehlt'
                ]
              },
              {
                icon: 'ð',
                title: 'ARCHITEKTEN',
                problems: [
                  'Administrative Aufgaben verdrÃ¤ngen kreative Arbeit',
                  'Kundenkommunikation lÃ¤uft ineffizient und zeitaufwÃ¤ndig',
                  'Ausschreibungen und Berichte werden manuell statt automatisiert erstellt'
                ]
              },
              {
                icon: 'ð¢',
                title: 'IMMOBILIENPROFIS',
                problems: [
                  'Lead-Generierung und Nachverfolgung kostet zu viel Zeit',
                  'ExposÃ©-Erstellung ist repetitiv und skaliert nicht',
                  'Kundenbetreuung lÃ¤sst sich ohne KI kaum ausbauen'
                ]
              }
            ].map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border-2 border-primary-gray-light rounded-xl p-8 hover:border-primary-blue transition-all hover:shadow-lg"
              >
                <div className="text-5xl mb-4 text-center">{audience.icon}</div>
                <h3 className="text-xl font-bold text-primary-blue mb-4 text-center">{audience.title}</h3>
                <ul className="space-y-3">
                  {audience.problems.map((problem, i) => (
                    <li key={i} className="flex items-start gap-2 text-primary-gray">
                      <span className="text-primary-red mt-1">â</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Bridge */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-gray-light">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-primary-blue mb-6"
          >
            Was mÃ¶glich ist, wenn Admin wegfÃ¤llt
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="grid sm:grid-cols-3 gap-6 mt-8"
          >
            {[
              { icon: 'ð¯', title: 'Fokus auf AbschlÃ¸sse', text: 'Ihr Vertrieb verbringt Zeit mit Kunden, nicht mit Verwaltung. Mehr GesprÃ¤che, mehr Umsatz.' },
              { icon: 'â¡', title: 'Schnellere Projektabwicklung', text: 'Dokumentation, Berichte und Kommunikation laufen automatisiert. Ihr Team liefert schneller.' },
              { icon: 'ð', title: 'Skalierbare Prozesse', text: 'Wachstum ohne proportional mehr Personal. KI Ã¼bernimmt die Arbeit, die nicht skaliert.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-primary-blue mb-2">{item.title}</h3>
                <p className="text-sm text-primary-gray">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">
              Zwei Workshops. Maximale Wirkung.
            </h2>
            <p className="text-xl text-primary-gray max-w-2xl mx-auto">
              Individuell angepasst an Ihre Systeme und Prozesse. HalbtÃ¤gig. Sofort umsetzbar.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative h-96 cursor-pointer"
                style={{ perspective: '1000px' }}
                onClick={() => setFlippedCard(flippedCard === workshop.id ? null : workshop.id)}
              >
                <motion.div
                  animate={{ rotateY: flippedCard === workshop.id ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  className="relative w-full h-full"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div
                    className="absolute w-full h-full rounded-2xl p-8 flex flex-col justify-between text-white shadow-xl"
                    style={{
                      backfaceVisibility: 'hidden',
                      background: `linear-gradient(135deg, ${workshop.id === 1 ? '#1565C0' : '#D32F2F'} 0%, ${workshop.id === 1 ? '#42A5F5' : '#EF5350'} 100%)`
                    }}
                  >
                    <div>
                      <h3 className="text-2xl font-bold mb-4">{workshop.title}</h3>
                      <p className="text-white/90 mb-4">Trainerin: {workshop.trainer}</p>
                      <p className="text-lg">{workshop.shortText}</p>
                    </div>
                    <div className="text-sm text-white/75 text-center">
                      Klicken fÃ¸r Details
                    </div>
                  </div>

                  <div
                    className="absolute w-full h-full bg-white rounded-2xl p-8 shadow-xl border-2 border-primary-gray-light"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <h4 className="text-xl font-bold text-primary-blue mb-4">4 Module:</h4>
                    <ul className="space-y-3">
                      {workshop.modules.map((module, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-primary-gray">
                          <span className={`font-bold ${i === 3 ? 'text-primary-red' : 'text-primary-blue'}`}>
                            {i + 1}.
                          </span>
                          <span className={i === 3 ? 'text-primary-red font-medium' : ''}>
                            {module}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 text-sm text-primary-gray text-center">
                      ZurÃ¼ck
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-gray-light">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Investition</h2>
            <p className="text-xl text-primary-gray">WÃ¤hlen Sie das passende Paket fÃ¸r Ihr Team</p>
            <p className="text-primary-gray mt-2">Amortisiert sich im Schnitt innerhalb von 6 Wochen.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-8 ${
                  tier.highlighted
                    ? 'border-4 border-primary-blue bg-white shadow-2xl scale-105'
                    : 'border-2 border-primary-gray-light bg-white'
                }`}
              >
                {tier.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-blue text-white px-4 py-1 rounded-full text-sm font-bold">
                    {tier.badge}
                  </div>
                )}
                <h3 className="text-2xl font-bold text-primary-blue text-center mb-4">{tier.name}</h3>
                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-primary-blue">â¬{tier.price}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-primary-gray">
                      <span className="text-primary-blue mt-1">â</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openCalendly}
                  className={`block w-full py-3 px-6 rounded-lg font-bold transition-all transform hover:scale-105 text-center ${
                    tier.highlighted
                      ? 'bg-primary-red text-white hover:bg-primary-red-light'
                      : 'bg-primary-blue text-white hover:bg-primary-blue-light'
                  }`}
                >
                  Jetzt Beratung buchen
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Ihr Team</h2>
            <p className="text-xl text-primary-gray">Expertise trifft Praxis</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                name: 'Anjuli Hertle',
                role: 'Expertin fÃ¸r Kundenkommunikation & Akquise',
                bio: 'Mit jahrelanger Erfahrung im Vertrieb weiss Anjuli, wie man Kunden gewinnt und bindet. Sie zeigt Ihrem Team, wie KI die Akquise beschleunigt, ohne die persÃ¶nliche Note zu verlieren.'
              },
              {
                name: 'Samantha Meyer',
                role: 'Spezialistin fÃ¸r Zeitplanung & Projektmanagement',
                bio: 'Samantha bringt Ordnung in komplexe AblÃ¤ufe. Mit ihrer Expertise im Projektmanagement hilft sie Ihnen, KI sinnvoll in Ihre Workflows zu integrieren, sodass messbar mehr Projektzeit entsteht.'
              }
            ].map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-primary-gray-light"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary-blue mb-2">{person.name}</h3>
                  <p className="text-lg italic text-primary-gray mb-4">{person.role}</p>
                  <p className="text-primary-gray">{person.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-blue to-primary-blue-light text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6"
          >
            Bereit fÃ¸r den nÃ¤chsten Schritt?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-4 opacity-90"
          >
            Buchen Sie jetzt eine kostenlose 15-minÃ¸tige Beratung. Wir zeigen Ihnen konkret, wie viele Stunden Ihr Team wÃ¶chentlich zurÃ¼ckgewinnen kann und was das fÃ¸r Ihren Umsatz bedeutet.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-lg mb-8 opacity-75"
          >
            Kein IT-Aufwand. Sofort umsetzbar. Amortisiert sich in 6 Wochen.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={openCalendly}
              className="bg-white text-primary-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-gray-light transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Calendar size={24} />
              Jetzt Beratung buchen
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-gray text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">PraxisNova AI</h3>
              <p className="opacity-75">KI-Schulungen fÃ¸r Bau und Immobilien</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontakt</h4>
              <div className="space-y-2 opacity-75">
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  info@praxisnovaai.com
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Rechtliches</h4>
              <div className="space-y-2 opacity-75">
                <p>Impressum</p>
                <p>Datenschutz</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-75">
            <p>Â© 2026 PraxisNova AI. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
