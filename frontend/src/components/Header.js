function Header({title,desc}) {
    return (
        <header className="header">
            <h2>{title}</h2>
            <p>{desc}</p>
            <hr/>
        </header>
    )
}


export default Header
