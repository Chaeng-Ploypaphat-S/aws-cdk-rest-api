import * as cdk from 'aws-cdk-lib/core';

import { AttributeType, BillingMode, Table } from 'aws-cdk-lib/aws-dynamodb';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { LambdaIntegration, RestApi } from 'aws-cdk-lib/aws-apigateway';
import { Stack, StackProps } from 'aws-cdk-lib/core';

import { Construct } from 'constructs';
import { join } from 'path';

export class AwsCdkRestApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const table = new Table(this, 'quotes-table', {
      partitionKey: { name: 'id', type: AttributeType.STRING },
      billingMode: BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.DESTROY, // NOT recommended for production code
    });

    const handlerFunction = new Function(this, 'quotesHandler', {
      runtime: Runtime.NODEJS_20_X,
      handler: 'app.handler',
      code: Code.fromAsset(join(__dirname, '../lambdas/')),
      environment: {
        TABLE_NAME: table.tableName,
      },
    });
    // Grant the Lambda function read/write permissions to the DynamoDB table
    table.grantReadWriteData(handlerFunction);

    // setup API Gateway and integrate with the Lambda function here
    const api = new RestApi(this, 'quotes-api', {
      description: 'API for fetching quotes',
      restApiName: 'Quotes Service',
    });

    const handlerIntegration = new LambdaIntegration(handlerFunction);

    const mainPath = api.root.addResource('quotes');
    mainPath.addMethod('GET', handlerIntegration);
    mainPath.addMethod('POST', handlerIntegration);

    const idPath = mainPath.addResource('{id}');
    idPath.addMethod('DELETE', handlerIntegration);
    idPath.addMethod('GET', handlerIntegration);
    idPath.addMethod('PUT', handlerIntegration);
  }
}
