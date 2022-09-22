import React, { Component } from "react";
import {
  Image,
  Wrapper,
  Containers,
  Inputs,
  Selected,
  Wrap,
} from "./Containerstyle";
import { data } from "./data";
class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputwords: data,
      selecteds: "price",
    };
  }
  render() {
    const OnnameFilter = ({ target: { value } }) => {
      let str = data.filter((vll) => vll.price.includes(value));
      this.setState({ inputwords: str });
    };
    const OnPriceFilter = ({ target: { value } }) => {
      let res = data.filter((vl) =>
        vl.name.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ inputwords: res });
    };
    console.log(this.state.selecteds);
    return (
      <div>
        <Wrap>
          <Inputs
            onChange={OnnameFilter}
            placeholder="Searching Price 🔍"
            type="number"
          />
          <Inputs onChange={OnPriceFilter} placeholder="Searching Name 🔍" />
          <Selected
            onChange={(e) => this.setState({ selecteds: e.target.value })}
            name=""
            id=""
          >
            <option value="price">pricee</option>
            <option value="sale">saale</option>
          </Selected>
        </Wrap>
        <Containers>
          {this.state.inputwords
            .filter((item) => this.state.selecteds in item)
            .map((value, index) => (
              <Wrapper>
                <Image src={value.Img} alt="" />
                <div>
                  <h3>{value.price}</h3>
                  <del>{value.sale}</del>
                </div>
                <h1>{value.name}</h1>
              </Wrapper>
            ))}
        </Containers>
      </div>
    );
  }
}

export default Container;
