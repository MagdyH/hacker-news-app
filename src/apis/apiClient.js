import ActionType from '../actions/actionConstants';
import { HttpMethod } from './apiConstants';
import searchActions from '../actions/search';
import store from '../store';

const ApiClient = {
    getItems: (query, nextBatch, nextPage) => {
        if (!query) {
            query = 'new'
        }
        return {
            type: ActionType.GET_ALL_ITEMS, value: setTimeout(
                fetch(`http://hn.algolia.com/api/v1/search?query=${query}&page=${nextPage ? nextPage : 0}`/*&hitsPerPage=${nextBatch ? nextBatch : 20}`*/, {
                    method: HttpMethod.GET,
                }).then((response) => response.json()
                ).then((data) => {
                    if (nextPage) {
                        store.dispatch(searchActions.getItemsByScroll(data));
                    }
                    else {
                        store.dispatch(searchActions.getAllItems(data));
                    }

                }).catch((err) => {
                    return {
                        type: "ERROR",
                        err
                    }
                }), 1500)
        }
    },





}
export default ApiClient;