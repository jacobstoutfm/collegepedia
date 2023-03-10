const {Client} = require('pg')

const client = new Client({
    host: "localhost", /** Changed to Local as AWS is not cooperating at the moment */
    user: "postgres",
    port: 5432,
    password: "seniorproject", // could be rootUser
    database: "postgres"
})
/** For now, we operating on the assumption we are also hosting a postgresql
 * instance locally. These settings are the settings of my own client,
 * and I will be updating this to use an AWS server as time goes on.
 */
client.connect();

client.query('Select * from users', (err, res)=>{
    if(!err){
        console.log(res.rows);
    }
    else {
        console.log(err.message);
    }
    client.end;
}
)