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
  graphql: {
    text: '#722ed1',
    bg: '#f9f0ff',
    border: '#d3adf7',
  },
}

export const Tag = styled.span`
  display: inline-block;
  position: relative;
  bottom: 0.16rem;
  margin-left: 0.5rem;
  padding: 0 0.4rem;
  line-height: 1.3;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  white-space: nowrap;
  font-size: 0.7rem;
  color: ${({value}) => colors[value].text};
  background-color: ${({value}) => colors[value].bg};
  border-color: ${({value}) => colors[value].border};
`

export const TagButton = styled(Tag)`
  cursor: pointer;
  background-color: ${({active, value}) =>
    active ? colors[value].bg : 'transparent'};
  border-color: ${({active, value}) =>
    active ? colors[value].border : 'transparent'};
`
