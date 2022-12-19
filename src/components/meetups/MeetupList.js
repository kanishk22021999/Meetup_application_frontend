// import MeetupItem from './MeetupItem';
// import classes from './MeetupList.module.css';

// function MeetupList(props) {
//   return (
//     <ul className={classes.list}>
//       {props.meetups.map((meetup) => (
//         <MeetupItem
//           key={meetup.id}
//           id={meetup.id}
//           image={meetup.image}
//           title={meetup.title}
//           address={meetup.address}
//           description={meetup.description}
//           //   we could have imported this as meetup={meetup} but we need to destructure it then
//         />
//       ))}
//     </ul>
//   );
// }
// export default MeetupList;
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
    const {meetups} = props;
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
     <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
