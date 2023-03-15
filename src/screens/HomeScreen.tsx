import React, {useCallback} from 'react';
import {FlatList} from 'native-base';
import {Box} from 'native-base';
import BirthdayCard from '../components/BirthdayCard';
import AppHeading from '../components/Heading';
import CalenderComponent from '../components/CalenderComponent';

import {useContacts} from '../firebase/useContacts';
import {
  birthdaysOfTheMonth,
  todaysBirthdays,
  getMarkedDates,
} from '../utils/dateFunctions';
import Loading from '../components/Loading';

export default function HomeScreen() {
  const {data, loading} = useContacts();

  const today = useCallback(() => {
    return todaysBirthdays(data);
  }, [data]);

  const thisMonth = useCallback(() => {
    return birthdaysOfTheMonth(data);
  }, [data]);

  const markedDates = useCallback(() => {
    return getMarkedDates(data);
  }, [data]);

  return (
    <Box>
      <CalenderComponent markedDates={markedDates()} />
      <AppHeading text="Today" />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={today()}
          renderItem={({item}) => <BirthdayCard contact={item} />}
        />
      )}
      <AppHeading text="This Month" />
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={thisMonth()}
          renderItem={({item}) => <BirthdayCard contact={item} />}
        />
      )}
    </Box>
  );
}
