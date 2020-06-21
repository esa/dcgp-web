import styled from 'styled-components'

import { setInterFontSizeAndSpacing } from '../../../utils/font'

const SubHeader = styled.h2`
  ${setInterFontSizeAndSpacing(21)};
  font-weight: 600;
  margin: 0;
  margin-bottom: 8px;
`

export default SubHeader
