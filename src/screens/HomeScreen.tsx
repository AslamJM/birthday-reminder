import React, {useCallback} from 'react';
import {SafeAreaView} from 'react-native';
import BirthdayCard from '../components/BirthdayCard';
import AppHeading from '../components/Heading';
import CalenderComponent from '../components/CalenderComponent';
import {Dimensions} from 'react-native';
import {
  birthdaysOfTheMonth,
  todaysBirthdays,
  getMarkedDates,
} from '../utils/dateFunctions';
import Loading from '../components/Loading';

import {useAtomValue} from 'jotai';
import {contactsAtom, loadingAtom} from '../atoms';
import {ScrollView} from 'native-base';

export default function HomeScreen() {
  const data = useAtomValue(contactsAtom);
  const loading = useAtomValue(loadingAtom);

  const height = Dimensions.get('screen').height;

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
    <SafeAreaView>
      <CalenderComponent markedDates={markedDates()} />
      <ScrollView height={height * 0.5}>
        <AppHeading text="Today" />
        {loading ? (
          <Loading />
        ) : (
          <>
            {today().map(c => (
              <BirthdayCard key={c.name} contact={c} />
            ))}
          </>
        )}
        <AppHeading text="This Month" />
        {loading ? (
          <Loading />
        ) : (
          <>
            {thisMonth().map(c => (
              <BirthdayCard key={c.name} contact={c} />
            ))}
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
