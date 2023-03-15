import dayjs from 'dayjs';

export const todaysBirthdays = (contacts: Contact[]) => {
  return contacts.filter(
    c => dayjs().format('DD/MM') === dayjs(c.dob).format('DD/MM'),
  );
};

export const birthdaysOfTheMonth = (contacts: Contact[]) => {
  return contacts.filter(c => dayjs().get('M') === dayjs(c.dob).get('M'));
};

export const getMarkedDates = (contacts: Contact[]) => {
  return contacts.map(
    c => `${dayjs().get('year')}-${dayjs(c.dob).format('MM-DD')}`,
  );
};
