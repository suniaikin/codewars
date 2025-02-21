const list = [{
    username: 'David',
    status: 'online',
    lastActivity: 10
}, {
    username: 'Lucy',
    status: 'offline',
    lastActivity: 22
}, {
    username: 'Bob',
    status: 'online',
    lastActivity: 104
}]

function getStatus(users) {
    const status = {
        online: [],
        offline: [],
        away: []
    }
    for (const user of users) {
        if (user.status === 'online' && user.lastActivity <= 10) {
            status.online.push(user.username);
        } else if (user.status === 'online' && user.lastActivity > 10) {
            status.away.push(user.username);
        } else {
            status.offline.push(user.username);
        }
    }  return status;
}

console.log(getStatus(list));