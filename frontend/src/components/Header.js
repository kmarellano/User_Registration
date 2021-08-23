import {useHistory} from 'react-router'
function Header({title,desc,link,visible}) {
    const history = useHistory();
    const setLink = (to) =>{
        history.push(`/${to}`)
    }
    return (
        <header className="header">
            {visible?(<button className="btn2" onClick={()=> setLink(link)}>Back</button>): ''}
            <h2>{title}</h2>
            <p>{desc}</p>
            <hr/>
        </header>
    )
}

Header.defaultProps ={
    visible : false,
    link : '',
}

export default Header
