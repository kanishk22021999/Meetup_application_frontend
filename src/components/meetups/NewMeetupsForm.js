// import classes from "./NewMeetupsForm.module.css";
// import Card from "../ui/Card";
// function NewMeetupsForm() {
//   return (
//     <Card>
//       <form className={classes.form}>
//         <div className={classes.control}>
//           <label htmlFor="title">Meetup Title</label>
//           <input type="text" required id="title" />
//         </div>
//         <div className={classes.control}>
//           <label htmlFor="image">Meetup Image</label>
//           <input type='url' required id="image" />
//         </div>
//         <div className={classes.control}>
//             <label htmlFor='address'>Address</label>
//             <input type='text' required id='address'/>
//         </div>
//         <div className={classes.control}>
//             <label htmlFor='description'>Description</label>
//             <textarea type='text' required id='description' rows='5' ></textarea>
//         </div>
//         <div className={classes.actions}>
//         <button className={classes.button}>Add Meetup</button>
//         </div>

//       </form>
//     </Card>
//   );
// }
// export default NewMeetupsForm;

// above code creates the form, but it need to be handled, the data need to be received

import classes from "./NewMeetupsForm.module.css";
import Card from "../ui/Card";
import { useRef } from "react";

function NewMeetupsForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function SubmitHandler(event) {
    event.preventDefault(); //prevent default method to prevent browser default
    //now reading the inputs from form
    const enteredTitle = titleInputRef.current.value;
    //current is property of ref
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
    //console.log(meetupData);
  }
  return (
    <Card>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            required
            id="description"
            rows="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupsForm;
