import ActionType from './actionConstants';

export const searchActions = {
    getAllItems: (stories) => {
        return { type: ActionType.GET_ALL_ITEMS, stories }
    },
    getItemsByScroll: (stories) => {
        return { type: ActionType.GET_ITEMS_BY_SCROLL, stories }
    },
    searchStories:(query) =>{
        return { type: ActionType.SEARCH_STORIES, query }
    }
}
export default searchActions;