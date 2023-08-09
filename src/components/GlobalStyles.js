import styled from "styled-components";

export const FlexColumn = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  width: 100%;
`;

export const Dark = styled.section`
  background: linear-gradient(
    to top,
    #000000a9,
    #000000a9,
    #000000a9,
    #000000a9
  );
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding: 10px;
  width: 100%;
  @media (min-width: 1000px) {
    padding: 30px;
  }
`;

export const FlexColRow = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
  width: 100%;
  @media (min-width: 800px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const FlexColmn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Anchor = styled.a`
  color: #ccc;
  cursor: pointer;
  margin: 3px;
  padding: 5px;
  text-decoration: none;
  transition: 0.3s;
  &:hover {
    color: rgba(78, 134, 197, 1.74);
    transform: translateX(5px);
  }
`;
