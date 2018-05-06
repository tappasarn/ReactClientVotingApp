//If we had all the arguments in just one function (function(store, next, action) { }) 
//we'd also have to supply all the arguments every time the middleware is used.
export default socket => store => next => action => {
    if (action.meta && action.meta.remote) {
        socket.emit('action', action);
    }
    //The next argument is a callback that the middleware should call when it has done its work
    return next(action);
}