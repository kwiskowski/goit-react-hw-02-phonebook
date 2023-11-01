import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Section } from './Section/Section';

export const App = () => {
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
        <PhonebookForm />
      </Section>
      <Section title="Contacts"></Section>
    </div>
  );
};
