import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {english} from '../actions'
import Teste from '../components/Teste'
import styles from './Main.scss'

class Main extends Component {
  static propTypes = {
    hello: PropTypes.string.isRequired,
    english: PropTypes.func.isRequired,
    params: PropTypes.object.isRequired
  }
  componentDidMount () {
    setTimeout(() => {
      this.props.english()
    }, 2000)
  }
  render () {
    const text = this.props.params.text || 'write a txt in the url e.g: http://localhost:3000/hello'
    return (
      <div className={styles.container}>
        <p>{this.props.hello} World</p>
        <Teste teste={text}/>
      </div>
    )
  }
}

export default connect(
  state => ({
    hello: state.hello
  }),
  dispatch => ({
    english: bindActionCreators(english, dispatch)
  })
)(Main)
