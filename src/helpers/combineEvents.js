export default (eventData, recurringData) => {
  return eventData.events.concat(recurringData.events);
};
