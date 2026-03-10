'use client'

export default function Impressum() {
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
          <h1 className="text-4xl font-bold text-primary-blue mb-10">Impressum</h1>

          <div className="space-y-8 text-primary-gray">

            <div>
              <h2 className="text-xl font-bold text-primary-blue mb-3">Angaben gemÃ¤Ã Â§ 5 TMG</h2>
              <p>PraxisNova AI</p>
              <p>Anjuli Hertle</p>
              <p>Otto-Hahn-StraÃe</p>
              <p>72622 NÃ¼rtingen</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-blue mb-3">Kontakt</h2>
              <p>E-Mail: info@praxisnovaai.com</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-blue mb-3">Umsatzsteuer-ID</h2>
              <p>Umsatzsteuer-Identifikationsnummer gemÃ¤Ã Â§ 27a Umsatzsteuergesetz:</p>
              <p>[UST-ID EINTRAGEN SOBALD VORHANDEN]</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-blue mb-3">Verantwortlich fÃ¼r den Inhalt nach Â§ 55 Abs. 2 RStV</h2>
              <p>Anjuli Hertle</p>
              <p>Otto-Hahn-StraÃe, 72622 NÃ¼rtingen</p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-blue mb-3">Streitschlichtung</h2>
              <p>
                Die EuropÃ¤ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                <a href="https://ec.europa.eu/consumers/odr/" className="text-primary-blue underline" target="_blank" rel="noopener noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-blue mb-3">Haftung fÃ¼r Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemÃ¤Ã Â§ 7 Abs.1 TMG fÃ¸r eigene Inhalte auf diesen Seiten nach den
                allgemeinen Gesetzen verantwortlich. Nach Â§Â§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                verpflichtet, Ã¼bermittelte oder gespeicherte fremde Informationen zu Ã¼berwachen oder nach UmstÃ¤nden
                zu forschen, die auf eine rechtswidrige TÃ¤tigkeit hinweisen.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-primary-blue mb-3">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
                Urheberrecht. Die VervielfÃ¤ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung auÃerhalb der
                Grenzen des Urheberrechts bedÃ¼rfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>

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
