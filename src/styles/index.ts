import styled from "styled-components";

export const Wrapper = styled.div<{ open: boolean }>`
  font-family: inherit;
  font-size: inherit;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
  padding-bottom: ${(props) => (props.open ? "8px" : "8px")};
  background-color: #fff;
  min-width: 250px;
  max-width: 100%;
  border: 1px solid #d1d9e0;
  border-radius: 0.25rem;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const HeaderTitle = styled.small`
  color: #4a556530;
  font-size: 0.75rem;
`;

export const Button = styled.button`
  font-family: inherit;
  font-size: 0.75rem;
  border: 1px solid #d1d9e0;
  border-radius: 0.25rem;
  outline: none;
  background-color: #fff;
  color: #4a5565;
  cursor: pointer;
`;

export const DisplayWrapper = styled.div`
  padding: 4px;
  background-color: #f6f8fa;
  border-radius: 0.25rem;
  margin-top: 0.25rem;
`;

export const Pre = styled.pre<{ marginleft?: number }>`
  font-size: 0.75rem;
  white-space: pre-wrap;
  word-break: break-word;
  margin: 0;
  margin-left: ${(props) => (props.marginleft ? `${props.marginleft}px` : 0)};
`;

export const Code = styled.code`
  font-size: 0.75rem;
  color: #4a5565;
`;
