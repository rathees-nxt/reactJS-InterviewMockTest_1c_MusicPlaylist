import styled from 'styled-components'

export const MusicListContainer = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`

export const MusicContent = styled.div`
  display: flex;
  flex-direction: ${props => (props.space ? 'column' : 'row')};
  justify-content: ${props => (props.space ? 'flex-start' : 'center')};
  align-items: ${props => (props.space ? '' : 'center')};
  margin-left: ${props => (props.space ? '20px' : '')};
`

export const MusicImage = styled.img`
  width: 200px;
  height: 100px;
  border-radius: 10px;
`

export const MusicName = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: ;
`

export const MusicGenre = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  color: ${props => (props.color ? '#3b82f6' : '#cbd5e1')};
`

export const MusicDelete = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: #ffffff;
`

export const DurationContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 110px;
`
