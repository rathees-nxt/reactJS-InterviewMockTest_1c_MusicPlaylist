import {FiTrash} from 'react-icons/fi'
import {
  MusicListContainer,
  MusicContent,
  MusicName,
  MusicGenre,
  MusicDelete,
  MusicImage,
  DurationContent,
} from './styled'

const MusicItem = props => {
  const {musicDetails, deleteBtn} = props
  const {id, duration, genre, imageUrl, name} = musicDetails

  const onClickDeleteBtn = () => {
    deleteBtn(id)
  }

  return (
    <MusicListContainer>
      <MusicContent>
        <MusicImage src={imageUrl} alt="track" />
        <MusicContent space="true">
          <MusicName>{name}</MusicName>
          <MusicGenre color="true">{genre}</MusicGenre>
        </MusicContent>
      </MusicContent>
      <DurationContent>
        <MusicGenre>{duration}</MusicGenre>
        <MusicDelete data-testid="delete" onClick={onClickDeleteBtn}>
          <FiTrash size={20} />
        </MusicDelete>
      </DurationContent>
    </MusicListContainer>
  )
}

export default MusicItem
