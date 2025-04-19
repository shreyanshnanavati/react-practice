import Card from "./card";

import { teamMembers } from '../data/teamMembers';

export default function CardList() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {teamMembers.map((member) => <Card key={member.email} title = {member.first_name} subtitle={ member.email}/>)}
    </div>
  );
}
