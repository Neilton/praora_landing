

function Financial() {
    let FB = window.dataLayer;
    FB.push({
        event: 'visitor_on_financial',
        'web': 'praora_landing'
    });

    return (
        <>
            <section className="container">
                <h1 className="d-flex justify-content-center mt-5">Open Finance 2021</h1>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <iframe width="1000px" title="OpenFinance 2021" height="800px" src="https://app.powerbi.com/view?r=eyJrIjoiZDJjMGFjYTctNmE0Ni00NmRmLTg4ODAtYjliYzZmNjRmOTI3IiwidCI6IjA3NGYyZWFlLTlhZDEtNGRkNC1iY2I0LWFlOWEwN2MwMDc0MyJ9&pageName=ReportSectionda4204cca2997f380363" frameBorder="0" allowFullScreen={true}></iframe>
                </div>
            </section>
        </>
    );
}

export default Financial;
