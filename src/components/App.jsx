import { Card } from "./Card/Card"
import { Profile } from "./Profile/Profile"
import { StatisticsList } from "./StatisticsList/StatisticsList";
import { Section } from "./Section/Section";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import user from '../user.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import statistics from '../statistics.json';


export const App = () => {
  return (
    <div>    
   <Section title = "Profile">    
    <Profile username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
      </Section>
      <Section title="Statistics">
        <StatisticsList items={statistics}/>
      </Section>
      <Section title="Friends">
        <FriendList items={friends } />        
      </Section>
      <Section title="Transactions">
        <TransactionHistory items={transactions}/>
      </Section>
  </div>
  );
}

