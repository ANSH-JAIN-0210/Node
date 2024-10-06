const {dbConnection} = require('./database');
async function main(){
    try{
        const db = await dbConnection();
        const collection = db.collection('student');
        const data = [
            {id: '5',name:'rajat dalal',course:'badmashi'},
            {id: '6',name:'elvish',course:'rave party'},
            {id: '7',name:'fukra',course:'deserving'},
            {id: '8',name:'ajaz',course:'oonchi'},
            {id: '9',name:'purav',course:'AI'}
        ]
        const insert = await collection.insertMany(data);
        console.log(insert);
    }catch(err){
        console.error(err);
    }
}
main();
