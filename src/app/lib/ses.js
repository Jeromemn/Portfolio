import { SESClient } from "@aws-sdk/client-ses";

let sesClient;

export default function getSESClient() {
  try {
    if (!sesClient) {
      sesClient = new SESClient({
         region: process.env.AWS_REGION,
          credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
          }
         });
         
    }
  } catch (error) {
    throw new Error(' SES client did error');
  }
  return sesClient;
};

