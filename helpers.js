function parseBody(req, cb) {
  const body = [];
  req.on('data', (chunk) => {
    body.push(chunk)
  }).on('end', () => {
    const data = Buffer.concat(body).toString();
    if (data) {
      const params = JSON.parse(data)
      cb(null, params)
    } else {
      cb(null, null)
    }

  })
}

function parseURL(url) {
  const [parsedUrl, paramsString] = url.split('?');
  let parsedParams = null;

  if (paramsString) {
    const splittedArr = paramsString.split('&')
    parsedParams = splittedArr.reduce((acc, el) => {
      const [key, value] = el.split('=')
      acc[key] = value
      return acc
    }, {})
  }

  return {
    url: parsedUrl,
    params: parsedParams
  }
}


module.exports = {
  parseBody,
  parseURL
}