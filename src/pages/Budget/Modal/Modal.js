import Styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import ModalVector from "../Assets/Vector-modal.png";
import Separation from "../Assets/separador.png";
import Cross from "../Assets/cross.png";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={Styles.backdrop} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={Styles.modal}>
      <div onClick={props.onClick} className={Styles.cross}>
        <img alt="cross" src={Cross} />
      </div>
      <div className={Styles.flexModal}>
        <p className={Styles.dragText}>ARRASTRAR Y SOLTAR ARCHIVO DE CARGA</p>
        <div className={Styles.drag}>
          <img alt="modal" src={ModalVector} />
        </div>
        <button className={Styles.modalButton}>
          SELECCIONAR ARCHIVO DESDE LA PC
        </button>

        <img alt="sep" src={Separation} />
        <p className={Styles.download}>
          ¿Necesitas descargar la plantilla de excel?
        </p>

        <div className={Styles.buttonWhite}>
          <span>DESCARGAR</span>
        </div>
      </div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay onClick={onClose} />, portalElement)}
    </>
  );
};

export default Modal;
