import React from "react";
import s from "./Social.module.css";

const Social = () => {
  return (
    <div>
      <a href="https://www.instagram.com/vladimir_polek/?hl=en">
        <img
          className={s.social}
          title="My Instagram"
          src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-png-full-colour-glyph.png"
        />
      </a>
      <a href="t.me/VolodymyrFree">
        <img
          className={s.social}
          title="My Telegram"
          src="https://logodownload.org/wp-content/uploads/2017/11/telegram-logo-1-1.png"
        />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100060106550894">
        <img
          className={s.social}
          title="My Facebook"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png"
        />
      </a>
    </div>
  );
};

export default Social;
