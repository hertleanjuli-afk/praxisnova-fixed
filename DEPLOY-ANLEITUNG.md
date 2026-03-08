# PraxisNova Website - DEPLOY ANLEITUNG

## ⚡ SCHNELLSTE LÖSUNG (10 Minuten)

### Schritt 1: Neues GitHub Repository erstellen

1. Geht auf https://github.com/new
2. Repository Name: `praxisnova-live` (oder ein anderer Name)
3. Klickt **"Create repository"**

### Schritt 2: Files hochladen

**WICHTIG: Ladet ALLE FILES direkt hoch (nicht den ganzen Ordner!)**

1. Klickt auf **"uploading an existing file"**
2. **Wählt ALLE Files aus diesem Ordner** (nicht den Ordner selbst!)
3. Klickt **"Commit changes"**

**ACHTUNG:** Die Struktur muss SO aussehen:
```
github.com/euer-name/praxisnova-live/
├── src/
├── public/
├── package.json
├── next.config.js
├── tailwind.config.js
└── ...
```

**NICHT SO:**
```
github.com/euer-name/praxisnova-live/
└── praxisnova-fixed/
    ├── src/
    ├── package.json
    └── ...
```

### Schritt 3: Mit Vercel verbinden

1. Geht auf https://vercel.com/new
2. Klickt **"Continue with GitHub"**
3. Wählt euer Repository **"praxisnova-live"**
4. **ROOT DIRECTORY: LEER LASSEN!**
5. Klickt **"Deploy"**

### Schritt 4: Fertig! 🎉

Nach 1-2 Minuten ist eure Website LIVE auf:
`praxisnova-live.vercel.app`

---

## 🔧 Falls es wieder Probleme gibt:

**Überprüft die GitHub-Struktur:**
- Klickt auf euer Repository
- Ihr solltet **DIREKT** die Ordner `src/` und `public/` sehen
- **NICHT** einen Ordner `praxisnova-fixed/` oder ähnliches

**Falls doch:**
1. Löscht das Repository
2. Erstellt ein neues
3. Ladet die Files **EINZELN** hoch (nicht als Ordner!)

---

## 📞 Support

Bei Fragen: anjuli.hertle@gmail.com
