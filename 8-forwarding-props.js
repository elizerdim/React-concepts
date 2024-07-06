// instead of this...
function Profile({ person, size, isSepia, thickBorder }) {
  return (
    <div className="card">
      <Avatar
        person={person}
        size={size}
        isSepia={isSepia}
        thickBorder={thickBorder}
      />
    </div>
  );
}

// you can write this
function Profile(props) {
  return (
    <div className="card">
      <Avatar {...props} />
    </div>
  );
}

// Use spread syntax with restraint. If you’re using it in every other component, something is wrong. 
// Often, it indicates that you should split your components and pass children as JSX. 