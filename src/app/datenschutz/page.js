'use client'

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-40 border-b border-primary-gray-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-primary-blue">PraxisNova AI</a>
          <a href="/" className="text-primary-gray hover:text-primary-blue transition-colors">
            ZurÃ¼ck zur Startseite
          </a>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-primary-blue mb-10">DatenschutzerklÃ¤rung</h1>

          <div className="space-y-8 text-primary-gray">

            <div>
              <h2 className="text-xl font-bold text-primary-blue mb-3">1. Datenschutz auf einen Blick</h2>
              <h3 className="font-bold mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Ãberblick darÃ¼ber, was mit Ihren personenbezogenen Daten
                passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
                persÃ¶nlich identifiziert werden kÃ¶nnen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-blue mb-3">2. Verantwortliche Stelle</h2>
              <p>Verantwortlich fÃ¼r die Datenverarbeitung auf dieser Website ist:</p>
              <div className="mt-3 p-4 bg-gray-50 rounded-lg">
                <p className="font-medium">PraxisNova AI</p>
                <p>Anjuli Hertle</p>
                <p>Otto-Hahn-StraÃe</p>
                <p>72622 NÃ¼rtingen</p>
                <p className="mt-2">E-Mail: info@praxisnovaai.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-blue mb-3">3. Datenerfassung auf dieser Website</h2>

              <h3 className="font-bold mb-2">Cookies</h3>
              <p>
                Diese Website verwendet technisch notwendige Cookies. DarÃ¼ber hinaus setzen wir nur Cookies ein,
                wenn Sie aktiv eingewilligt haben. Sie kÃ¶nnen Ihren Browser so einrichten, dass Sie Ã¼ber das Setzen
                von Cookies informiert werden.
              </p>

              <h3 className="font-bold mt-4 mb-2">Kontaktformular</h3>
              <p>
                Wenn Sie uns Ã¼ber das Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
                Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
                und fÃ¸r den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
                Einwilligung weiter.
              </p>
              <p className="mt-2">
                Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an der Beantwortung von Anfragen).
              </p>

              <h3 className="font-bold mt-4 mb-2">Calendly</h3>
              <p>
                FÃ¸r die Terminbuchung nutzen wir den Dienst Calendly (Calendly LLC, 271 17th St NW, Atlanta, GA
                30363, USA). Beim Buchen eines Termins werden Ihre Daten an Calendly Ã¼bermittelt und dort
                gespeichert. Weitere Informationen finden Sie in der DatenschutzerklÃ¤rung von Calendly:{' '}
                <a href="https://calendly.com/meyer-samantha-praxisnovaai/30min/privacy" className="text-primary-blue underline" target="_blank" rel="noopener noreferrer">
                  https://calendly.com/meyer-samantha-praxisnovaai/30min/privacy
                </a>
              </p>

              <h3 className="font-bold mt-4 mb-2">HubSpot</h3>
              <p>
                Wir nutzen HubSpot CRM (HubSpot, Inc., 25 First Street, 2nd Floor, Cambridge, MA 02141, USA) zur
                Verwaltung von Kundenanfragen. HubSpot verarbeitet Daten gemÃ¤Ã der Standardvertragsklauseln der EU.
                Weitere Infos:{' '}
                <a href="https://legal.hubspot.com/privacy-policy" className="text-primary-blue underline" target="_blank" rel="noopener noreferrer">
                  HubSpot Datenschutz
                </a>
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-blue mb-3">4. Ihre Rechte</h2>
              <p>Sie haben jederzeit das Recht auf:</p>
              <ul className="mt-3 space-y-2 list-none">
                {[
                  'Auskunft Ã¼ber Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)',
                  'Berichtigung unrichtiger Daten (Art. 16 DSGVO)',
                  'LÃ¶schung Ihrer Daten (Art. 17 DSGVO)',
                  'EinschrÃ¤nkung der Verarbeitung (Art. 18 DSGVO)',
                  'DatenÃ¼bertragbarkeit (Art. 20 DSGVO)',
                  'Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)',
                ].map((right, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary-blue mt-1">â</span>
                    <span>{right}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4">
                Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an: info@praxisnovaai.com
              </p>
              <p className="mt-2">
                Sie haben auÃerdem das Recht, sich bei der zustÃ¤ndigen Datenschutz-AufsichtsbehÃ¶rde zu beschweren.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-blue mb-3">5. Hosting</h2>
              <p>
                Diese Website wird bei Vercel Inc. (340 Pine Street, Suite 700, San Francisco, CA 94104, USA)
                gehostet. Vercel verarbeitet Daten auf Basis der EU-Standardvertragsklauseln. Weitere Infos:{' '}
                <a href="https://vercel.com/legal/privacy-policy" className="text-primary-blue underline" target="_blank" rel="noopener noreferrer">
                  Vercel Datenschutz
                </a>
              </p>
            </div>

            <p className="text-sm text-gray-400 pt-4 border-t border-gray-100">
              Stand: MÃ¤rz 2026
            </p>

          </div>
        </div>
      </section>

      <footer className="bg-primary-gray text-white py-8 px-4 text-center">
        <p className="opacity-75">Â© 2026 PraxisNova AI. Alle Rechte vorbehalten.</p>
        <div className="flex justify-center gap-6 mt-3 opacity-75">
          <a href="/impressum" className="hover:opacity-100 transition-opacity">Impressum</a>
          <a href="/datenschutz" className="hover:opacity-100 transition-opacity">Datenschutz</a>
        </div>
      </footer>
    </main>
  )
}
