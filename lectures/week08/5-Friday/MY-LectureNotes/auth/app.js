
// before this, run npm install pbkdf2

const pbkdf2 = require('pbkdf2'); // allows us to hash a string

let rainbow = {
    "jaklsdhfkasdf": "text"
}

const crypto = require('crypto'); // salt

let password = "some user password";
let salt = crypto.randomBytes(20).toString('hex'); // scrambling 20x and converting to a hex num

// console.log(salt);

let key = pbkdf2.pbkdf2Sync(password, salt, 3600, 256, 'sha256')

let hash = key.toString('hex')

// console.log(hash);

let stored_pass = `pbkdf2_sha256*3600*${salt}*${hash}`

// console.log(stored_pass);

let newLoginPassword = "some user passwo"

// retrieve pw from database

let pass_parts= stored_pass.split('*'); //[pbkdf2_sha256, 3600, salt, hash]

// console.log(pass_parts);

let newPassword = pbkdf2.pbkdf2Sync(newLoginPassword, pass_parts[2], parseInt(pass_parts[1]), 256, 'sha256')

let hashLoginPassword = newPassword.toString('hex')

if(hashLoginPassword == pass_parts[3]){
    console.log('passwords match');
}
else{
    console.log('what are you trying to do');
}