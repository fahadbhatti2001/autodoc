import { Link } from 'react-router-dom'
import Image from '../images/main_header.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#AutoDocAI</h4>
          <h1> AI based diagnostics in car engines </h1>
          <p>
            {' '}
            "Experience a safer, more reliable driving experience with our
            AI-powered fault prediction technology, revolutionising the
            automobile industry."
          </p>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
