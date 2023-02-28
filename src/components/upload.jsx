
export function Upload () {
  return (
    <>
      <div className="page-top-section flex-1">
        <a href="#" className="back-arrow d-flex mb-3 text-decoration-none">
          <i class="material-icons">keyboard_arrow_left</i>
        </a>
        <div className="image-upload-box d-flex align-items-center justify-content-center border mb-2 mx-auto">
        </div>
        <span className="text-white fw-bold d-inline-block mb-5">Change Photo</span>
      </div>
      <input type="text" className="form-control p-3 jv-input text-white mb-4" placeholder="Add Prompt here" />
      <div className="button-grp">
        <button className="btn btn-dark text-uppercase">
          Clear
        </button>
        <button className="btn btn-default text-uppercase ms-4">
          Submit
        </button>
      </div>
    </>
  );
}