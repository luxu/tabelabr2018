import { routes as dashboard } from './dashboard'
import { routes as auth } from './auth'
import { routes as jogo } from './jogo'
import { routes as zona } from './zona'

export default [...auth, ...dashboard, ...jogo, ...zona]
