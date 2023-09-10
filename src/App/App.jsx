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


export const App = () => {
  return (
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
        <FriendList friends={friends } />        
      </Section>
      <Section title="Transactions">
        <TransactionHistory items={transactions}/>
      </Section>
  </Container>
  );
}

