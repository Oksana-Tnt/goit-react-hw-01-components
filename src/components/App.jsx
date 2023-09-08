import { Card } from "./Card/Card"
import { Profile } from "./Profile/Profile"
import user from '../user.json';
import { Section } from "./Section/Section";


export const App = () => {
  return (
    <Section title = 'Profile'>
    <Profile username={user.username} 
    tag={user.tag} 
    location={user.location} 
    avatar={user.avatar} 
    stats={user.stats}/>
    </Section>    
  );
}

