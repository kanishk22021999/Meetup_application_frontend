import { useContext } from "react";
import FavouritesContext from "../../store/favourite-context";
import {Link} from 'react-router-dom';
import classes from './MainNavigation.module.css';
function MainNavigation(){
    const favouritesCntxt= useContext(FavouritesContext);

return <header className={classes.header}>
    <div className={classes.logo}>React Meetups App</div>
    <nav>
        <ul>
            <li>
                <Link to='/'>AllMeetups</Link>
            </li>
            <li>
                <Link to='/New_meetups'>NewMeetups</Link>
            </li>
            <li>
                <Link to='/Favourites'>Favourites 
                <span className={classes.badge}>{favouritesCntxt.nOfFavourites}</span>
                </Link>
            </li>
        </ul>
    </nav>
</header>;
}
export default MainNavigation;