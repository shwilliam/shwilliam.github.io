import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

export const AboutLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  & > * + * {
    margin-top: 1.5rem;
  }

  ${MEDIA.MIN_TABLET`
    flex-direction: row-reverse;

    & > * + * {
      margin-top: 0;
      margin-right: 4.5rem;
    }
  `};

  ${MEDIA.MIN_DESKTOP`
    margin-top: 6rem;

    & > * + * {
      margin-top: 3rem;
    }
  `};
`
