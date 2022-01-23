export function getAppointmentsForDay(state, dayName) {
  for (const day of state.days) {
    if (day.name === dayName) {
      const appointmentIds = day.appointments;
      const appointments = [];
      for (const appointmentId of appointmentIds) {
        appointments.push(state.appointments[appointmentId]);
      }
      return appointments;
    }
  }
  return [];
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }
  const interviewObject = {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
  return interviewObject;
}

// export function getInterviewersForDay(state, dayName) {
//   for (const day of state.days) {
//     if (day.name === dayName) {
//       const interviewersIds = day.appointments.map((appointmentId)=>{
//         const appointment = state.appointments[appointmentId]
//         return appointment
//         // if (appointment.interview){
//         //   return appointment.interview.interviewer
//         // }
//       });
//       // console.log(day)
//       const interviewers = [];
//       for (const interviewersId of interviewersIds) {
//         interviewers.push(state.interviewers[interviewersId]);
//       }
//       console.log(interviewers)
//       return interviewers;
//     }
//   }
//   return [];
// }

export function getInterviewersForDay(state, dayName) {
  for (const day of state.days) {
    if (day.name === dayName) {
      const interviewerIds = day.interviewers;
      const interviewers = [];
      for (const interviewerId of interviewerIds) {
        interviewers.push(state.interviewers[interviewerId]);
      }
      return interviewers;
    }
  }
  return [];
}