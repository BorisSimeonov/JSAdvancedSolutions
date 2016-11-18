function validateRequest(request) {
    let validRequestMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validRequestVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

    if (validRequestMethods.indexOf(request.method) < 0)
        throw new Error('Invalid request header: Invalid Method');
    if (request.uri == undefined ||
        request.uri.match(/^\*$|^[0-9a-zA-Z.]+$/) == undefined)
        throw new Error('Invalid request header: Invalid URI');
    if (validRequestVersions.indexOf(request.version) < 0)
        throw new Error('Invalid request header: Invalid Version');
    if (request.message == undefined ||
        (request.message !== '' && request.message.match(/^[^><\\&'"]+$/) == undefined)
    )
        throw new Error('Invalid request header: Invalid Message');

    return request;
}


let obj = {
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
};

let objTwo = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: 'Valid message'
};

validateRequest(objTwo);

