var db = require('./db');

module.exports={

	getById: function(id, callback){

		var sql = "select * from employer where id=?";
		db.getResults(sql, [id], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	validate: function(employer, callback){
		var sql = "select * from employer where uname=? and pass=?";

		db.getResults(sql, [employer.username, employer.password], function(result){

			if(result.length > 0 ) {
				
				if(result.type == admin)
				{
					callback(true,true);
				}
				else
				{
					callback(true,false);
				}
				
			}else{
				callback(false);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from employer";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	insert : function(employer, callback){
		var sql = "insert into employer values('', ?, ?)";
		db.execute(sql, [employer.username, employer.password], function(status){
			callback(status);
		});
	},
	update : function(employer, callback){
		var sql = "update employer set username=?, password=? where id=?";		
			db.execute(sql, [employer.username, employer.password, employer.id], function(status){
				callback(status);
			});
		
	},
	delete : function(employer, callback){
		//var sql = "insert into employer values('','"+ employer.username+"', '"+employer.password+"')";
		db.execute(sql, [],  function(status){
			callback(status);
		});
	}
}	


