export default businessData => {
  const { city, state, street, zip, name } = businessData;
  return `https://www.google.com/maps/dir/?api=1&destination=${convertString(
    name
  )}+${convertString(street)}+${convertString(city)}+${convertString(
    state
  )}+${convertString(zip)}`;
};

const convertString = str => str.split(' ').join('+');
