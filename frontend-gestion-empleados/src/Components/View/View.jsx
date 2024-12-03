import Styled from './styles'
import Mainview from "../Mainview"
import Sidevar from "../Sidebar"

function View() {

  return (
    <Styled.Body>
      <Sidevar />
      <Mainview />
    </Styled.Body>
  )
}

export default View
