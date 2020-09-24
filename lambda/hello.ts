exports.handler = async function (event: AWSLambda.APIGatewayEvent) {
  console.log('event', JSON.stringify(event, null, 2))
  console.log('is prod?', process.env.isProduction)

  return {
    statusCode: 200,
    headers: {'Content-Type': 'text/plain'},
    body: `Hello World! You hit ${event.path}`,
  }
}