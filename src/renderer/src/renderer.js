import { StreamerbotClient } from "@streamerbot/client";
const client = new StreamerbotClient();

// Subscribe to Twitch ChatMessage events
client.on('Twitch.ChatMessage', (data) => {
  console.log('New Twitch Chat Message:', data);
});
