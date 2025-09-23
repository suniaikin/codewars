/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...*/

const arrFriends = ["Ryan", "Kieran", "Jason", "Yous"]

function friend(friends) {
	return friends.filter(friend => friend.length === 4)
}

let out = friend(arrFriends)
console.log(out)