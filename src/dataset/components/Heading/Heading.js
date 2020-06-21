import styled from 'styled-components'

import { setInterFontSizeAndSpacing } from '../../../utils/font'

const Heading = styled.h2`
  ${setInterFontSizeAndSpacing(24)};
  margin: 0;
  margin-bottom: 20px;
  font-weight: 700;
`

export default Heading
