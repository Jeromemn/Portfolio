"use server";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import getSESClient from "../lib/ses";

export const sendEmail = async (emailContent) => {
  try {
    const { contactName, email, subject, message } = emailContent;

    if (!contactName) {
      throw new Error("Name is required");
    }
    if (!email) {
      throw new Error("Email is required");
    }
    if (!subject) {
      throw new Error("Subject is required");
    }
    if (!message) {
      throw new Error("Message is required");
    }

    const ses = getSESClient();
    const post = new SendEmailCommand({
      Source: "jeromenixon95@gmail.com",
      Destination: {
        ToAddresses: [process.env.TO_EMAIL],
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: "UTF-8",
        },
        Body: {
          Text: {
            Data: `Name: ${contactName}\nEmail: ${email}\nMessage: ${message}`,
            Charset: "UTF-8",
          },
        },
      },
    });
    await ses.send(post);
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};
