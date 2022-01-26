import styles from "../../styles/Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { Facebook,Twitter,Instagram,Youtube,InsertLink } from "../svg/svgCollection";

const IMAGEURL =
  "https://images.unsplash.com/photo-1643142232119-365fd82a4428?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const Card = function () {
  return (
    <div className={styles.card}>
      <img src={IMAGEURL} />

      <div className={styles.card_text}>
        <div>
          <h5>
            Nama saya <span className={styles.thinText}>@NamaSaya</span>
          </h5>
        </div>
        <div className={styles.smallText}>
          halo halo bandung is here, lets trakteer me a cup of tea!
          halo halo bandung is here, lets trakteer me a cup of tea!
        </div>
        <br />
        <div className={styles.flexRow}>
          <div className={styles.medText}>
            <span className={styles.boldText}>1.3k</span> Followers
          </div>
          <div className={styles.medText} style={{ marginLeft: "20px" }}>
            Cosplay
          </div>
        </div>
        <div className={styles.social_list}>
          <Link passHref href="https://www.facebook.com/">
           <div className={styles.social_circle}> <Facebook /></div>
          </Link>
          <Link passHref href="https://www.twitter.com/">
           <div className={styles.social_circle}> <Twitter /></div>
          </Link>
          <Link passHref href="https://www.instagram.com/">
           <div className={styles.social_circle}> <Instagram /></div>
          </Link>
          <Link passHref href="https://www.youtube.com/">
           <div className={styles.social_circle}> <Youtube /></div>
          </Link>
          <Link passHref href="#">
           <div className={styles.social_circle}> <InsertLink /></div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
