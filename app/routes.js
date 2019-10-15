import * as urls from 'containers/App/urls'

import HomePage from 'containers/HomePage'
import LoginPage from 'containers/LoginPage'
import RegisterPage from 'containers/RegisterPage'
import WelcomePage from 'containers/WelcomePage'
import ModulesListPage from 'containers/ModulesListPage'
import ModuleDetails from 'containers/ModuleDetails'
import SubmoduleContent from 'containers/SubmoduleContent'
import Quiz from 'containers/Quiz'
import GoalsListPage from 'containers/GoalsListPage'
import GoalDetailsPage from 'containers/GoalDetailsPage'
import NotFoundPage from 'containers/NotFoundPage'

const routes = [
  {
    exact: true,
    path: '/',
    component: HomePage,
    accessLevel: 'NOT_AUTHENTICATED',
  },
  {
    exact: true,
    path: urls.LOGIN_PATH,
    component: LoginPage,
    accessLevel: 'NOT_AUTHENTICATED',
  },
  {
    exact: true,
    path: urls.REGISTER_PATH,
    component: RegisterPage,
    accessLevel: 'NOT_AUTHENTICATED',
  },
  {
    path: urls.HOME_PATH,
    component: WelcomePage,
    exact: true,
    accessLevel: 'AUTHENTICATED',
  },
  {
    path: urls.MODULES_PATH,
    component: ModulesListPage,
    exact: true,
    accessLevel: 'AUTHENTICATED',
  },
  {
    path: urls.MODULE_DETAILS_PATH,
    component: ModuleDetails,
    exact: true,
    accessLevel: 'AUTHENTICATED',
  },
  {
    path: urls.SUBMODULE_DETAILS_PATH,
    component: SubmoduleContent,
    exact: true,
    accessLevel: 'AUTHENTICATED',
  },
  {
    path: urls.QUIZ_PATH,
    component: Quiz,
    exact: true,
    accessLevel: 'AUTHENTICATED',
  },
  {
    path: urls.GOALS_LIST_PATH,
    component: GoalsListPage,
    exact: true,
    accessLevel: 'AUTHENTICATED',
  },
  {
    path: urls.GOAL_DETAILS_PATH,
    component: GoalDetailsPage,
    exact: true,
    accessLevel: 'AUTHENTICATED',
  },
  {
    component: NotFoundPage,
    accessLevel: 'PUBLIC',
  },
]

export const accessLevels = {
  AUTHENTICATED: 'AUTHENTICATED',
  NOT_AUTHENTICATED: 'NOT_AUTHENTICATED',
  PUBLIC: 'PUBLIC',
}

export default routes
