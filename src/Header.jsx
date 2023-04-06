import   Logo from  "./logo.svg"

function Header(){
    return (
        <header className="header">
            <a href="#" className="logo">
                <img src={Logo} alt="" width={158} height={30} />
                </a>
            <p>React Course - Project 1</p>
        </header>
    )
}

export default Header;