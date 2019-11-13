/**
 *
 * ThanosT7
 *
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { useInjectSaga } from 'utils/injectSaga'
import { useInjectReducer } from 'utils/injectReducer'
import Button from 'components/Button'

import { selectResponse } from './selectors'
import reducer from './reducer'
import saga from './saga'
import { fetchApi } from './actions'

export function ThanosT7(props) {
  useInjectReducer({ key: 'thanosT7', reducer })
  useInjectSaga({ key: 'thanosT7', saga })

  return (
    <div>
      <h2>
        GETs
      </h2>
      <div>
        <Button id="fetchCoinsBtn" onClick={props.fetchCoins}>
          Fetch Coins
        </Button>
        <div>
          {JSON.stringify(props.coins)}
        </div>
      </div>
      <div>
        <Button id="fetchNotification" onClick={props.fetchNotification}>
          Fetch Notification
        </Button>
        <div>
          {JSON.stringify(props.notification)}
        </div>
      </div>
      <div>
        <Button id="fetchHealthCheck" onClick={props.fetchHealthCheck}>
          Fetch Health Check
        </Button>
        <div>
          {JSON.stringify(props.health)}
        </div>
      </div>
      <h2>
        POSTs
      </h2>
      <div>
        <Button id="createUserInMacedo" onClick={props.createUserMacedo}>
          POST User Macedo
        </Button>
      </div>
      <div>
        <Button id="createUserInAna" onClick={props.createUserAna}>
          POST User Ana
        </Button>
      </div>
      <div>
        <Button id="fetchAnaUsers" onClick={props.fetchAnaUsers}>
          GET Users Ana
        </Button>
        <div>
          {JSON.stringify(props.anaUsers)}
        </div>
      </div>
    </div>
  )
}

ThanosT7.propTypes = {
  fetchCoins: PropTypes.func.isRequired,
  fetchNotification: PropTypes.func.isRequired,
  fetchHealthCheck: PropTypes.func.isRequired,
  createUserMacedo: PropTypes.func.isRequired,
  createUserAna: PropTypes.func.isRequired,
  fetchAnaUsers: PropTypes.func.isRequired,
  coins: PropTypes.object,
  notification: PropTypes.object,
  health: PropTypes.object,
  anaUsers: PropTypes.object,
}

const mapStateToProps = createStructuredSelector({
  coins: selectResponse('coins'),
  notification: selectResponse('notification'),
  health: selectResponse('health'),
  anaUsers: selectResponse('anaUsers'),
})

function mapDispatchToProps(dispatch) {
  return {
    fetchCoins: () => {
      dispatch(fetchApi('https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/Moedas', 'coins'))
    },
    fetchNotification: () => {
      dispatch(fetchApi(
        'https://sospet-services.herokuapp.com/notification',
        'notification',
        {
          headers: {
            authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imxlb19nbmwyNUBob3RtYWlsLmNvbSIsImlkIjoyNCwiaWF0IjoxNTcxMTc4NTc4fQ._8bd58z9kbL01A__I1RWMfeWpdiY28DAP18Q2N-doXg',
            'Content-type': 'application/json',
          },
          params: { userId: 1 },
        },
      ))
    },
    fetchHealthCheck: () => {
      dispatch(fetchApi('http://54.207.126.218:8080/health', 'health'))
    },
    createUserMacedo: () => {
      dispatch(fetchApi(
        'https://cors-anywhere.herokuapp.com/http://3jobs-api.azurewebsites.net/users',
        'macedao',
        {
          data: {
            name: 'Zeca Pacotinho',
            email: 'zeca-pacotinho@email.com',
            password: 'Senha123!',
            roles: [0],
            profile: {
              name: 'zeca-pacotinho',
            },
          },
        },
        'POST'
      ))
    },
    createUserAna: () => {
      dispatch(fetchApi(
        'https://pagae-api.herokuapp.com/auth/signup',
        'ana',
        {
          data: {
            name: 'Zeca Pacotinho',
            cellphone: '+5518985011111',
            password: 'Senha123!',
          },
        },
        'POST',
      ))
    },
    fetchAnaUsers: () => {
      dispatch(fetchApi('https://pagae-api.herokuapp.com/users', 'anaUsers'))
    },
  }
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default compose(withConnect)(ThanosT7)
