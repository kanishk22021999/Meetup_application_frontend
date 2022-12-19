import { useContext } from "react";
import FavouritesContext from "../store/favourite-context";
import MeetupList from "../components/meetups/MeetupList";

function Favourites() {
  const favouritesCntxt = useContext(FavouritesContext);

  let content;

  if (favouritesCntxt.nOfFavourites === 0) {
    content = <p>No favourites available</p>;
  } else {
    content = <MeetupList meetups={favouritesCntxt.favourites} />;
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  );
  //   return <div> favourites</div>;
}

export default Favourites;
