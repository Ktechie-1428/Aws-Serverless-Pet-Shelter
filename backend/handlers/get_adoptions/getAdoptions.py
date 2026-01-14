#Write a simple lambda function that returns a 200 status code and a message "Connected successfully"
#import json
import json

def lambda_handler(event, context):
    return {
        'statusCode': 200,
        'body': json.dumps('Connected successfully')
    }






