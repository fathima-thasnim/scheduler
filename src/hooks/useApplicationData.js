import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`),
    ]).then((res) => {
      // console.log(res);
      // setDays(response.data)
      setState((prev) => ({
        ...prev,
        days: res[0].data,
        appointments: res[1].data,
        interviewers: res[2].data,
      }));
    });
  }, []);

  function updateSpots(requestType) {
    const days = [...state.days];
    console.log(requestType);
    
    const dayIndex = days.findIndex((day) => day.name === state.day);
    const day = days[dayIndex];
    
    if (requestType === "bookAppointment") {
      day.spots -= 1;
    } else {
      day.spots += 1;
    }
    days[dayIndex] = { ...day };
    setState((pre) => ({...pre, days}));
    
  }

  function bookInterview(id, interview, isCreating) {
    const appointment = {
      ...state.appointments[id],
      interview
    };
    
    // appointment.interview = {...interview}
    console.log(appointment.interview) 
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.put(`/api/appointments/${id}`, { interview }).then((res) => {
      if (isCreating) {
        console.log("bookAppointment")
        updateSpots("bookAppointment")
      }
      setState({
        ...state,
        appointments,
      });
    });
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios.delete(`/api/appointments/${id}`).then((res) => {
      updateSpots();
      setState({
        ...state,
        appointments,
      });
    });
  }

  return { state, setDay, bookInterview, cancelInterview };
}
