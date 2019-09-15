import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  header {
    text-align: center;
    line-height: 50px;
    height: 50px;
    background-color: red;
    color: white;
    width: 100%;
  }
`;

class Header extends WeElement {
  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        null,
        h(
          "header",
          {
            onClick: this.testClick.bind(this)
          },
          this.state.title
        )
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "微信"
    };
  }

  testClick() {
    this.setState({
      title: "支付宝"
    });
  }

  componentDidMount() {}
}

Header.css = `header{text-align:center;line-height:50px;height:50px;background-color:red;color:white;width:100%}`;
export default Header;
