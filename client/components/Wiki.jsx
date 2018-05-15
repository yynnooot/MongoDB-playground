import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllWikiThunk } from '../redux/wiki';

export class Wiki extends Component{
  constructor(){
    super()
    this.state = {

    }
  }
  componentDidMount(){
    this.props.getWiki()
  }
  render(){
    return (
      <div>
        <h1>WIKI</h1>
        {this.props.wikis.length > 0 ? this.props.wikis.map((wiki, index) => <h3 key={index}>{wiki.title}</h3>)
        : null}
      </div>
    )
  }
}
const mapState = (state) => ({
  wikis: state.allWikis
})
const mapDispatch = (dispatch) => ({
  getWiki: () => dispatch(getAllWikiThunk())
})
export default connect(mapState, mapDispatch)(Wiki)