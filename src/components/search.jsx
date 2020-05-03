import * as React from 'react';
import Container from '@material-ui/core/Container';
import searchActions from '../actions/search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Search extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { Actions } = this.props;
        return (<div className="Search-container">
            <span className="Search-Icon">
                <i className="fa fa-search" aria-hidden="true"></i>
            </span>
            <input className="Search-Input" type="text" placeholder="Search stories by title, url or author" aria-label="Search" onChange={(event) => {
                Actions.searchStories(event.target.value);
            }} />

        </div>)
    }
}

function mapDispatcherToProps(dispatch) {
    return {
        Actions: bindActionCreators(searchActions, dispatch)
    }

}

export default connect(null,mapDispatcherToProps)(Search);