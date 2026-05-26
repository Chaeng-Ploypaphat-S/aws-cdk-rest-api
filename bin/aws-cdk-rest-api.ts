#!/usr/bin/env node

import * as cdk from 'aws-cdk-lib/core';

import { AwsCdkRestApiStack } from '../lib/aws-cdk-rest-api-stack';

const app = new cdk.App();
new AwsCdkRestApiStack(app, 'AwsCdkRestApiStack', {

});
