import { takeLatest } from 'redux-saga/effects'

function* bla() {
  console.log('aaaa')
}

// Individual exports for testing
export default function* loginPageSaga() {
  yield takeLatest('RNS_SHOW_NOTIFICATION', bla)
}
