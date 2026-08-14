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
        <rect x="8" y="8" width="48" height="48" rx="8" fill="#f7df1e" />
        <path fill="#111827" d="M18.6 45.6l4.4-2.7c.9 1.6 1.8 3 3.9 3 2 0 3.2-.8 3.2-3.7V24.6h5.4v17.7c0 5.6-3.3 8.2-8.1 8.2-4.3 0-6.8-2.2-8.8-4.9z" />
        <path fill="#111827" d="M38.8 45l4.4-2.5c1.2 2 2.8 3.5 5.6 3.5 2.3 0 3.8-1.1 3.8-2.7 0-1.9-1.5-2.5-4-3.6l-1.4-.6c-4-1.7-6.6-3.8-6.6-8.3 0-4.1 3.1-7.3 8-7.3 3.5 0 6 1.2 7.8 4.4l-4.2 2.7c-.9-1.6-1.9-2.2-3.6-2.2-1.6 0-2.7 1-2.7 2.2 0 1.6 1 2.2 3.3 3.2l1.4.6c4.7 2 7.3 4 7.3 8.6 0 4.9-3.8 7.6-9 7.6-5 0-8.2-2.4-10.1-5.6z" />
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
        <path fill="#38bdf8" d="M32 18c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.4 3.1 1.7 4.5 3.1 2.3 2.3 5 4.9 10.7 4.9 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.4-3.1-1.7-4.5-3.1-2.3-2.3-5-4.9-10.7-4.9zM20.4 32c-6.4 0-10.4 3.2-12 9.6 2.4-3.2 5.2-4.4 8.4-3.6 1.8.4 3.1 1.7 4.5 3.1 2.3 2.3 5 4.9 10.7 4.9 6.4 0 10.4-3.2 12-9.6-2.4 3.2-5.2 4.4-8.4 3.6-1.8-.4-3.1-1.7-4.5-3.1-2.3-2.3-5-4.9-10.7-4.9z" />
      </svg>
    )
  }

  if (label === 'Figma') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#0acf83" d="M32 32a10 10 0 1 1-10 10V32z" />
        <path fill="#a259ff" d="M22 12h10v20H22a10 10 0 1 1 0-20z" />
        <path fill="#f24e1e" d="M32 12h10a10 10 0 0 1 0 20H32z" />
        <path fill="#ff7262" d="M22 32h10v20H22a10 10 0 1 1 0-20z" />
        <circle cx="42" cy="42" r="10" fill="#1abcfe" />
      </svg>
    )
  }

  if (label === 'Motion') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="8" y="8" width="48" height="48" rx="12" fill="#111827" />
        <path fill="#8b5cf6" d="M14 43h10.4l9.2-22H44L34.8 43h10.4L54 21v22H14z" />
        <path fill="#c4b5fd" d="M14 43h10.4l4.1-9.8H18.1z" opacity="0.9" />
      </svg>
    )
  }

  if (label === 'Next.js') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" fill="#000" />
        <path fill="#fff" d="M24 21h4.4l16 21.4V21H48v27h-4.3L27.6 26.5V48H24z" />
      </svg>
    )
  }

  if (label === 'Node.js') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#3c873a" d="M32 5 8 18v28l24 13 24-13V18z" />
        <path fill="#fff" d="M32 44c-6.6 0-9.8-3-9.8-3l1.9-2.9s2.9 2.5 8 2.5c2.7 0 4.4-1 4.4-2.4 0-1.6-1.9-2-5-2.6-4.7-.9-8.6-1.9-8.6-6.5 0-4 3.6-6.6 9.1-6.6 5 0 8.3 2.3 8.3 2.3l-1.9 3s-2.7-1.9-6.5-1.9c-2.6 0-4.1.9-4.1 2.3 0 1.5 1.9 1.9 5 2.5 4.6.9 8.5 2 8.5 6.6 0 4.3-3.7 6.7-9.3 6.7z" />
      </svg>
    )
  }

  if (label === 'Express.js') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="6" width="52" height="52" rx="14" fill="#111827" />
        <path fill="#fff" d="M12 39c1.4 1.7 3.7 2.7 6 2.7 3.7 0 6.1-2 6.6-5.3H20c-.4 1.2-1.3 1.9-2.9 1.9-2.1 0-3.4-1.4-3.6-3.6h13.1v-1.3c0-4.9-3-8.2-7.6-8.2-4.7 0-7.9 3.4-7.9 8.1 0 2.3.7 4.2 1.9 5.7zm2-8.7c.4-1.9 1.7-3.1 3.6-3.1 1.9 0 3.1 1.2 3.3 3.1zM33 24.6h4.4l3.4 4.9 3.4-4.9H49l-5.6 7.6L49.3 40h-4.5l-3.7-5.2L37.4 40H33l5.9-7.9z" />
      </svg>
    )
  }

  if (label === 'PostgreSQL') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" fill="#336791" />
        <path fill="#fff" d="M32 14c-8.8 0-14.6 6.6-14.6 15.6 0 3.7 1 7.5 2.9 10.6.5.8.6 1.4.4 2.3l-.9 3.4c-.2.8.4 1.5 1.2 1.2l4.1-1.5c.6-.2 1-.2 1.6 0 1.6.5 3.4.8 5.3.8 8.8 0 14.6-6.6 14.6-15.6C46.6 20.6 40.8 14 32 14zm0 4.6c1.7 0 3 1.3 3 3v3.4h2c.7 0 1.3.6 1.3 1.3s-.6 1.3-1.3 1.3h-2v9.1c0 1.7-1.3 3-3 3s-3-1.3-3-3v-9.1h-2c-.7 0-1.3-.6-1.3-1.3s.6-1.3 1.3-1.3h2v-3.4c0-1.7 1.3-3 3-3z" />
      </svg>
    )
  }

  if (label === 'MongoDB') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#47a248" d="M32 6c6 8 13 17 13 27a13 13 0 0 1-11 12.8V56h-4v-10.2A13 13 0 0 1 19 33c0-10 7-19 13-27z" />
        <path fill="#e8f5e9" d="M32 12v34" stroke="#e8f5e9" strokeWidth="1.6" />
      </svg>
    )
  }

  if (label === 'SQLite') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="6" width="52" height="52" rx="12" fill="#003b57" />
        <path fill="#8ec9e0" d="M18 24c0-2.2 6.3-4 14-4s14 1.8 14 4-6.3 4-14 4-14-1.8-14-4z" />
        <path fill="#fff" d="M18 24v16c0 2.2 6.3 4 14 4s14-1.8 14-4V24c0 2.2-6.3 4-14 4s-14-1.8-14-4z" opacity="0.92" />
      </svg>
    )
  }

  if (label === 'Docker') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="4" y="4" width="56" height="56" rx="14" fill="#2496ed" />
        <g fill="#fff">
          <rect x="16" y="28" width="7" height="7" />
          <rect x="25" y="28" width="7" height="7" />
          <rect x="34" y="28" width="7" height="7" />
          <rect x="25" y="19" width="7" height="7" />
          <rect x="34" y="19" width="7" height="7" />
        </g>
        <path fill="#fff" d="M12 32c0 8 6.5 13 15.5 13 11 0 18-5.6 20.5-13-1.7-1.3-4-1.8-6-1.4-.4-1.6-1.5-3-3-3.9l-1.2-.7-.8 1.2c-1 1.5-1.4 3.5-1 5.3-.9.5-2.6 1-4.5 1H12z" />
      </svg>
    )
  }

  if (label === 'Prisma') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#0c344b" d="M31 6c1-1.6 3-1.6 4 0l19 32c1 1.7.1 3.9-1.8 4.3l-30 6.6c-2 .4-3.7-1.5-3-3.4l10.5-38.1c.2-.5.4-1 1.3-1.4z" />
        <path fill="#fff" d="M32 20l9 15-14 3z" />
      </svg>
    )
  }

  if (label === 'Vercel') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <path fill="#fff" d="M32 12 54 50H10z" />
      </svg>
    )
  }

  if (label === 'Telegram API') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="26" fill="#26a5e4" />
        <path fill="#fff" d="M46.5 20.2 41 45.4c0 0-.7 1.9-2.8 1-2.1-.9-11.6-7.7-11.6-7.7-.2-.1-.4-.4-.4-.9.1-.6 1-1.2 1-1.2s16.6-14.8 17.1-15.3c.4-.4.3-.6-.3-.3-.4.2-19.9 12.5-22.1 13.9-.2.1-.7 0-.7 0l-6.9-2.3s-1.1-.4-.2-1.2c.2-.2 30.3-11.5 30.3-11.5s2.3-.9 2.1 1.3z" />
      </svg>
    )
  }

  if (label === 'REST API') {
    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect x="6" y="6" width="52" height="52" rx="14" fill="#1f2430" />
        <path fill="#E7AD43" d="M23 20 12 32l11 12 3.4-3.3L18.8 32l7.6-8.7zm18 0-3.4 3.3L45.2 32l-7.6 8.7L41 44l11-12z" />
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

