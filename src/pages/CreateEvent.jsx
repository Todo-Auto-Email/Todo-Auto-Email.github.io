import React from "react";
export default function CreateEvent() {
  return (
    <>
      <label for="eventName">Enter Event Name:</label>
      <input type="text" name="eventName" />
      <br />
      <label for="eventtime">Event Date and time:</label>
      <input type="datetime-local" name="eventtime" />
      <br />
      <label for="eventUrl">Event Url:</label>
      <input type="url" name="eventUrl" />
      <br />
      <button>Submit</button>
    </>
  );
}
