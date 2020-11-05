import { Children } from 'react';
import '../../administrators/layout/admin.css';
const Modal = (props) => {
    const { title, submitButtonName, content, isShow, onClose, onSubmit, children } = props;
    if (!isShow) {
        return "";
    }
    return (
        <div className="modal show" id="modal-lg" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: "block" }}>
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">{title}</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={onClose}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                    <div className="modal-footer justify-content-between">
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={onClose}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={onSubmit}>{submitButtonName}</button>
                    </div>
                </div>
            </div>

        </div >
    );
}
export default Modal;