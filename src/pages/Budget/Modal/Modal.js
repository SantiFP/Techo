import Styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import ModalVector from "../Assets/Vector-modal.png";
import Separation from "../Assets/separador.png";
import Cross from "../Assets/cross.png";
import {useState} from 'react';

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={Styles.backdrop} />;
};

const ModalOverlay = (props) => {

  const [files,setFile] = useState();

  const onLoad = (e) => {
    const files = e.target.files;
    let text = '';
    if (files.length !== 0) {
      for (let i = 0; i < files.length; i++) {
        text += `${files[i].name}
      `;
      }
      setFile(text); 
    } 
  }
  return (
    <div className={Styles.modal}>
      <div onClick={props.onClick} className={Styles.cross}>
        <img alt="cross" src={Cross} />
      </div>
      <div className={Styles.flexModal}>
        <p className={Styles.dragText}>ARRASTRAR Y SOLTAR ARCHIVO DE CARGA</p>
        <label className={Styles.drag}> 
          <input onChange={onLoad} className={Styles.fileInput} type="file" multiple />
          <div className={Styles.fileImg}>
            <img alt="modal" src={ModalVector} />
          </div> 
        </label>
        <label className={Styles.modalButton}>
          <input onChange={onLoad} className={Styles.none} type="file" multiple />
          SELECCIONAR ARCHIVO DESDE LA PC
        </label>

        <span style={ { fontWeight: '500' } }>{files}</span>

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
