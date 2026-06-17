import {corsair} from './src/server/corsair.js'

console.log(
  "GMAIL DEK:",
  await corsair.keys.gmail.get_dek()
);

console.log(
  "CLIENT ID:",
  await corsair.keys.gmail.get_client_id()
);
