
import './App.css';
import Person from './componnents/Person';

const users = [
  {
  firstName:'Niki',
  lastName: 'Dymo',
  age: 21,
},
{
  firstName:'Kuki',
  lastName: 'Tort',
  age: 22,
},
] 
function App() {
  return (
    <>
    {users.map(user => <Person firstName={user.firstName} lastName={user.lastName} age={user.age} />)
    }
    
    </>
  );
}

export default App;
