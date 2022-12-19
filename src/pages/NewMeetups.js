import {useNavigate} from 'react-router-dom'

import NewMeetupsForm from "../components/meetups/NewMeetupsForm";
function NewMeetups() {

    const navigate = useNavigate();
    function OnAddMeetupHandler(meetupData){
        //http request post
        fetch('https://react-learning-meetupapp-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body : JSON.stringify(meetupData),
            headers: {'Content_type':'applicatioannn/json'}
        }).then(()=>{navigate('/')}) ;
    } 
  return (
    <section>
      <h1>Add New meetups</h1>
      <NewMeetupsForm onAddMeetup={OnAddMeetupHandler} />
    </section>
  );
}

export default NewMeetups;
