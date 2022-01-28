import { useState } from "react";
import { Done, PersonAdd } from "../svg/svgCollection";
import styles from "../../styles/Home.module.scss";

const FollowButton = function () {
  const [following, setFollowing] = useState(false);
  const FollowBtn = function () {
    return (
      <button
        className={styles.follow_button_container}
        onClick={() => setFollowing(!following)}
      >
        <div><PersonAdd /></div> <div>Follow</div>
      </button>
    );
  };

  const FollowingBtn = function () {
    return (
      <button className={styles.following_button_container} onClick={() => setFollowing(!following)}>
        <Done /> Following
      </button>
    );
  };

  return following ? <FollowingBtn /> : <FollowBtn />;
};

export default FollowButton;
