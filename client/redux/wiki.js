import axios from 'axios'

const initialState = { allWikis: []}
//action types
const GET_ALL_WIKI = 'GET_ALL_WIKI';
const POST_WIKI = 'POST_WIKI';

//action creators
const getAllWiki = (wikiArray) => ({
  type: GET_ALL_WIKI,
  wikiArray
})
const postWiki = (post) => ({
  type: POST_WIKI,
  post
})

//thunk creators
export const getAllWikiThunk = () => 
 dispatch => 
  axios.get('/api/wiki')
    .then(wikis => 
      dispatch(getAllWiki(wikis.data)))
    .catch(err => console.log(err))

export const postWikiThunk = (postObj) => 
  dispatch => 
    axios.post('/api/wiki', postObj)
      .then(wikis => {
        console.log('THIS IS WIKIS IN REDUX:', wikis.data)
        dispatch(postWiki(wikis.data))})
      .catch(err => console.log(err))


export default function (state = initialState, action){
  switch (action.type) {
    case GET_ALL_WIKI:
      return { allWikis: action.wikiArray}
    case POST_WIKI:
      return { allWikis: [...state.allWikis, action.post] }
    default:
      return state
  }
} 