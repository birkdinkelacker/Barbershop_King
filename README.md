# King Barbershop Eberbach

Schlichte, responsive Webseite für King Barbershop in Eberbach, erstellt mit React und Vite.

## Lokal starten

```sh
npm ci
npm run dev
```

## Produktionsversion erstellen

```sh
npm run build
npm run preview
```

Die fertigen Dateien liegen in `dist/`.

## Inhalte

- Männer: jeder siebte Haarschnitt zum halben Preis.
- Frauen: 25 % Rabatt auf den ersten Haarschnitt, also 75 % des regulären Preises.
- Kontakt, Öffnungszeiten und Routenlink anhand der bereitgestellten Geschäftskarte.
- Responsive Gestaltung in Schwarz und Gold.

Das Motivfoto stammt von [Salah Regouane auf Unsplash](https://unsplash.com/photos/a-close-up-of-a-person-cutting-another-persons-hair-MRCdF3qUbp0) und zeigt nicht den tatsächlichen Salon. Schriftarten werden lokal bereitgestellt (Lizenzen in public/fonts/).

Impressum und Datenschutzerklärung sind als Entwürfe unter /impressum.html und /datenschutz.html enthalten. Der Betreibername fehlt auf Wunsch; vor öffentlichem Einsatz müssen rechtliche Identität, ggf. Register-/Steuer-/Kammerangaben und tatsächliche Hostingverträge, Empfängerrollen und Löschfristen geprüft und ergänzt werden.

## Instagram und Öffnungszeiten

- Instagram-Einbettungen zu Locken und Damenfrisuren in src/InstagramPost.jsx laden erst nach ausdrücklicher Zustimmung je Video. Widerruf entfernt das jeweilige iframe; keine dauerhafte Speicherung der Auswahl.
- Lockenangebot mit dem bereitgestellten Reel DbMEMMQMyul.
- Montag bis Freitag 09–19 Uhr, Samstag 09–18 Uhr, Sonntag geschlossen.
- Instagram stellt Bilder und Videowiedergabe bereit; Verfügbarkeit und Anmeldeanforderungen liegen bei Instagram. Direkte Beitragslinks bleiben als Alternative sichtbar.

## Bewertungen und Suchsymbol

Google-Bewertungen sind über den vom Auftraggeber angegebenen Unternehmens-Eintrag verlinkt (CID 1902054076078217701). Keine Sterne, Bewertungstexte oder API-Zugänge werden erfunden. Ein Live-Widget benötigt eine gesondert eingerichtete Integration. Das quadratische SVG-Favicon enthält das bereitgestellte Logo. Die derzeitige private Sites-Vorschau ist nicht für öffentliche Google-Indexierung zugänglich; die Anzeige eines Favicons in Suchergebnissen wird von Google bestimmt.
