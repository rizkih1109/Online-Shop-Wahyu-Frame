import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const saltRound = 10
const secret = "WahyuJayaFrame"

export const checkPassword = (password: string, hash: string) : boolean => bcrypt.compareSync(password, hash)

export const hashPassword = (password: string) : string  => bcrypt.hashSync(password, saltRound)

export const createAccessToken = (data: unknown) => jwt.sign({
    data
}, secret, {expiresIn: 60})

export const createRefreshToken = (data: unknown) => jwt.sign({
    data
}, secret, {expiresIn: 5 * 60})

