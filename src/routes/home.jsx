import * as React from 'react';
import SearchHeader from '../components/search-header';
import SearchResult from '../components/search-result';
import Container from '@material-ui/core/Container';

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<div className={'MuiContainer-root'}>
            <SearchHeader />
            <SearchResult />
        </div>)
    }
}

export default Home;