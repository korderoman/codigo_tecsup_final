import './Loading.scss';

function Loading(){
    return (
        <>
            <section className="d-flex justify-content-center loading">
                <div className="d-flex flex-column  justify-content-center">
                    <div className="loading__ring">
                        <p className="loading__text">Loading...</p>
                    </div>
                </div>

            </section>

        </>
    );
}

export  default  Loading
