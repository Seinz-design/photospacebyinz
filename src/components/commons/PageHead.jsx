const PageHead = ({ title = 'Photo-Inz' }) => {
    return (
        <>
            <title>{title === 'Photo-Inz' ? title : `Photo-Inz | ${title} `}</title>
            <link rel="icon" href="/images/general/logo.svg" type="image/svg+xml" />
        </>
    )
}

export default PageHead