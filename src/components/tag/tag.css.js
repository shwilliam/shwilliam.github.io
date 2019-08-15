import styled from 'styled-components'

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
  stylus: {
    text: '#f5222d',
    bg: '#fff1f0',
    border: '#ffa39e',
  },
  vanilla: {
    text: '#fa8c16',
    bg: '#fff7e6',
    border: '#ffd591',
  },
}

export const Tag = styled.span`
  display: inline-block;
  font-size: 0.8rem;
  color: ${({value}) => colors[value].text};
  background-color: ${({value}) => colors[value].bg};
  border-color: ${({value}) => colors[value].border};
  margin-right: 8px;
  padding: 0 7px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  white-space: nowrap;
`

export const TagButton = styled(Tag)`
  cursor: pointer;
  background-color: ${({active, value}) =>
    active ? colors[value].bg : 'transparent'};
  border-color: ${({active, value}) =>
    active ? colors[value].border : 'transparent'};
`
