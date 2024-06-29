import { useRef } from "react";

const Form = ({
  visitorDeleteIndex,
  setVisitorDeleteIndex,
  visitor,
  setVisitor,
  setSuccess
}) => {
  const handleDeleteVisitor = (e) => {
    e.preventDefault();
    const lst = [...visitor];
    lst.splice(visitorDeleteIndex, 1);
    setVisitor(lst);
    setVisitorDeleteIndex(null);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false)
    }, 3000);
    refForm.current.click();
  };

  const refForm = useRef(null);

  return (
    <>
      {/* <!-- Modal Body --> */}
      {/* <!-- if you want to close by clicking outside the modal, delete the last endpoint:data-bs-backdrop and data-bs-keyboard --> */}
      <div
        className="modal fade"
        id="modalId"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        role="dialog"
        aria-labelledby="modalTitleId"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-md"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="modalTitleId">
                Confirm Delete
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={refForm}
                onClick={() => setVisitorDeleteIndex(null)}
              ></button>
            </div>
            <form onSubmit={handleDeleteVisitor}>
              <div className="modal-body">
                Are you sure you want to delete this item?
              </div>
              <div className="modal-footer">
                <button
                  type="reset"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Form;