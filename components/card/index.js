import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  InsertLink,
  MoreVert,
} from "../svg/svgCollection";
import FollowButton from "../followbtn";

function Card(props) {
  const {name,username,background_image,profile_image,caption,follower,profession} = props
  function alertAction(buttonName) {
    return alert(`This ${buttonName} was clicked!`);
  }
  return (
    <div className={styles.card}>
      <Image className={styles.background} src={background_image} width={303} layout="fixed" height={92} alt={background_image}/>
      <div className={styles.profile_frame}>
        <Image layout="fill" className={styles.profile} src={profile_image}  alt={profile_image}/>
      </div>
      <div className={styles.follow_btn}>
        <FollowButton />
      </div>
      <div
        className={styles.action_button}
        onClick={() => {
          alertAction("More Button");
        }}
      >
        <MoreVert />
      </div>
      <div className={styles.card_text}>
        <div>
          <h5>
            {name} <span className={styles.thinText}>@{username}</span>
          </h5>
        </div>
        <div className={styles.smallText}>
          {caption}
        </div>
        <br />
        <div className={styles.flexRow}>
          <div className={styles.medText}>
            <span className={styles.boldText}>{follower}</span> Followers
          </div>
          <div className={styles.medText} style={{ marginLeft: "20px" }}>
            {profession}
          </div>
        </div>
        <div className={styles.social_list}>
         
            <div className={styles.social_circle}   onClick={() => {
          alertAction("Facebook Link Button");
        }}>
              <Facebook />
            </div>
      
        
            <div className={styles.social_circle} onClick={() => {
          alertAction("Twitter Link Button");
        }}>
              <Twitter />
            </div>
         
        
            <div className={styles.social_circle} onClick={() => {
          alertAction("Instagram Link Button");
        }}>
              <Instagram />
            </div>
         
       
            <div className={styles.social_circle} onClick={() => {
          alertAction("Youtube Link Button");
        }}>
              <Youtube />
            </div>
      
            <div className={styles.social_circle} onClick={() => {
          alertAction("Insert Link Button");
        }}>
              <InsertLink />
            </div>
       
        </div>
      </div>
    </div>
  );
};

export default Card;
