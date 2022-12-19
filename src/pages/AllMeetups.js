import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

// const DUMMY_DATA = [
//     {
//       id: 'm1',
//       title: 'This is a first meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//     {
//       id: 'm2',
//       title: 'This is a second meetup',
//       image:
//         'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
//       address: 'Meetupstreet 5, 12345 Meetup City',
//       description:
//         'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
//     },
//   ];

//earlier we used dummy data, but now we will use data from our db,

function AllMeetups() {
  const [isLoading, setIsLoading] = useState(true);
  //use state always returns an array with exactly two elements,
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://react-learning-meetupapp-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        return response.json(); //this also returns a promise, so use .then operator
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = { id: key, ...data[key] };
          //distribute data key into obj 
          meetups.push(meetup);
        }
        //data is returned in json, but we expect array so
        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);
  //use effect hook to save from infinite loop, it takes two parameter, function and an array of dependency

  //fetch returns a promise, so we can use then method
  // fetch(
  //   "https://react-learning-meetupapp-default-rtdb.firebaseio.com/meetups.json"
  // )
  //   .then((response) => {
  //     return response.json(); //this also returns a promise, so use .then operator
  //   })
  //   .then((data) => {
  //     setIsLoading(false);
  //     setLoadedMeetups(data);
  //   });

  if (isLoading) {
    return (
      <section>
        <p>Loadinggg.......</p>
      </section>
    );
  }
  return (
    <section>
      <h1>All mettupss</h1>
      <ul>
        <MeetupList meetups={loadedMeetups} />
        {/* <MeetupList meetups={DUMMY_DATA} test={10}/> */}
        {/* {DUMMY_DATA.map((meetup)=>{return <li key={meetup.id}>{meetup.title}</li>;})} */}
      </ul>
    </section>
  );
}
export default AllMeetups;

// import { useState, useEffect } from 'react';

// import MeetupList from '../components/meetups/MeetupList';

// function AllMeetupsPage() {
//   const [isLoading, setIsLoading] = useState(true);
//   const [loadedMeetups, setLoadedMeetups] = useState([]);

//   useEffect(() => {
//     setIsLoading(true);
//     fetch(
//       'https://react-getting-started-48dec-default-rtdb.firebaseio.com/meetups.json'
//     )
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         const meetups = [];

//         for (const key in data) {
//           const meetup = {
//             id: key,
//             ...data[key]
//           };

//           meetups.push(meetup);
//         }

//         setIsLoading(false);
//         setLoadedMeetups(meetups);
//       });
//   }, []);

//   if (isLoading) {
//     return (
//       <section>
//         <p>Loading...</p>
//       </section>
//     );
//   }

//   return (
//     <section>
//       <h1>All Meetups</h1>
//       <MeetupList meetups={loadedMeetups} />
//     </section>
//   );
// }

// export default AllMeetupsPage;
