import jwt from "jsonwebtoken";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mjg0LCJuYW1lIjoibW9oYWxpIiwibG9jYXRpb24iOiJtb2hhbGkiLCJpYXQiOjE2NDY2OTMzNzR9.2qrfzGfh6sfqnu81N3XSB3mQFE_1hz1IRNf7wV3yieg";

const result = jwt.verify(token, secretKey);
console.log(result);
