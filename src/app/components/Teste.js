import React, {Component, PropTypes} from 'react'
import styles from './Teste.scss'
class Teste extends Component {
  render () {
    return (
      <div className={styles.container}>
      {this.props.teste}
      </div>
    )
  }
}

Teste.propTypes = {
  teste: PropTypes.string
}

export default Teste
