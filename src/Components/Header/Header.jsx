import styles from "./Header.module.css";
import { getImageUrl } from "../../../utils";
import { useSelector } from "react-redux";

export const Header = () => {
  // const { fullname } = useSelector((state) => state.user);
  return (
    <div className={styles.header}>
      <div className={styles.whole}>
        <div className={styles.buttons}>
          <button>
            <img src={getImageUrl("icons/header/brightness.png")} alt="" />
          </button>
          <button>
            <img src={getImageUrl("icons/header/notif.png")} alt="" />
          </button>
        </div>

        <div className={styles.profile}>
          <img src={getImageUrl("icons/header/avatar.png")} alt="" />
          {/* {fullname} */}
        </div>
      </div>
    </div>
  );
};
