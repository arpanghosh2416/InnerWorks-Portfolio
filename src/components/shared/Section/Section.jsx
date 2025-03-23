import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import css from "./Section.module.css";

const Section = (props) => {
  const { title, label, description, children, className, ...rest } = props;

  return (
    <section className={classNames(css.section, className)} {...rest}>
      <div data-aos="fade-up" className={css.sectionTitle}>
        <h2>{title}</h2>
        <p className={css.label}>{label}</p>
        <i className="text-xl fa-solid fa-building-columns text-primary-light"></i>
        <p className={css.description}>{description}</p>
      </div>

      {children}
    </section>
  );
};

const { node, string } = PropTypes;

Section.propTypes = {
  children: node,
  className: string,
  description: string,
  title: string.isRequired,
  label: string.isRequired,
};

export default Section;
