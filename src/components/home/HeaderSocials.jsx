import React from "react";

const HeaderSocials = () => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://twitter.com/680NEWS/following"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-twitter"></i>
      </a>

      <a
        href="https://www.behance.net/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-behance"></i>
      </a>

      <a
        href="https://dribbble.com/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-dribbble"></i>
      </a>

      <a
        href="https://www.pinterest.ca/"
        className="home__social-link"
        target="_blank"
      >
        <i class="fa-brands fa-pinterest"></i>
      </a>
    </div>
  );
};

export default HeaderSocials;
