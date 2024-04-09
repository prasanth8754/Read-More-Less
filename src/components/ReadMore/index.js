import {useState} from 'react'
import {BgCont, Heading, Img, Button, Cont} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props

  const [isOpened, setOpenStatus] = useState(false)

  const onChangeOpenStatus = () => {
    setOpenStatus(prevState => !prevState)
  }

  const firstOneSeventy = reactHooksDescription.slice(0, 170)

  return (
    <BgCont>
      <Cont>
        <Heading>React Hooks</Heading>
        <Heading as="p" para>
          Hooks are a new addition to React
        </Heading>
        <Img
          src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
          alt="react hooks"
        />
        <Heading as="p" para>
          {isOpened ? reactHooksDescription : firstOneSeventy}
        </Heading>
        <Button type="button" onClick={onChangeOpenStatus}>
          {isOpened ? 'Read Less' : 'Read More'}
        </Button>
      </Cont>
    </BgCont>
  )
}

export default ReadMore
