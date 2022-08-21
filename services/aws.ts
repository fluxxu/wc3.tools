import AWS from "aws-sdk"

AWS.config.update({region: process.env.AWS_REGION});

export default AWS