import userActions from '../../actions/user/user'

exports.getAllUsers = (ctx) => {
    ctx.body = userActions.getUsers()
    return ctx
}

exports.createUser = (ctx) => {
    userActions.addUser(ctx.request.body)
    ctx.body = { message: 'User was created' }
    return ctx
}

exports.removeUser = (ctx) => {
    userActions.removeUser(ctx.params.rol)
    ctx.body = { message: 'User was removed' }
    return ctx
}
