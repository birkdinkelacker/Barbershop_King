import { useState } from 'react'

export const instagramProfile = 'https://www.instagram.com/king_barbershop_eberbach/'
export default function InstagramPost({ code, title }) {
  const [enabled, setEnabled] = useState(false)
  const url = `https://www.instagram.com/reel/${code}/`
  return <figure className="instagram-post">
    <div className="instagram-frame">
      {enabled ? <iframe src={`${url}embed/`} title={`Instagram: ${title}`} width="540" height="720" allow="encrypted-media; fullscreen; picture-in-picture" referrerPolicy="no-referrer" allowFullScreen /> :
        <div className="instagram-consent"><img src="/king-logo.jpg" width="90" height="90" alt=""/><h3>{title}</h3><p>Beim Laden erhält Meta deine IP-Adresse und Browserdaten. Instagram kann Cookies setzen und deinen Besuch deinem Konto zuordnen; eine Verarbeitung in den USA ist möglich.</p><button className="button" type="button" onClick={() => setEnabled(true)}>Zustimmen & Video laden</button><a href="/datenschutz.html#instagram">Datenschutz zu Instagram</a></div>}
    </div>
    {enabled && <button className="instagram-revoke" type="button" onClick={() => setEnabled(false)}>Einwilligung widerrufen & Video entfernen</button>}
    <figcaption><span>{title}</span><a href={url} target="_blank" rel="noreferrer">Auf Instagram öffnen</a></figcaption>
  </figure>
}
