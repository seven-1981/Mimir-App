import { Link, Outlet } from "react-router-dom";

const onClickNewGame = () => {
    console.log('NEW GAME clicked');
}

const onClickManageCards = () => {
    console.log('MANAGE CARDS clicked');
}

const ROUTE_NEW_GAME = '/game';
const ROUTE_MANAGE_CARDS = '/cards';

const TitleBar = () => {
    return (
        <div>
            Mimir
            <Link to={ROUTE_NEW_GAME}>New Game</Link>
            <Link to={ROUTE_MANAGE_CARDS}>Manage Cards</Link>
        </div>
    );
}

export const Home = () => {
    return (
        <div>
            <TitleBar/>
            <Outlet/>
        </div>
    );
}

