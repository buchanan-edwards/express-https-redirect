# express-https-redirect

Express middleware that redirects non-secure access to HTTPS (optimized for Azure and AWS).

## Description

When you deploy an express-based application to a cloud service such as Azure or AWS, you are not afforded a direct connection as you would when deploying to a server you control. Azure, for example, routes requests to your application via a named pipe instead of a port number.

This makes the determination of whether or not your users are accessing your site using HTTP versus HTTPS slightly more difficult. This simple module helps with that and redirects any non-secure traffic to an HTTPS connection. 

By default, the `espress-https-redirect` module does not redirect to HTTPS when running on a localhost as that is typically not secured with an SSL certificate. You can change this by setting the `redirectLocalhost` parameter in your `app.use` call.

## Installation

```
$ npm install express-https-redirect --save
```

## Usage

```javascript
var express = require('express');
var httpsRedirect = require('express-https-redirect');
var app = express();
app.use('/', httpsRedirect());
```

If you also want localhost requests to be redirected, do the following:

```javascript
app.use('/', httpsRedirect(true));
```

## License

(The MIT License)

Copyright (c) 2015 Buchanan & Edwards

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


