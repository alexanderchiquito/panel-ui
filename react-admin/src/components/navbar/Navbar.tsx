import './navbar.scss'

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/logo.svg" alt="" />
        <span>Alexander</span>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" />
        <img src="/app.svg" alt="" />
        <img src="/expand.svg" alt="" />
        <div className="notification">
          <img src="notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img src="https://studiofutbol.com.ec/wp-content/uploads/2023/03/cr7-640x432.jpg" alt="" />
          <span>Alex</span>
        </div>
        <img src="/settings.svg" alt="" />


      </div>
    </div>
  )
}

export default Navbar