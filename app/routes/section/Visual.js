import React from 'react';
import { Link } from 'react-router-dom';
import * as vars from "app/models/js/variable.js";

export function Visual() {
  return (
        <section id="visual">
        <div className="rslides_container">
            <ul className="rslides centered-btns centered-btns1" id="slider1">
            <li
                id="centered-btns1_s0"
                style={{
                transition: "opacity 500ms ease-in-out",
                float: "none",
                display: "block",
                position: "absolute",
                zIndex: 1,
                opacity: 0
                }}
            >
                <img alt="visual1" src={vars.REACT_APP_URL + '/image/visual1.jpg'} />
            </li>
            <li
                className="centered-btns1_on"
                id="centered-btns1_s1"
                style={{
                transition: "opacity 500ms ease-in-out",
                float: "left",
                display: "list-item",
                position: "relative",
                zIndex: 2,
                opacity: 1
                }}
            >
                <img alt="visual2" src={vars.REACT_APP_URL + '/image/visual2.jpg'} />
            </li>
            </ul>
            <Link className="centered-btns_nav centered-btns1_nav prev" href="#">
            Previous
            </Link>
            <a className="centered-btns_nav centered-btns1_nav next" href="#">
            Next
            </a>
            <ul className="centered-btns_tabs centered-btns1_tabs">
            <li className="centered-btns1_s1">
                <a className="centered-btns1_s1" href="#">
                1
                </a>
            </li>
            <li className="centered-btns1_s2 centered-btns_here">
                <a className="centered-btns1_s2" href="#">
                2
                </a>
            </li>
            </ul>
        </div>
        </section>
  );
}

export default Visual;