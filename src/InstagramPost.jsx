import { useEffect } from 'react'

export const instagramProfile = 'https://www.instagram.com/king_barbershop_eberbach/'
let embedScript
function loadInstagram() {
  if (window.instgrm?.Embeds) return Promise.resolve()
  if (!embedScript) embedScript = new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    script.onload = resolve
    script.onerror = () => { script.remove(); embedScript = undefined; reject(new Error('Instagram unavailable')) }
    document.body.appendChild(script)
  })
  return embedScript
}
export default function InstagramPost({ code, title }) {
  const url = `https://www.instagram.com/reel/${code}/`
  useEffect(() => {
    let mounted = true
    loadInstagram().then(() => { if (mounted) window.instgrm?.Embeds?.process() }).catch(() => {})
    return () => { mounted = false }
  }, [code])
  return <figure className="instagram-post">
    <div className="instagram-frame"><blockquote className="instagram-media" data-instgrm-permalink={url} data-instgrm-version="14">
      <a href={url} target="_blank" rel="noreferrer"><img src="/king-logo.jpg" width="90" height="90" alt=""/><span>{title}</span><span>Video auf Instagram ansehen</span></a>
    </blockquote></div>
    <figcaption><span>{title}</span><a href={url} target="_blank" rel="noreferrer">Auf Instagram öffnen</a></figcaption>
  </figure>
}
