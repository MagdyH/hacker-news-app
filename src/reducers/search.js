import searchActions from '../actions/actionConstants';

export default function searchReducer(state = { stories: [], storiesLength: 0, pageNum: 0, page: 0, searchQuery: '' }, action) {
    switch (action.type) {
        case searchActions.GET_ALL_ITEMS:
            return { ...state, stories: action.stories.hits, storiesLength: action.stories.nbHits, pageNum: action.stories.nbPages }
        case searchActions.SEARCH_STORIES:
            return { ...state, searchQuery: action.query }
        case searchActions.GET_ITEMS_BY_SCROLL:
            return { ...state, stories: state.stories.concat(action.stories.hits), storiesLength: action.stories.nbHits, pageNum: action.stories.nbPages, page: action.stories.page }
        default:
            return state;
    }
}