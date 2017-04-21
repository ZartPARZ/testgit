/**
 * Created by ZartPARZ on 2017-04-21.
 */

let express = require('express');
let router=express.Router();
let _=require('underscore');

//Data
const usersData = require('../public/data/users.json');

router.get('/',function(req,res,next)
{
	res.jsonp(usersData);
});

router.get('/:id',function (req,res,next)
{
/*	let fine = false;
	for(let user of usersData)
	{
		if(user.id === req.param.id)
		{
			res.jsonp(user);
			find = true;
			break;
		}
	}
	if(!find)
	{
		res.send("not found");
	}*/
	const specUser = _.filter(usersData,(user)=>user.id===req.params.id);
	res.jsonp(specUser);
});

router.get('/:id/:name',function (req,res,next)
{
	const specUser = _.filter(usersData,function (user)
	{
		return (user.id===req.params.id && user.name===req.params.name);
	});
	res.jsonp(specUser);
});

module.exports = router;