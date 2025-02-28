import React from "react";
import "./Event.css";
const Events = () => {
  return (
    <div class="event">
    <div
      className="events-container" >
      <h2>Events & Schedule</h2>
      <ul className="events-list">
        <li>
          <strong>📌 Registration Deadline:</strong> <span>[Date]</span>
        </li>
        <li>
          <strong>📅 Event Date:</strong> <span>[Date]</span>
        </li>
        <li>
          <strong>🏆 Results Announcement:</strong> <span>[Date]</span>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Events;
