import VideoList from "../../components/videoList/VideoList";
import styles from "./homePage.module.css";
function HomePage() {
  return (
    <div className={styles["home-container"]}>
      <VideoList />
    </div>
  );
}

export default HomePage;
