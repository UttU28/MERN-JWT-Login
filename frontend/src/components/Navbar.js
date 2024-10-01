import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className='container'>
                <h1><Link to="/">Home</Link></h1>
            </div>
        </header>
    )
}

export default Navbar;