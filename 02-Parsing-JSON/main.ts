import { JSONC } from 'https://deno.land/x/jsonc_parser@v0.0.0/mod.ts';

const text = await Deno.readTextFile("./server.json");

console.log(JSONC.parse(text));

// Launch with the command : deno run --allow-net --allow-read main.ts
// --allow-net for the import, --allow-read to read the json files