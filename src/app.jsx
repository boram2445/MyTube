import { Outlet } from 'react-router-dom';
import SearchHeader from './components/SearchHeader'

function App() {
  return (
    <div className="bg-black text-white pb-32">
      <SearchHeader />
      <Outlet />
    </div>
  );
}

export default App;
