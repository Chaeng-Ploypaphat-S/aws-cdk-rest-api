Hands-on AWS CDK learning repository.

# AWS Cloud Development Kit (CDK): Cloud Infrastructure & Serverless Projects

- Followed the “AWS Cloud Development Kit: Define & Provision Cloud Infrastructure & Serverless Projects in Code via AWS CloudFormation” course on Udemy. [Link to the course](https://www.udemy.com/course/aws-cdk-masterclass-build-aws-cloud-infrastructures/?couponCode=KEEPLEARNING)
- Learned how to define, provision, and manage cloud infrastructure using AWS CDK and AWS CloudFormation
- Built and deployed serverless and cloud-native applications using infrastructure as code (IaC) principles
- Worked with AWS services including S3, SES, Step Functions, SNS, EventBridge, API Gateway, DynamoDB, EC2, Auto Scaling Groups (ASG), Application Load Balancer (ALB), and CloudWatch
- Developed hands-on projects focused on scalable cloud architectures, automation, and event-driven workflows
- Strengthened understanding of AWS infrastructure provisioning, monitoring, and deployment best practices

✅ Learning
- AWS CDK
- AWS Lambda
- DynamoDB
- API Gateway
- REST API

---

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18+)
- [AWS CLI](https://aws.amazon.com/cli/) configured with credentials (`aws configure`)
- [AWS CDK CLI](https://docs.aws.amazon.com/cdk/v2/guide/getting_started.html) installed globally

```bash
npm install -g aws-cdk
```

### Setup

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/Chaeng-Ploypaphat-S/aws-cdk-rest-api.git
cd aws-cdk-rest-api
npm install
```

2. Bootstrap your AWS environment (only needed once per account/region):

```bash
cdk bootstrap
```

3. Build and deploy the stack:

```bash
npm run build
cdk deploy
```

The deploy output will include the API Gateway endpoint URL.

### Tear Down

To avoid ongoing AWS charges, destroy the stack when done:

```bash
cdk destroy
```
