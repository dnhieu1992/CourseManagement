const Joi = require('joi');
const HttpStatus = require('http-status-codes');
const jwt = require('jsonwebtoken');
const BCrypt = require('bcrypt');

const User = require('../models/userModels');
const Helpers = require('../helpers/helpers');
const config = require('../config/secret');
const saltRounds = 20;

module.exports = {
    async CreateUser(req, res) {
        const schema = Joi.object().keys({
            username: Joi.string().alphanum().min(3).max(20).required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        })

        const {error, value} = Joi.validate(req.body, schema);

        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json({message: error.details});
        }


        const userEmail = await User.findOne({email: Helpers.toLowerCase(req.body.email)});
        if (userEmail) {
            return res.status(HttpStatus.CONFLICT).json({message: 'Email already exists.'});
        }

        const userName = await User.findOne({username: Helpers.firstUpperCase(req.body.username)});
        if (userName) {
            return res.status(HttpStatus.CONFLICT).json({message: 'Username already exists.'});
        }

        return BCrypt.hash(req.body.password, saltRounds, (err, hash) => {
            if (err) {
                return res.status(HttpStatus.BAD_REQUEST).json({message: 'Error hashing password.'});
            }
            const body = {
                username: Helpers.firstUpperCase(value.username),
                email: Helpers.toLowerCase(value.email),
                password: hash
            };
            User.create(body).then(user => {
                const jsonWebToken = jwt.sign({data: user}, config.secretKey, {expiresIn: '1h'});

                res.cookie('auth', jsonWebToken);

                res.status(HttpStatus.CREATED).json({message: 'User created successfully.', user, jsonWebToken});
            }).catch(err => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Error occurred.'});
            })
        });
    },
    async Login(req, res) {
        if (!req.body.username || !req.body.password) {
            return res.status(HttpStatus.BAD_REQUEST).json({message: 'Please input your username or password.'});
        }

        await User.findOne({username: Helpers.firstUpperCase(req.body.username)}).then((user) => {
                if (!user) {
                    return res.status(HttpStatus.NOT_FOUND).json({message: 'User not exists in the system.'});
                }
                if(BCrypt.compareSync(req.body.password,user.password)){
                    const token = jwt.sign({data: user}, config.secretKey, {expiresIn: '1h'});
                    res.cookie('auth', token);
                    return res.status(HttpStatus.OK).json({message: 'Login successfully', user, token})
                }
            }
        ).catch(err => {
            console.log(err);
            return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Error Occurred.'});
        })
    }
}
