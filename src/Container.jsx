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
    return (
      <div>
        <Wrap>
          <Inputs
            onChange={OnnameFilter}
            placeholder="Searching Price 🔍"
            type="number"
          />
          <Inputs onChange={OnPriceFilter} placeholder="Searching Name 🔍" />
          <Selected name="" id="">
            <option value="">sale</option>
            <option value="">price</option>
          </Selected>
        </Wrap>
        <Containers>
          {this.state.inputwords.map((value, index) => (
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
