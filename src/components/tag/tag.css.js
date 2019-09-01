import styled from 'styled-components'
import MEDIA from 'helpers/mediaTemplates'

const colors = {
  react: {
    text: '#1890ff',
    bg: '#e6f7ff',
    border: '#91d5ff',
  },
  vue: {
    text: '#52c41a',
    bg: '#f6ffed',
    border: '#b7eb8f',
  },
  gatsby: {
    text: '#722ed1',
    bg: '#f9f0ff',
    border: '#d3adf7',
  },
  graphql: {
    text: '#fa541c',
    bg: '#fff2e8',
    border: '#ffbb96',
  },
  d3: {
    text: '#fa8c16',
    bg: '#fff7e6',
    border: '#ffd591;',
  },
  stylus: {
    text: '#f5222d',
    bg: '#fff1f0',
    border: '#ffa39e',
  },
  wordpress: {
    text: '#2f54eb',
    bg: '#f0f5ff',
    border: '#adc6ff',
  },
  vanilla: {
    text: '#faad14',
    bg: '#fffbe6',
    border: '#ffe58f',
  },
}

export const Tag = styled.span`
  position: relative;
  bottom: ${({variant}) => (variant === 'large' ? '0.2rem' : '-0.3rem')};
  display: inline-block;
  padding: 0 0.4rem;
  margin-right: 0.75rem;
  line-height: 1.3;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 0.7rem;
  color: ${({value}) => colors[value].text};
  background-color: ${({value}) => colors[value].bg};
  border-color: ${({value}) => colors[value].border};

  ${MEDIA.MIN_PHONE`
    margin-bottom: 0.5rem;
  `}
`

export const TagButton = styled(Tag)`
  cursor: pointer;
  background-color: ${({active, value}) =>
    active ? colors[value].bg : 'transparent'};
  border-color: ${({active, value}) =>
    active ? colors[value].border : 'transparent'};
  margin-bottom: 0;
`
