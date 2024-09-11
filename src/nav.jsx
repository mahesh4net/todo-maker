import Logo from "./assets/20240910_223638.png"

export default function Nav() {
  return (
    <>
      <div className="nav-container">
        <li>HOME</li>
        <li><img src={Logo} className="logo"></img></li>
        <li>GO TO APP</li>
      </div>
    </>
    )
}