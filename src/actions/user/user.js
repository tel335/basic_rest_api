let users = []

exports.getUsers = () => {
    return users
}

exports.addUser = (userData) => {
    const user = {
        name: userData.name,
        rol: userData.rol
    }
    users.push(user)
}

exports.removeUser = (userRol) => {
    users = users.filter((user) => {  
        return user.rol !== userRol
    })
}
