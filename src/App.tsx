import React, {
  ReactElement,
  useMemo,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import styled from "theme/styled";
import themeType from "theme/type";
import config from "config";

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

function App(): ReactElement {
  return <Container data-testid="app-container">React-Boilerplate</Container>;
}

export default App;
