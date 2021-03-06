import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const { days, value } = props;
  const dayListArray = days.map((thisDay) => (
    <DayListItem
      key={thisDay.id}
      name={thisDay.name}
      spots={thisDay.spots}
      selected={thisDay.name === value}
      setDay={props.onChange}
    />
  ));
  return <ul>{dayListArray}</ul>;
}
