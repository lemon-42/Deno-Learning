import { serve,ServerRequest } from "https://deno.land/std/http/server.ts"
import { JSONC } from 'https://deno.land/x/jsonc_parser@v0.0.0/mod.ts';


const url = "https://api.coindesk.com/v1/bpi/currentprice.json";
const res = await fetch(url);

const data = await res.text();
const jsonData = JSONC.parse(data);

console.log(jsonData);