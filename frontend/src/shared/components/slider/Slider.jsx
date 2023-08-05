function Slider(){
    return (
      <>
          <div id="carouselMain" className="carousel slide carousel-fade" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      <img src="images/landing/hogwarts.jpg" className="d-block w-100" alt="hogwarts"/>
                  </div>
                  <div className="carousel-item">
                      <img src="images/landing/diablo.jpg" className="d-block w-100" alt="diablo"/>
                  </div>
                  <div className="carousel-item">
                      <img src="images/landing/horizons.jpg" className="d-block w-100" alt="horizons"/>
                  </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselMain"
                      data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselMain"
                      data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
              </button>
          </div>
      </>
    );
}

export default  Slider
