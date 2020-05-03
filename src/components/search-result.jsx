import * as React from 'react';
import Container from '@material-ui/core/Container';
import ApiClient from '../apis/apiClient';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

class SearchResult extends React.Component {
    constructor() {
        super();
        this.state = { items: [] }
    }

    componentDidMount() {
        const { searchQuery } = this.props
        ApiClient.getItems(searchQuery);
    }

    componentWillReceiveProps(nextProps) {
        const { items, searchQuery } = nextProps;
        if (nextProps.searchQuery !== this.props.searchQuery) {
            ApiClient.getItems(searchQuery);
        }
        this.setState({ items });
    }

    loadFunc = () => {
        const { searchQuery, items, page } = this.props;
        let nextBatch = items.length + 20;
        let nextPage = page + 1;
        ApiClient.getItems(searchQuery, nextBatch, nextPage);
    }

    render() {
        const { items } = this.state;
        const { itemsCount } = this.props;

        let stories = items.map((item) => {
            let createdDate = new Date(item.created_at);
            let currDate = new Date();

            let diffYears = currDate.getFullYear() - createdDate.getFullYear();
            let diffMon = -1;
            let diffDays = -1;
            if (diffYears == 0) {
                diffMon = currDate.getMonth() - createdDate.getMonth();
            }
            else if (diffMon == 0) {
                diffDays = currDate.getDay() - createdDate.getDay();
            }
            return <article key={item.objectID} className="Story">
                <div className="Story-container">
                    <div className="m-2">
                        <div className="Story-title">
                            <a href={item.url}>
                                <span>{item.title}</span>
                            </a>
                            {item.url && <a className="Story-link" href={item.url} target="_blank" >
                                {`(${item.url})`}
                            </a>
                            }
                        </div>
                        <div className="Story-meta">
                            <span>
                                <a href={item.url}>{`${item.points} Points,`}</a>
                            </span>
                            <span className="Story-separator">|</span>
                            <span>
                                <a href={item.url}>{item.author}</a>
                            </span>
                            <span className="Story-separator">|</span>
                            <span>
                                <a href={item.url}>
                                    {diffYears > 0 && `${diffYears} years ago`}
                                    {diffMon > 0 && `${diffMon} months ago`}
                                    {diffDays > 0 && `${diffDays} days ago`}
                                </a>
                            </span>
                            <span className="Story-separator">|</span>
                            <span>
                                <a href={item.url}>{`${item.num_comments} comments`}</a>
                            </span>
                        </div>
                    </div>
                </div> </article>
        })
        return (<>
            <section className="Search-Results">

                <InfiniteScroll
                    dataLength={itemsCount}
                    next={this.loadFunc}
                    hasMore={true}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                >
                    {items ? stories : <div className="loader" key={0}>Loading ...</div>}

                </InfiniteScroll>
            </section>
        </>)
    }
}

function mapStateToProps({ searchReducer }) {
    return {
        searchQuery: searchReducer.searchQuery,
        items: searchReducer.stories,
        pageNum: searchReducer.pageNum,
        itemsCount: searchReducer.storiesLength,
        page: searchReducer.page
    }
}


function mapDispatcherToProps(dispatch) {
    return {
        //ApiClient: bindActionCreators(ApiClient, dispatch),
        //Actions: bindActionCreators(Actions, dispatch)
    }

}

export default connect(mapStateToProps, mapDispatcherToProps)(SearchResult);
