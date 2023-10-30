import { PhonebookInput } from './PhonebookInput/PhonebookInput';
import { Section } from './Section/Section';

export const App = () => {
  // state = {
  //   contacts: [],
  //   name: '',
  // };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Phonebook">
        <PhonebookInput />
      </Section>
      <Section title="Contacts"></Section>
    </div>
  );
};
