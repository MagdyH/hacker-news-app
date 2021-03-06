import * as React from 'react';
import Search from './search';
import image from '../logo-hn-search-a822432b.webp';
import Container from '@material-ui/core/Container';

class SearchHeader extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (< >
            <header className="fixed ">
                <nav className="SearchHeader_search">
                    <a className="Search-Header-Icon">
                        <img className="header-img" alt={''} src={image} />
                        <div className="Search-Header-Label">Search <br /> Hacker News</div>
                    </a>
                    <Search searchType={this.props.searchMode} />
                </nav>
            </header>
        </ >)
    }
}

export default SearchHeader;