// Props are the information that you pass to a JSX tag. 
// For example, className, src, alt, width, and height are some of the props you can pass to an <img>:
function Avatar() {
  return (
    <img
      className="avatar"
      src="https://i.imgur.com/1bX5QH6.jpg"
      alt="Lin Lanying"
      width={100}
      height={100}
    />
  );
}

export default function Profile() {
  return (
    <Avatar />
  );
}

// The props you can pass to an <img> tag are predefined (ReactDOM conforms to the HTML standard). 
//But you can pass any props to your own components, such as <Avatar>, to customize them:
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      person={{ name: 'Lin Lanying', imageId: '1bX5QH6' }} // this is an object inside JSX curlies, hence the double curly braces
      size={100}
    />
  );
}

// You can think of props like “knobs” that you can adjust. 
// They serve the same role as arguments serve for functions—in fact, 
// props are the only argument to your component! React component 
// functions accept a single argument, a props object.

// Props are not always static! Props reflect a component’s data 
// at any point in time, rather than only in the beginning.

// However, props are immutable—a term from computer science meaning “unchangeable”. 
// When a component needs to change its props (for example, in response to a user interaction or new data), 
//it will have to “ask” its parent component to pass it different props—a new object! 
//Its old props will then be cast aside, and eventually the JavaScript engine will reclaim the memory taken by them.