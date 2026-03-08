'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Mail, Phone, Calendar } from 'lucide-react'

export default function HomePage() {
  const [showEmailPopup, setShowEmailPopup] = useState(false)
  const [flippedCard, setFlippedCard] = useState(null)
  const [emailSubmitted, setEmailSubmitted] = useState(false)

  // Show email popup after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEmailPopup(true)
    }, 10000)
    return () => clearTimeout(timer)
  }, [])

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      to: 'anjuli.hertle@gmail.com'
    }
    
    // In production, this would send to your backend
    console.log('Email submitted:', data)
    setEmailSubmitted(true)
    setTimeout(() => {
      setShowEmailPopup(false)
      setEmailSubmitted(false)
    }, 2000)
  }

  const workshops = [
    {
      id: 1,
      title: 'KI für Kundenkommunikation & Akquise',
      trainer: 'Anjuli Hertle',
      shortText: 'Gewinnen Sie mehr Kunden durch intelligente Automatisierung. Von der ersten Kontaktaufnahme bis zum Vertragsabschluss.',
      modules: [
        'KI-gestützte Lead-Generierung - Finden Sie die richtigen Kunden automatisch',
        'Automatisierte Erstkommunikation - Antworten Sie schneller, ohne Copy-Paste',
        'Personalisierte Angebote in Minuten - Nicht Stunden',
        'Integration in IHRE Systeme - Individuell auf Ihre Software angepasst'
      ],
      color: 'from-primary-blue to-primary-blue-light'
    },
    {
      id: 2,
      title: 'KI für Zeitplanung & Projektmanagement',
      trainer: 'Samantha Meyer',
      shortText: 'Behalten Sie den Überblick, ohne den Überblick zu verlieren. Effiziente Planung für komplexe Projekte.',
      modules: [
        'Intelligente Zeitplanung - KI plant realistisch, nicht optimistisch',
        'Ressourcen-Optimierung - Setzen Sie Ihr Team effektiver ein',
        'Automatische Dokumentation - Vergessen Sie Papierkram',
        'Integration in IHRE Systeme - Individuell auf Ihre Software angepasst'
      ],
      color: 'from-primary-red to-primary-red-light'
    }
  ]

  const pricingTiers = [
    {
      name: 'STARTER',
      price: '6.500',
      features: ['1 Workshop Ihrer Wahl', '5-10 Teilnehmer', '30 Tage E-Mail Support'],
      highlighted: false
    },
    {
      name: 'PROFESSIONAL',
      price: '9.500',
      badge: 'BELIEBT',
      features: ['1 Workshop Ihrer Wahl', '11-15 Teilnehmer', '60 Tage Support + 2 Follow-up Calls'],
      highlighted: true
    },
    {
      name: 'VIP',
      price: '15.000',
      features: ['Beide Workshops', '10-20 Teilnehmer', '90 Tage WhatsApp Support + Custom'],
      highlighted: false
    }
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
                      className="w-full px-4 py-3 border-2 border-primary-gray-light rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Ihre E-Mail"
                      required
                      className="w-full px-4 py-3 border-2 border-primary-gray-light rounded-lg focus:border-primary-blue focus:outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      className="w-full bg-primary-red hover:bg-primary-red-light text-white font-bold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
                    >
                      Infos anfordern
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="text-6xl mb-4">✓</div>
                  <h3 className="text-2xl font-bold text-primary-blue mb-2">Vielen Dank!</h3>
                  <p className="text-primary-gray">Wir melden uns in Kürze bei Ihnen.</p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-40 border-b border-primary-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-primary-blue">PraxisNova</div>
          <div className="flex gap-4">
            <button
              onClick={() => setShowEmailPopup(true)}
              className="hidden sm:block px-6 py-2 text-primary-blue hover:text-primary-blue-light transition-colors font-medium"
            >
              Mehr Infos
            </button>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-red hover:bg-primary-red-light text-white px-6 py-2 rounded-lg transition-all font-medium"
            >
              Termin buchen
            </a>
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
            Smarter planen.<br />
            Schneller umsetzen.<br />
            <span className="text-gradient">Mit KI.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-primary-gray max-w-3xl mx-auto mb-10"
          >
            KI-Schulungen für Bauunternehmen, Architekten und Immobilienprofis. Praxisnah, messbar, individuell.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-red hover:bg-primary-red-light text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Calendar size={24} />
              Kostenlose Bedarfsanalyse buchen
            </a>
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

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: '🏗️',
                title: 'BAUUNTERNEHMEN',
                problems: [
                  'Angebotserstellung dauert Stunden statt Minuten',
                  'Projektdokumentation ist zeitaufwändig',
                  'Kommunikation mit Subunternehmern ineffizient'
                ]
              },
              {
                icon: '📐',
                title: 'ARCHITEKTEN',
                problems: [
                  'Zeitplanung wird schnell chaotisch',
                  'Kundenkommunikation frisst wertvolle Zeit',
                  'Administrative Aufgaben statt kreative Arbeit'
                ]
              },
              {
                icon: '🏢',
                title: 'IMMOBILIENPROFIS',
                problems: [
                  'Lead-Generierung kostet zu viel Zeit',
                  'Exposé-Erstellung ist repetitiv',
                  'Kundenbetreuung lässt sich schwer skalieren'
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
                      <span className="text-primary-red mt-1">•</span>
                      <span>{problem}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-gray-light">
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
              Individuell angepasst an Ihre Systeme und Prozesse
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
                  {/* Front of card */}
                  <div
                    className="absolute w-full h-full rounded-2xl p-8 flex flex-col justify-between bg-gradient-to-br text-white shadow-xl"
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
                      Klicken für Details →
                    </div>
                  </div>

                  {/* Back of card */}
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
                      ← Zurück
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-primary-blue mb-4">Investition</h2>
            <p className="text-xl text-primary-gray">Wählen Sie das passende Paket für Ihr Team</p>
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
                    ? 'border-4 border-primary-blue bg-primary-gray-light shadow-2xl scale-105'
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
                  <span className="text-5xl font-bold text-primary-blue">€{tier.price}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-primary-gray">
                      <span className="text-primary-blue mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setShowEmailPopup(true)}
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all transform hover:scale-105 ${
                    tier.highlighted
                      ? 'bg-primary-red text-white hover:bg-primary-red-light'
                      : 'bg-primary-blue text-white hover:bg-primary-blue-light'
                  }`}
                >
                  Jetzt anfragen
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary-gray-light">
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
                role: 'Expertin für Kundenkommunikation & Akquise',
                bio: 'Mit jahrelanger Erfahrung im Vertrieb weiß Anjuli, wie man Kunden gewinnt und bindet. Sie zeigt Ihnen, wie KI Ihre Akquise revolutioniert - ohne dass Sie Ihre persönliche Note verlieren.',
                image: 'IMG_0426.jpg'
              },
              {
                name: 'Samantha Meyer',
                role: 'Spezialistin für Zeitplanung & Projektmanagement',
                bio: 'Samantha bringt Ordnung ins Chaos. Mit ihrer Expertise in Projektmanagement hilft sie Ihnen, KI sinnvoll in Ihre Arbeitsabläufe zu integrieren - für messbare Effizienzgewinne.',
                image: '2CB70EF8-1A2C-469E-997C-7BF315C80222.JPG'
              }
            ].map((person, index) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
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
            Bereit für den nächsten Schritt?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl mb-8 opacity-90"
          >
            Buchen Sie jetzt eine kostenlose 15-minütige Bedarfsanalyse. Wir besprechen Ihre Herausforderungen und zeigen Ihnen, wie KI Ihrem Unternehmen konkret helfen kann.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary-blue px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-gray-light transition-all transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              <Calendar size={24} />
              Jetzt Termin vereinbaren
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-gray text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">PraxisNova</h3>
              <p className="opacity-75">KI-Schulungen für Bau & Immobilien</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Kontakt</h4>
              <div className="space-y-2 opacity-75">
                <p className="flex items-center gap-2">
                  <Phone size={16} />
                  0176/6660906
                </p>
                <p className="flex items-center gap-2">
                  <Mail size={16} />
                  anjuli.hertle@gmail.com
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Rechtliches</h4>
              <div className="space-y-2 opacity-75">
                <p>Impressum folgt</p>
                <p>Datenschutz folgt</p>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center opacity-75">
            <p>© 2026 PraxisNova. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
