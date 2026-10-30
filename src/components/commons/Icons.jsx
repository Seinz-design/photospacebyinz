const base = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
}

export const ArrowRightIcon = ({ className = 'size-5' }) => (
    <svg viewBox="0 0 24 24" className={className} {...base}>
        <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
)

export const CameraIcon = ({ className = 'size-7' }) => (
    <svg viewBox="0 0 24 24" className={className} {...base}>
        <path d="M4 8a2 2 0 0 1 2-2h1.5l1.2-2h6.6l1.2 2H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
        <circle cx="12" cy="13" r="3.2" />
    </svg>
)

export const SparkleIcon = ({ className = 'size-7' }) => (
    <svg viewBox="0 0 24 24" className={className} {...base}>
        <path d="M10 6l1.6 4.4L16 12l-4.4 1.6L10 18l-1.6-4.4L4 12l4.4-1.6L10 6Z" />
        <path d="M18 3v4M16 5h4M18.5 15v3M17 16.5h3" />
    </svg>
)

export const DownloadIcon = ({ className = 'size-7' }) => (
    <svg viewBox="0 0 24 24" className={className} {...base}>
        <path d="M12 4v11M7.5 10.5 12 15l4.5-4.5M5 19h14" />
    </svg>
)

export const CameraLogo = ({ className = 'w-52' }) => (
    <img
        src="/src/assets/Logo Inz Visuals black.png"
        alt="Logo Web Photobooth"
        className={className}
        {...base}
    />
)
export const InzLogo = ({ className = 'w-52' }) => (
    <img
        src="/src/assets/Logo.png"
        alt="Logo Web Photobooth"
        className={className}
    />
)