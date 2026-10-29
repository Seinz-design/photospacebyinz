const PageHead = ({ title = 'Photobooth' }) => {
    return (
        <>
            <title>{title === 'Photobooth' ? title : `Photo-Inz | ${title} `}</title>
            <link rel="icon" href="/images/general/logo.svg" type="image/svg+xml" />
        </>
    )
}

export default PageHead