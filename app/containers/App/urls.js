const BASE_API_PATH = ''
const AUTH_API_PATH = `${BASE_API_PATH}/auth`
const USER_API_PATH = `${BASE_API_PATH}/user`
const EDU_API_PATH = `${BASE_API_PATH}/module`
const SURVEY_API_PATH = `${BASE_API_PATH}/survey`
export const GOAL_API_PATH = `${BASE_API_PATH}/goal`

export const LOGIN_API_URL = `${AUTH_API_PATH}/login`

export const REGISTER_API_URL = `${USER_API_PATH}/`
export const USER_DETAILS_API_URL = `${USER_API_PATH}/me`

export const MODULES_LIST_API_URL = `${EDU_API_PATH}/list`
export const MODULE_DETAILS_API_URL = `${EDU_API_PATH}/:moduleId`
export const SUBMODULE_API_URL = `${MODULE_DETAILS_API_URL}/submodule/:submoduleId`
export const SUBMODULE_COMPLETED_API_URL = `${SUBMODULE_API_URL}/completed`
export const MODULES_LIST_QUICK_ACCESS_API_URL = `${EDU_API_PATH}/quick-access`

export const SURVEY_API_URL = `${SURVEY_API_PATH}/:surveyId`
export const SURVEY_QUESTION_ANSWER_API_URL = `${SURVEY_API_URL}/question/:questionId:answer`

export const GOALS_LIST_API_URL = `${GOAL_API_PATH}/list`
export const GOAL_INVESTMENT_TYPES_API_URL = `${GOAL_API_PATH}/types`
export const GOAL_DETAILS_API_PATH = `${GOAL_API_PATH}/:goalId`

// Routes Path
export const LOGIN_PATH = '/login'
export const REGISTER_PATH = '/register'
export const HOME_PATH = '/home'
export const MODULES_PATH = '/modules'
export const MODULE_DETAILS_PATH = `${MODULES_PATH}/:moduleId`
export const SUBMODULE_DETAILS_PATH = `${MODULE_DETAILS_PATH}/submodule/:submoduleId`
export const QUIZ_PATH = `${SUBMODULE_DETAILS_PATH}/quiz`
export const GOALS_LIST_PATH = '/goals'
export const NEW_GOAL_PATH = '/goal'
export const GOAL_DETAILS_PATH = '/goal/:goalId?'
