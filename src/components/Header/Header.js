import './Header.css'
const Header = (props) => {
    return (
        
            <header className="Header">
                <h1>Project 3</h1>
                <nav>
                    <ul className="NavLinks">
                        <li>Logout</li>
                        <li>Dashboard</li>
                        <li>Signup</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </header>
       
    )
}

export default Header;