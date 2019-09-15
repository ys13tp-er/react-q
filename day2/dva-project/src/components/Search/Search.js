import { Component as WeElement, createElement as h } from "react";
import styled from "styled-components";
const StyledComponents = styled.div`
  weui-search-bar__label {
    transform-origin: 0px 0px;
    opacity: 1;
    transform: scale(1, 1);
  }
`;

class Search extends WeElement {
  render() {
    return h(
      StyledComponents,
      null,
      h(
        "div",
        {
          className: this.state.bool
            ? "weui-search-bar weui-search-bar_focusing"
            : "weui-search-bar",
          id: "searchBar"
        },
        h(
          "form",
          {
            className: "weui-search-bar__form"
          },
          h(
            "div",
            {
              className: "weui-search-bar__box"
            },
            h("i", {
              className: "weui-icon-search"
            }),
            h("input", {
              type: "search",
              className: "weui-search-bar__input",
              id: "searchInput",
              placeholder: "\u641C\u7D22",
              required: ""
            }),
            h("a", {
              href: "javascript:",
              className: "weui-icon-clear",
              id: "searchClear"
            })
          ),
          h(
            "label",
            {
              onClick: this.showInput.bind(this),
              className: "weui-search-bar__label",
              id: "searchText"
            },
            h("i", {
              className: "weui-icon-search"
            }),
            h("span", null, "\u641C\u7D22")
          )
        ),
        h(
          "a",
          {
            onClick: this.hideInput.bind(this),
            href: "javascript:",
            className: "weui-search-bar__cancel-btn",
            id: "searchCancel"
          },
          "\u53D6\u6D88"
        ),
        h(
          "button",
          {
            onClick: this.hideInput.bind(this)
          },
          "ok"
        )
      )
    );
  }

  constructor(props) {
    super(props);
    this.state = {
      bool: false
    };
  }

  showInput() {
    this.setState({
      bool: true
    });
  }

  hideInput() {
    this.setState({
      bool: false
    });
  }

  componentDidMount() {}
}

Search.css = `weui-search-bar__label{transform-origin:0px 0px;opacity:1;transform:scale(1, 1)}`;
export default Search;
