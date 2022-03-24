import bcrypt from "bcrypt";

const salt = bcrypt.genSaltSync(10);
// console.log("salt", salt);

const hash = bcrypt.hashSync("heeloo", salt);
// console.log("hash", hash);

const verify = bcrypt.compareSync("heeloo", hash);
console.log(verify);
