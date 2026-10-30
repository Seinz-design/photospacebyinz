import { Link } from 'react-router'

const styles =
    'inline-flex h-14 items-center justify-center gap-3 rounded-full bg-brand px-8 text-base font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:h-16 sm:px-10 sm:text-lg'

const Button = ({ to, className = '', children, ...props }) => {
    const classes = `${styles} ${className}`

    if (to) {
        return (
            <Link to={to} className={classes} {...props}>
                {children}
            </Link>
        )
    }

    return (
        <button type="button" className={classes} {...props}>
            {children}
        </button>
    )
}

export default Button