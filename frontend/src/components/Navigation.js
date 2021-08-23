import Header from './Header';
import {useHistory} from 'react-router';

function Navigation() {
    const history = useHistory();
    const navigateLink = (link) =>{
        console.log(link);
        history.push(`/${link}`);
    }

    return (
        <div>
            <Header title="Navigation Page" />
            <button className="btn" style={{padding: '10px 195px',backgroundColor:'black'}} 
            onClick={() => navigateLink('users')}>Users</button>
            <br />
            <br />
            <button className="btn" style={{padding: '10px 185px' ,backgroundColor:'steelblue'}} 
            onClick={()=>navigateLink('register')}>Register</button>

        </div>
    )
}

export default Navigation
