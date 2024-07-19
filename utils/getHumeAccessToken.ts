// import 'server-only';
// import { fetchAccessToken } from "@humeai/voice";

// export const getHumeAccessToken = async () => {
//     const accessToken = await fetchAccessToken({
//     apiKey: String(process.env.HUME_API_KEY),
//     clientSecret: String(process.env.HUME_CLIENT_SECRET),
//   });

//   if (accessToken === 'undefined') {
//     return null;
//   }

//   return accessToken ?? null;
// }
import 'server-only';
import { fetchAccessToken } from "@humeai/voice";
import { HumeClient } from 'hume';

export const getHumeAccessToken = async () => {
  const accessToken = await fetchAccessToken({
    apiKey: String(process.env.HUME_API_KEY),
    clientSecret: String(process.env.HUME_CLIENT_SECRET),
  });

  if (accessToken === 'undefined') {
    return null;
  }

  return accessToken ?? null;
}

const client = new HumeClient({
  apiKey: String(process.env.HUME_API_KEY),
  secretKey: String(process.env.HUME_CLIENT_SECRET),
});

const connectToWebSocket = async () => {
  const socket = await client.empathicVoice.chat.connect({
    configId: '7b96e86e-d602-420a-8e13-60f1cf11b6d1' // specify config ID here
  });

  // You can add any additional logic here to handle the WebSocket connection
};

connectToWebSocket();