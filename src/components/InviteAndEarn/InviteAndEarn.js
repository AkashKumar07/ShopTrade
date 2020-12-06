import React from "react";

import * as classes from "./InviteAndEarn.module.css";

const InviteAndEarn = () => {
  return (
    <div className={classes.inviteAndEarn}>
      <p className={classes.inviteText}>
        Invite friends to Big Fashion Festival & get up to $150 MynCash for
        every person who visits
      </p>
      <button className={classes.inviteButton}>Invite Now</button>
    </div>
  );
};

export default InviteAndEarn;
