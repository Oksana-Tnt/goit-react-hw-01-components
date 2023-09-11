import { Profile } from "../components/Profile/Profile"
import { StatisticsList } from "../components/StatisticsList/StatisticsList";
import { Section } from "../components/Section/Section";
import { FriendList } from "../components/FriendList/FriendList";
import { TransactionHistory } from "../components/TransactionHistory/TransactionHistory";
import user from '../user.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import statistics from '../statistics.json';
import { Container } from "./App.styled";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    green: '#22c822',
    red: '#ef2424',
    white:'rgb(253, 248, 248)',
    colorText: 'rgb(42, 34, 34)',
    border: 'rgb(235, 235, 225)',
    backgroundColorHead: '#2f9cc0',
    backgroundColorTable : '#c8d9f4',
  },
};

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Container>    
   <Section title = "Profile">    
    <Profile username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      </Section>
      <Section title="Upload Stats">
        <StatisticsList statistics={statistics}/>
      </Section>
      <Section title="Friends">
          <FriendList friends={friends}/>        
      </Section>
      <Section title="Transactions">
        <TransactionHistory transactions={transactions}/>
      </Section>
      </Container>
      </ThemeProvider>
  );
}

