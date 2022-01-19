import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const {days, day} = props
  const dayListArray = days.map((thisDay) => (
    <DayListItem
    key={thisDay.id}
    name={thisDay.name}
    spots={thisDay.spots}
    selected={thisDay.name === day}
    setDay= {props.setDay}
    />
  ));
  return (
    <ul>{dayListArray}</ul>
  );
}