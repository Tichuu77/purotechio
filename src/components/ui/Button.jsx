export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  ...props
}) {
  const base =
    'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-water-500 cursor-pointer select-none'

  const variants = {
    primary:
      'bg-navy-900 text-white hover:bg-navy-800 active:bg-navy-950 shadow-lg shadow-navy-900/20 hover:shadow-xl hover:shadow-navy-900/30 hover:-translate-y-0.5',
    secondary:
      'bg-white text-navy-900 border border-navy-200 hover:border-navy-300 hover:bg-navy-50 active:bg-navy-100 hover:-translate-y-0.5',
    water:
      'bg-water-600 text-white hover:bg-water-700 active:bg-water-800 shadow-lg shadow-water-600/20 hover:shadow-xl hover:shadow-water-600/30 hover:-translate-y-0.5',
    ghost:
      'text-navy-700 hover:text-navy-900 hover:bg-navy-50 active:bg-navy-100',
    light:
      'bg-white/10 text-white border border-white/20 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm hover:-translate-y-0.5',
  }

  const sizes = {
    sm: 'text-sm px-4 py-2 gap-1.5',
    md: 'text-sm px-6 py-3 gap-2',
    lg: 'text-base px-8 py-3.5 gap-2.5',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''
  } ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes} {...props}>
      {children}
    </button>
  )
}
