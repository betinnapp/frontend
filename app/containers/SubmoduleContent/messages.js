/*
 * SubmoduleContent Messages
 *
 * This contains all the text for the SubmoduleContent container.
 */

import { defineMessages } from 'react-intl'

export const scope = 'app.containers.SubmoduleContent'

export default defineMessages({
  unableToLoadContent: {
    id: `${scope}.unableToLoadContent`,
    defaultMessage: 'Desculpa, não fomos capazes de carregar este conteúdo. Tente novamente mais tarde!',
  },
  startQuiz: {
    id: `${scope}.startQuiz`,
    defaultMessage: 'Iniciar testes',
  },
})
