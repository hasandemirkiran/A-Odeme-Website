import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">
        <li>
          <Link to="#0">İletişim</Link>
        </li>
        <li>
          <Link to="#0">Bize Ulaşın</Link>
        </li>
        <li>
          <Link to="#0">Sık Sorulan Sorular</Link>
        </li>
        <li>
          <Link to="#0">Destek</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
