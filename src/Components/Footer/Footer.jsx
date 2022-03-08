import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="bg-dark  text-center position-fixed p-2 bottom-0 start-0 end-0">
          <h3 className="text-white fw-bold">
            <span>
              <i className="fa-solid fa-shoe-prints text-danger opacity-75 pe-2"></i>{" "}
              <i className="fa-solid fa-shoe-prints text-danger opacity-75 pe-2"></i>
              <i className="fa-solid fa-shoe-prints text-danger opacity-75 pe-4"></i>
            </span>
            Footer ...{" "}
            <span>
              <i className="fa-solid fa-shoe-prints text-danger opacity-75 ps-3"></i>
              <i className="fa-solid fa-shoe-prints text-danger opacity-75 ps-2"></i>
              <i className="fa-solid fa-shoe-prints text-danger opacity-75 ps-2"></i>{" "}
            </span>
          </h3>
        </footer>
      </>
    );
  }
}
