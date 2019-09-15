import { Component as WeElement, createElement as h } from "react";

class MinePage extends WeElement {
  render() {
    return h("div", null, "\u6211\u7684\u9875\u9762");
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "react"
    };
  }

  componentDidMount() {}
}

MinePage.css = ``;
export default MinePage;
