import { Link } from 'react-router-dom';


export const TitleBar = () => {
    return (
        <div>
            Mimir
            <Link to={'/game'}>New Game</Link>
            <Link to={'/cards'}>Manage Cards</Link>
        </div>
    );
}