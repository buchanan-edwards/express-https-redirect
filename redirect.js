/**
 * Redirects non-secure requests to HTTPS.
 *
 * Looks at various aspects of the request and determines if the request is
 * already secure. If it is not secure, a redirect response is returned.
 *
 * @author Frank Hellwig <frank.hellwig@buchanan-edwards.com>
 */

function middleware(redirectLocalhost) {
    return function(req, res, next) {
        if (req.hostname === 'localhost' && !redirectLocalhost) {
            return next();
        }
        if (isSecure(req)) {
            return next();
        }
        // Note that we do not keep the port as we are using req.hostname
        // and not req.headers.host. The port number does not really have
        // a meaning in most cloud deployments since they port forward.
        res.redirect('https://' + req.hostname + req.originalUrl);
    };
};

function isSecure(req) {
    // Check the trivial case first.
    if (req.secure) {
        return true;
    }
    // Check if we are behind Application Request Routing (ARR).
    // This is typical for Azure.
    if (req.headers['x-arr-log-id']) {
        return typeof req.headers['x-arr-ssl'] === 'string';
    }
    // Check for forwarded protocol header.
    // This is typical for AWS.
    return req.headers['x-forwarded-proto'] === 'https';
}

module.exports = middleware;
