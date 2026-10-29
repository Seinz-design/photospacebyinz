import PageHead from './PageHead'

const PageLayout = ({ title, children, className = '' }) => {
    return (
        <>
            <PageHead title={title} />
            <main className={`min-h-screen ${className}`}>{children}</main>
        </>
    )
}

export default PageLayout