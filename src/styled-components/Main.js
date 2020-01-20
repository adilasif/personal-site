import styled from 'styled-components';

import mixins from './mixins';
import theme from './theme';

const Main = styled.main`
  ${mixins.sidePadding};
  margin: 0 auto;
  width: 100%;
  background-color: ${theme.colors.background};
`;

export default Main;
