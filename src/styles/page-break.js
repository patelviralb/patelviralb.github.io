import styled from "styled-components";

export const Partition = styled.div`
  display: flex;
  width: 100%;
  height: 8px;
  margin: 3rem 0px 3rem 0px;
`;

export const PartitionBox = styled.div`
  height: 8px;
  margin: 0;
  flex-grow: 1;
  transition: all 0.8s ease-in-out;
  cursor: pointer;
  background-color: ${(props) => (props.color ? props.color : "")};
  &:hover {
    flex-grow: 12;
  }
`;
