const express =require('express');
const {login,register,getUsers,getAllUser,test} =require('../user-controller/user-control')
const {newConversation,getConversation}=require('../user-controller/conversation-controller')
const { newMessage,getMessages,getLastMsg}=require('../user-controller/message-controller');
const { signup, signin, gf, all } = require('../user-controller/whats-controller');
const router=express.Router()
router.get('/',test)
router.post('/register',register);
router.post('/login',login);
router.post('/signup',signup);
router.post('/signin',signin);
router.get('/getAllUser',getAllUser);
router.get('/getuser/:userId',getUsers);
router.get('/user/:userId',gf);
router.get('/list/:userId',all);
router.post('/conversation/newConversation',newConversation);
router.get('/conversation/:userId',getConversation);
router.post('/message/newMessages',newMessage);
router.get('/message/:conversationId',getMessages)
router.get('/message/getLastMsg/:conversationId',getLastMsg)
module.exports=router;