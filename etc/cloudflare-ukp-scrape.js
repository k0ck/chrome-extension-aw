addEventListener('fetch', event => {
    event.respondWith(handleRequest(event))
  })
  
  async function handleRequest(event) {
    const request = event.request
    const url = new URL(request.url)
    let awid = url.searchParams.get('awid')
    let apiUrl = `https://www.ukpunting.com/index.php?action=adultwork;id=${awid}`
  
  
    let text = await (await fetch(apiUrl)).text()
    let positive = text.match(/positive\.gif/g)
    let negative = text.match(/negative\.gif/g)
    let neutral = text.match(/neutral\.gif/g)
  
    positive = positive ? positive.length : 0
    negative = negative ? negative.length : 0
    neutral = neutral ? neutral.length : 0
    const ret = {
      positive_count: positive,
      negative_count: negative,
      neutral_count: neutral
    }
  
    response = new Response(JSON.stringify(ret))
    response.headers.set('Content-Type', 'application/json');
    // Set CORS headers
    response.headers.set('Access-Control-Allow-Origin', '*')
    // Cache-Control: public
    // response.headers.set('Cache-Control', 'public')
    //max-age=<seconds>
    response.headers.set('Cache-Control', ['public', 'max-age=604800'])
    // Append to/Add Vary header so browser will cache response correctly
    response.headers.append('Vary', 'Origin')
  
  
    return response
  }
  