import PageLayout from '../components/commons/PageLayout'
import Navbar from '../components/commons/Navbar'
import Button from '../components/commons/Button'
import FeatureItem from '../components/home/FeatureItem'
import {
    ArrowRightIcon,
    CameraIcon,
    InzLogo,
    DownloadIcon,
    SparkleIcon,
} from '../components/commons/Icons'

const FEATURES = [
    { label: 'Ambil Foto', icon: <CameraIcon /> },
    { label: 'Edit (Opsional)', icon: <SparkleIcon />, muted: true },
    { label: 'Download', icon: <DownloadIcon /> },
]

const HomePage = () => {
    return (
        <PageLayout className="flex flex-col bg-canvas font-sans text-ink">
            <Navbar />

            <section className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center px-6 py-10 text-center">
                <InzLogo className="w-36 text-ink sm:w-48 lg:w-60" />

                <h1 className="mt-8 text-4xl font-extrabold tracking-tight sm:mt-10 sm:text-6xl lg:text-7xl">
                    Photo-Inz Capture
                </h1>

                <p className="mt-4 max-w-md text-base text-ink/60 sm:mt-5 sm:max-w-xl sm:text-xl">
                    Ambil foto, edit, dan download — langsung dari browser.
                </p>

                <Button to="/layout" className="mt-8 sm:mt-10">
                    Mulai
                    <ArrowRightIcon />
                </Button>
            </section>

            <footer className="px-4 pb-10 sm:pb-14">
                <ul className="mx-auto flex w-full max-w-2xl divide-x divide-ink/10">
                    {FEATURES.map((item) => (
                        <FeatureItem key={item.label} {...item} />
                    ))}
                </ul>
            </footer>
        </PageLayout>
    )
}

export default HomePage