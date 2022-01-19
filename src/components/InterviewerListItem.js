import React from "react";

import "components/InterviewerListItem.scss";

import classNames from "classnames";

export default function InterviewerListItem(props) {
  const { name, avatar, setInterviewer} = props;

  let interviewerClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected,
  });
   
  return (
    <li onClick={setInterviewer} className={interviewerClass}>
      <img
        className="interviewers__item-image"
        src={avatar}
        alt={name}
      />
      {props.selected&&name}
    </li>
  );
}