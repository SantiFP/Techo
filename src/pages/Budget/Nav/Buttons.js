import Styles from "../Budget.module.css";
import load from "../Assets/Vector carga.png";
import download from "../Assets/Vector descarga.png";

const Buttons = ({ onShowModal,onDownloadExcel }) => {

  return (
    <>
      <div className={Styles.buttons}>
        <div className={`${Styles.buttonBlue}`} onClick={onDownloadExcel}>
          <img alt="download" src={download} />
          <span style={{ marginLeft: "0.5rem" }}>DESCARGAR</span>
        </div>

        <div onClick={onShowModal} className={Styles.buttonWhite}>
          <img alt="load" src={load} />
          <span style={{ marginLeft: "0.5rem" }}>CARGAR</span>
        </div>
      </div>
    </>
  );
};

export default Buttons;
