import {ENGLISH} from '../constants/actionTypes'

export default function emprestimo (state = 'olá', action) {
  switch (action.type) {
    case ENGLISH: {
      return 'hello'
    }
    default:
      return state
  }
}
