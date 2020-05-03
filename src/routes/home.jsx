import * as React from 'react';
import SearchHeader from '../components/search-header';
import SearchResult from '../components/search-result';
import Container from '@material-ui/core/Container';

class Home extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (<Container>
            <SearchHeader />
            <SearchResult />
        </Container>)
    }
}

export default Home;