var config = {};

config.env = "dev"; //dev,prod

config.baseURL = "";
//config.listusers="";
config.dbName = "ONECLICK";
config.database = "";
config.db1 = "";
config.transporter = "";
config.fromMail = "erad.hr360@gmail.com";
if (config.env == "dev") {
	config.databaseURL = "mongodb+srv://kiran1026:kiran1026@kirancluster.vdx91.mongodb.net/ONECLICK?authSource=admin&replicaSet=atlas-c7t3wf-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
	config.baseURL = "http://localhost:5000/";
} else if (config.env == "prod") {
	config.databaseURL = "mongodb+srv://kiran1026:kiran1026@kirancluster.vdx91.mongodb.net/ONECLICK?authSource=admin&replicaSet=atlas-c7t3wf-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
	config.baseURL = "";
}
