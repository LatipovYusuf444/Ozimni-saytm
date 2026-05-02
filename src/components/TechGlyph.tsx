function TechGlyph({ label }: { label: string }) {
  if (label === 'HTML') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#e44d26" d="M10 6h44l-4 45-18 6-18-6z" />
        <path fill="#f16529" d="M32 57l15-5 3-40H32z" />
        <path fill="#ebebeb" d="M32 26H21l-1-8h12V10H11l3 24h18z" />
        <path fill="#fff" d="M32 42l-.1.1-7.6-2.6-.5-6h-8l1 12 15.9 5.5.3-.1z" />
        <path fill="#fff" d="M32 26v8h10.2l-1 10-9.2 3V55l16-5.5 2-23.5zM32 10v8h19l.7-8z" />
      </svg>
    )
  }

  if (label === 'CSS') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#264de4" d="M10 6h44l-4 45-18 6-18-6z" />
        <path fill="#2965f1" d="M32 57l15-5 3-40H32z" />
        <path fill="#ebebeb" d="M32 26H21l-1-8h12V10H11l3 24h18z" />
        <path fill="#ebebeb" d="M32 42l-.1.1-7.6-2.6-.5-6h-8l1 12 15.9 5.5.3-.1z" />
        <path fill="#fff" d="M32 26v8h10.2l-1 10-9.2 3V55l16-5.5 2-23.5zM32 10v8h19l.7-8z" />
      </svg>
    )
  }

  if (label === 'SCSS') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="6" width="52" height="52" rx="16" fill="#cc6699" />
        <path fill="#fff" d="M42 20c-3-3-8-2-11 1-2 2-4 4-4 7 0 5 8 6 8 10 0 2-2 3-4 3-3 0-5-2-6-4l-4 3c2 4 6 6 10 6 6 0 10-3 10-9 0-6-8-7-8-10 0-1 1-2 2-3 2-2 4-2 5-1 1 1 1 3-1 6l4 3c4-5 4-10-1-15z" />
      </svg>
    )
  }

  if (label === 'Git') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="10" y="10" width="44" height="44" rx="12" transform="rotate(45 32 32)" fill="#f05133" />
        <path fill="#fff" d="M39 25a4 4 0 1 0-4-4v9a4 4 0 1 0 2 3.5V24a4 4 0 0 0 2-7.5zM29 41a4 4 0 1 0 4 4v-9a4 4 0 1 0-2-3.5V41a4 4 0 0 0-2 0z" />
      </svg>
    )
  }

  if (label === 'GitHub') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="6" width="52" height="52" rx="16" fill="#111827" />
        <path fill="#fff" d="M32 16c-8.8 0-16 7.3-16 16.3 0 7.2 4.6 13.3 10.9 15.4.8.2 1.1-.4 1.1-.8v-3c-4.4 1-5.3-1.9-5.3-1.9-.7-1.9-1.7-2.4-1.7-2.4-1.4-1 .1-1 .1-1 1.5.1 2.3 1.6 2.3 1.6 1.4 2.4 3.6 1.7 4.4 1.3.1-1 .5-1.7 1-2.1-3.5-.4-7.1-1.8-7.1-8 0-1.8.6-3.2 1.6-4.4-.2-.4-.7-2 .2-4.2 0 0 1.3-.4 4.4 1.6a14.8 14.8 0 0 1 8 0c3-2 4.4-1.6 4.4-1.6.9 2.2.4 3.8.2 4.2 1 1.2 1.6 2.6 1.6 4.4 0 6.3-3.7 7.6-7.2 8 .6.5 1.1 1.5 1.1 3.1v4.6c0 .4.3 1 1.1.8A16.2 16.2 0 0 0 48 32.3C48 23.3 40.8 16 32 16z" />
      </svg>
    )
  }

  if (label === 'JavaScript') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="8" width="48" height="48" rx="12" fill="#f7df1e" />
        <path fill="#111827" d="M35 20h6v19c0 9-5 12-11 12-5 0-8-2.5-10-5.5l5-3.3c1 1.8 2 3.3 4.4 3.3 2.2 0 3.6-.9 3.6-4.3zm-16.6 20.4l5-2.9c1.3 2.1 3 3.7 6 3.7 2.5 0 4.2-1.2 4.2-3 0-2.1-1.7-2.9-4.5-4.1l-1.5-.6c-4.4-1.9-7.3-4.2-7.3-9.1 0-4.5 3.5-8 8.8-8 3.8 0 6.6 1.3 8.5 4.8l-4.6 2.9c-1-1.8-2.1-2.5-3.9-2.5-1.8 0-2.9 1.1-2.9 2.5 0 1.8 1.1 2.5 3.7 3.6l1.5.6c5.2 2.2 8.1 4.5 8.1 9.6 0 5.5-4.3 8.4-10.2 8.4-5.8 0-9.5-2.7-11.4-6.3z" />
      </svg>
    )
  }

  if (label === 'React') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="4.5" fill="#61dafb" />
        <ellipse cx="32" cy="32" rx="22" ry="9" fill="none" stroke="#61dafb" strokeWidth="3" />
        <ellipse cx="32" cy="32" rx="22" ry="9" fill="none" stroke="#61dafb" strokeWidth="3" transform="rotate(60 32 32)" />
        <ellipse cx="32" cy="32" rx="22" ry="9" fill="none" stroke="#61dafb" strokeWidth="3" transform="rotate(-60 32 32)" />
      </svg>
    )
  }

  if (label === 'TypeScript') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="8" width="48" height="48" rx="12" fill="#3178c6" />
        <path fill="#fff" d="M18 24h22v5h-8v23h-6V29h-8zm28 8c4.4 0 7 2.2 7.4 6.2h-5.2c-.2-1.4-1-2.1-2.6-2.1-1.5 0-2.4.6-2.4 1.7 0 1 .6 1.5 3 2l1.8.4c4.5 1 6.3 2.7 6.3 6.2 0 4.3-3.6 6.8-8.7 6.8-5.3 0-8.5-2.5-8.9-6.7H42c.3 1.6 1.4 2.4 3.4 2.4 1.8 0 2.8-.7 2.8-1.8 0-.9-.6-1.4-2.6-1.9l-1.8-.4c-4.2-.9-6.5-2.8-6.5-6.4 0-4.1 3.2-6.4 8.7-6.4z" />
      </svg>
    )
  }

  if (label === 'Tailwind') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#38bdf8" d="M20 26c3-4 6-6 10-6 6 0 9 4 11 8 1-2 3-4 6-4 3 0 5 2 7 6-3-4-6-6-10-6-6 0-9 4-11 8-1 2-3 4-6 4-3 0-5-2-7-6zm-11 12c3-4 6-6 10-6 6 0 9 4 11 8 1-2 3-4 6-4 3 0 5 2 7 6-3-4-6-6-10-6-6 0-9 4-11 8-1 2-3 4-6 4-3 0-5-2-7-6z" />
      </svg>
    )
  }

  if (label === 'Motion') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#8b5cf6" d="M12 44h10l10-24h10L32 44h10l10-24v24H12z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="22" fill="rgba(255,255,255,0.16)" />
      <path fill="#fff" d="M20 32h24v4H20zm12-12l12 12-12 12-2.8-2.8L38.3 32l-9.1-9.2z" />
    </svg>
  )
}


export default TechGlyph

