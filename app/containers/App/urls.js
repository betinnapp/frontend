const BASE_API_PATH = ''

export const LOGIN_API_URL = `${BASE_API_PATH}/auth/login`
export const REGISTER_API_URL = `${BASE_API_PATH}/user/`

export const MODULES_LIST_API_URL = `${BASE_API_PATH}/module/list`
export const SUBMODULE_API_URL = `${BASE_API_PATH}/module/:moduleId/submodule/:submoduleId`

// Routes Path
export const LOGIN_PATH = '/login'
export const REGISTER_PATH = '/register'
export const HOME_PATH = '/home'
export const MODULES_PATH = '/modules'
export const SUBMODULES_PATH = `${MODULES_PATH}/:moduleId/submodules`
export const SUBMODULE_DETAILS_PATH = `${SUBMODULES_PATH}/:submoduleId`
