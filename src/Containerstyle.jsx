import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 3%;
`;

export const Containers = styled.div`
  display: flex;
  flex-wrap: wrap;
  display: flex;
`;
export const Selected = styled.select`
  width: 20%;
  height: 40px;
  font-size: 20px;
  border: 1px solid red;
  cursor: pointer;
  margin-left: 5%;
  color: green;
`;
export const Wrapper = styled.div`
  line-height: 1px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 3% 6%;
  width: 300px;
  > div {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-left: 20px;
  }
`;
export const Image = styled.img`
  height: 100px;
  width: 200px;
`;
export const Inputs = styled.input`
  width: 50%;
  height: 40px;
  font-size: 30px;
  margin-left: 2%;
  color: green;
  cursor: pointer;
  ::placeholder {
    color: green;
  }
`;
