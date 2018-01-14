
module.exports = (req, res, next) => {
    console.log('Using "mock-server-middleware"...');

    if (req.method === 'POST' || req.method === 'PUT' || req.method === 'DELETE') {
        // We just want to RESPONSE TO TEST
        req.method = 'GET';
    }


    // emulate failed response 
    //      console.log('mock-server-middleware  intercepted' );
    //     res.sendStatus(400);
    //     return ;
    // } 
    next();
}