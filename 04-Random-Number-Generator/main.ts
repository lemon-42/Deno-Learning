import { randomNumber } from "https://deno.land/x/random_number/mod.ts"

let nbr = randomNumber()

Deno.writeTextFile("./generator.txt", nbr);

// Launch with the command : deno run --allow-net --allow-write main.ts
// --allow-net for the import, --allow-write to write the .txt files