export default function Gallery({ width, height, radius, showThumbs, images }) {
  return (
    <>
      <div
        id="carouselExample"
        className="carousel slide"
        style={{ width: width, height: height, borderRadius: radius }}
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index == 0 ? "active" : ""}`}
            >
              <img
                src={image.src}
                className="d-block w-100"
                alt="..."
                width={width}
                height={height}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {showThumbs && (
        <div
          className="d-flex justify-content-center gap-4 mt-4"
          style={{ width: width }}
        >
          {images.map((image, index) => (
            <div key={index} className="col">
              <img
                key={index}
                src={image.src}
                className="d-block w-100 col-2"
                alt="..."
                style={{ borderRadius: radius }}
              />
            </div>
          ))}
        </div>
      )}
    </>
  );
}
