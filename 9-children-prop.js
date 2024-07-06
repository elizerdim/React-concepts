// When you nest content inside a parent component, the component will receive that content 
// in a prop called 'children'. For example, the Card component below will receive 
// a children prop set to <Avatar /> and render it in a wrapper div. 
// You will often use the children prop for visual wrappers: panels, grids, etc.
import Avatar from './Avatar.js';

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{ 
          name: 'Katsuko Saruhashi',
          imageId: 'YfeOqp2'
        }}
      />
    </Card>
  );
}