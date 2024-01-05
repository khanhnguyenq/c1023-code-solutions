import './App.css';
import { AppDrawer } from './AppDrawer';

const menuItems = [
  'The Legend of Zelda',
  'A Link to the Past',
  'Ocarina of Time',
  'The Wind Waker',
  'Breath of the Wild',
  'Tears of the Kingdom',
];

function App() {
  return <AppDrawer header={menuItems} />;
}

export default App;
