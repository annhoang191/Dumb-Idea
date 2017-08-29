const express = require('express');
const path = require('path');

const User = require('../models/User.js');
const Idea = require('../models/Idea.js');
const Comment = require('../models/Comment.js');

let api = express.Router();

//TODO: Put APIs'code here
/*Features

SignUp/LogIn/LogOut
Search based on tags
Filter based on categories
Sort by (ratings,...)
User->Post/Delete/Edit idea
User->Follow idea
User->Rate idea
User->Comment 
Chat User<>User
Ideas ranking
Users ranking
Ideas recommendation
*/

module.exports = api;