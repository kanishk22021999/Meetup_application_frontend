// static code
// function MeetupItem(){
// return <li>
//     <div><img src="" alt=""/></div>
//     <div>
//         <h3>TITLE</h3>
//         <address>ADDRESS</address>
//         <p>DESCRIPTION</p>
//     </div>
//     <div>
//         <button>ADD TO Favourites</button>
//     </div>
// </li>;
// }

// export default MeetupItem;
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import { useContext } from "react";
import FavouritesContext from "../../store/favourite-context";

function MeetupItem(props) {
  const favouritesCntxt = useContext(FavouritesContext);
  const itemIsFavourite = favouritesCntxt.itemIsFavourite(props.id);

  function toggleFavouriteButtonHandler() {
    if (itemIsFavourite) {
      favouritesCntxt.removeFavourite(props.id);
    } else {
      favouritesCntxt.addFavourite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteButtonHandler}>
            {itemIsFavourite ? "Remove from Favourites" : "To Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
