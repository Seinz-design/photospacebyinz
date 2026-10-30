const FeatureItem = ({ icon, label, muted = false }) => (
    <li className="flex flex-1 flex-col items-center gap-2 px-2 text-center sm:flex-none sm:flex-row sm:gap-4 sm:px-10">
        <span className="text-ink">{icon}</span>
        <span
            className={`text-xs font-medium sm:text-base ${muted ? 'text-ink/50' : 'text-ink'}`}
        >
            {label}
        </span>
    </li>
)

export default FeatureItem