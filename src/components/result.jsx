export function Result({ fImage,isLoading }) {
  return (
    <>
      <div className="page-top-section flex-1">
        <div className="d-flex align-items-center mb-5">
          {/* <div className="img-box border me-4">
            <img src="" alt="photo"/>
          </div> */}
          {/* <span className="fw-bold text-white">Change input photo</span> */}
        </div>
        <div className="image-upload-box d-flex align-items-center justify-content-center border mb-5 mx-auto">
          {isLoading && (
            <svg class="spinner" viewBox="0 0 50 50">
              <circle
                class="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                stroke-width="5"
              ></circle>
            </svg>
          )}

          {fImage && <img src={fImage} alt="pic" />}
        </div>
      </div>
      <input
        type="text"
        className="form-control p-3 jv-input text-white mb-4"
        placeholder="Add Prompt here"
      />
      <div className="button-grp">
        <button className="btn btn-dark text-uppercase">Clear</button>
        <button className="btn btn-default text-uppercase ms-4">Submit</button>
      </div>
    </>
  );
}
