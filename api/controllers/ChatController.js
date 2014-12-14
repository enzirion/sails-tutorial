/**
 * ChatController
 *
 * @description :: Server-side logic for managing chats
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	index : function(req,res){		
		return res.view('chat',new Array);
	},

	watch : function(req,res){
		if(req.isSocket){
			Chat.watch(req.socket);
			console.log('watch Chat');
		}
	},

	create: function(req, res){
		console.log('create');
        Chat.create({text: req.param('text')}).exec(function(err, result) {
            Chat.publishCreate(result);
            return res.json(result);
        });
    }
};

