const Home=()=>{
    return(
        <>
        <div>
          <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to={0} className="active" />
    <li data-target="#carouselExampleCaptions" data-slide-to={1} />
    <li data-target="#carouselExampleCaptions" data-slide-to={2} />
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img style={{height:"600px"}} src={process.env.PUBLIC_URL+'../images/slider-image-2-1920x6002.jpg'} className="d-block w-100" alt="Slides" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Find your car today!</h5>
        <h4>Book the best car for you</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{height:"600px"}} src={process.env.PUBLIC_URL+'../images/slider-image-1-1920x6002.jpg'} className="d-block w-100" alt="Slides" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Find the best variant</h5>
        <h4>A lot of variants available</h4>
      </div>
    </div>
    <div className="carousel-item">
      <img style={{height:"600px"}} src={process.env.PUBLIC_URL+'../images/slider-image-3-1920x600.jpg'} className="d-block w-100" alt="Slides" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Best Services</h5>
        <h4>Full Functional Feedback System</h4>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev bg-transparent border-0" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="sr-only">Previous</span>
  </button>
  <button className="carousel-control-next bg-transparent border-0" type="button" data-target="#carouselExampleCaptions" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="sr-only">Next</span>
  </button>
</div>


  <div className="latest-products">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="section-heading">
            <h2>Offers (we also provide bike for short trip)</h2>
            <a href="offers.html">view more <i className="fa fa-angle-right" /></a>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="offers.html"><img src="images/offer-1-370x270.jpg" alt /></a>
            <div className="down-content">
              <a href="offers.html"><h4>TVS Star city</h4></a>
              <h6><small>from</small> Rs120  <small>per Day</small></h6>
              <h4>We keep your riding .</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="offers.html"><img src="images/offer-2-370x270.jpg" alt /></a>
            <div className="down-content">
              <a href="offers.html"><h4>Scooty</h4></a>
              <h6><small>from</small> Rs150 <small>per Day</small></h6>
              <h4>Ride scooty (for womens and mens both).</h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="product-item">
            <a href="offers.html"><img src="images/offer-3-370x270.jpg" alt /></a>
            <div className="down-content">
              <a href="offers.html"><h4>Bullet</h4></a>
              <h6><small>from</small> Rs180 <small>per Day</small></h6>
              <h4>Bullet- Made like a gun.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    )
}

export default Home;