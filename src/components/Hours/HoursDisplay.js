import React from 'react';
import { Text, Box, Heading } from 'theme-ui';

import formatTime from './formatTime';
import prettyPrintDay from './prettyPrintDay';

// todo: Refactor this entire component, it works for now though.
// todo: run all of this script and store in context / graphql. Then just do the render methods here.
const HoursDisplay = ({ data }) => {
  const { hours } = data;
  const days = Object.keys(hours);

  // Function that builds an array of all hour labels for business and filters out the duplicates
  const uniqueHourLabels = days
    .map(day => hours[day].map(hourBlock => hourBlock.name))
    .flat()
    .filter((label, idx, arr) => arr.indexOf(label) === idx);

  const buildHoursObject = uniqueHourLabels.reduce((acc, label) => {
    // If there is no label yet in the object, add it

    if (!acc[label]) {
      // Assign the object key to

      acc[label] = [];
    }

    // If there IS a label already inside of the acc, we must then begin populating it with respected hours

    if (acc[label]) {
      acc[label] = [
        ...days
          .map(day =>
            hours[day]
              .filter(hourBlock => hourBlock.name === label)
              .map(hourBlock => hourBlock)
              .flat()
              .map(el => ({
                ...el,
                day: prettyPrintDay[day],
              }))
          )
          .flat(),
      ];
    }
    return acc;
  }, {});

  const combineEqualHours = hours => {
    if (hours.length === 1) {
      return [
        {
          [hours[0].name]: {
            day: hours.map(({ day }) => day),
            open: hours[0].open,
            close: hours[0].close,
            name: hours[0].name,
          },
        },
      ];
    } else {
      return hours.reduce((acc, cur) => {
        if (!acc.length) {
          acc[0] = {
            [cur.name]: [
              {
                day: [cur.day],
                open: cur.open,
                close: cur.close,
                name: cur.name,
              },
            ],
          };
        } else {
          if (
            acc[0][cur.name].some(
              el => el.close === cur.close && el.open === cur.open
            )
          ) {
            const found = acc[0][cur.name].find(
              el => el.open === cur.open && el.close === cur.close
            );
            found.day.push(cur.day);
          } else {
            acc[0][cur.name].push({
              day: [cur.day],
              open: cur.open,
              close: cur.close,
              name: cur.name,
            });
          }
        }
        // return an array with the correct keys
        return acc;
      }, []);
    }
  };

  const combineSimilarHours = () => {
    const hourTypes = Object.keys(buildHoursObject);
    const hoursFromObject = hourTypes.map(label =>
      buildHoursObject[label].map(hours => hours)
    );

    return hoursFromObject.map(hourObj => combineEqualHours(hourObj)[0]);
  };
  const renderFormattedHours = () => {
    const hourTypes = Object.keys(combineSimilarHours());

    return hourTypes.map(label => {
      const hourWithLabel = combineSimilarHours()[label];
      const hourTitle = Object.keys(hourWithLabel)[0];
      const abc = hourWithLabel[hourTitle];

      return (
        <>
          <Heading as='h3' sx={{ color: 'dark' }}>
            {hourTitle === 'null' ? '' : hourTitle}
          </Heading>
          {Array.isArray(abc) ? (
            <>
              {abc.map((obj, idx) => (
                <>
                  <Text as='p' sx={{ color: 'dark' }}>
                    {obj.day.length === 7 ? (
                      <p>Every day</p>
                    ) : (
                      obj.day.map((day, idx) => (
                        <>
                          <Text as='span' sx={{ fontWeight: 'bold' }}>
                            {day}
                          </Text>
                          {obj.day.length - 1 === idx ? ':' : ','}{' '}
                        </>
                      ))
                    )}
                    <Text as='p' sx={{ mb: 3, color: 'dark' }}>
                      <span>{formatTime(obj.open)} - </span>
                      <span>{formatTime(obj.close)} </span>
                    </Text>
                  </Text>
                </>
              ))}
            </>
          ) : (
            <p>abc.open</p>
          )}
        </>
      );
    });
  };

  return <Box>{renderFormattedHours()}</Box>;
};

export default HoursDisplay;
