var CASAuthentication = require('cas-authentication');

var cas = new CASAuthentication({
    cas_url         : 'https://websso.wwu.edu/cas',
    service_url     : 'https://gpm.cs.wwu.edu',
    cas_version     : '4.3.0',
    renew           : false,
    is_dev_mode     : true,
    dev_mode_user   : 'testperson',
    dev_mode_info   : {},
    session_name    : 'cas_user',
    session_info    : 'cas_userinfo',
    destroy_session : true
});

var app = require('express')();
var session = require('express-session');
//var CASAuthentication = require('cas-authentication');

// Set up an Express session, which is required for CASAuthentication.
app.use( session({
    secret            : 'L>fP@8G52tFYt?gx',
    resave            : false,
    saveUninitialized : true
}));

// Create a new instance of CASAuthentication.
var cas = new CASAuthentication({
    cas_url     : 'https://websso.wwu.edu/cas',
    service_url : 'https://gpm.cs.wwu.edu'
});

// Unauthenticated clients will be redirected to the CAS login and then back to
// this route once authenticated.
app.get( '/app', cas.bounce, function ( req, res ) {
    res.send( '<html><body>Hello!</body></html>' );
});

// Unauthenticated clients will receive a 401 Unauthorized response instead of
// the JSON data.
app.get( '/api', cas.block, function ( req, res ) {
    res.json( { success: true } );
});

// An example of accessing the CAS user session variable. This could be used to
// retrieve your own local user records based on authenticated CAS username.
app.get( '/api/user', cas.block, function ( req, res ) {
    res.json( { cas_user: req.session[ cas.session_name ] } );
});

// Unauthenticated clients will be redirected to the CAS login and then to the
// provided "redirectTo" query parameter once authenticated.
app.get( '/authenticate', cas.bounce_redirect );

// This route will de-authenticate the client with the Express server and then
// redirect the client to the CAS logout page.
app.get( '/logout', cas.logout );
