const dev = {
  STRIPE_KEY: "pk_test_NLfK1RGX2FVbsmhugG6nbkwW",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-1roue731z7sqf"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://n5tli2bauj.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_q2bnlbK6C",
    APP_CLIENT_ID: "2143ipdl80pa8ifg442jjujc0m",
    IDENTITY_POOL_ID: "us-east-1:e3645254-c9cf-4a37-8b52-5c451b12ef87"
  }
};

const prod = {
  STRIPE_KEY: "spk_test_NLfK1RGX2FVbsmhugG6nbkwW",
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-bukbiosl2s7u"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "notes-app-2-api-prod-attachmentsbucket-bukbiosl2s7u"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_aVP6fTuXt",
    APP_CLIENT_ID: "26lhgn16mfnhnts7sbi406301l",
    IDENTITY_POOL_ID: "us-east-1:579e96cb-f82b-47fc-9e2c-8c7f124d9b43"
  }
};

// Note that we are defaulting our environment to dev if the REACT_APP_STAGE is not set. 
// This means that our current build process (npm start and npm run build) will default to the dev environment. 
// And for config values like MAX_ATTACHMENT_SIZE that are common to both environments we moved it in a different section.
// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};