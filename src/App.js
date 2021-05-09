import SongList from './components/SongList';
import SongDetail from './components/SongDetail';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

const App = () => {
    return (
    
    <div>
        <header><AppHeader /></header>
        <div className='left'>
        <SongList />
        </div>
        <div className='right panel'>
        <SongDetail />
        </div>
    <footer><AppFooter /></footer>
    </div>
    );
}

export default App;