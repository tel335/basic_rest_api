import Router from 'koa-router'
import getHealth from './health/health'
import users from './user/user'

const router = new Router()

router.get('/health', getHealth)

router.get('/api/users', users.getAllUsers)
router.put('/api/user', users.createUser)
router.delete('/api/user/:rol', users.removeUser)

export default router
