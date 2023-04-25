#!/usr/bin/env node
import minimist from 'minimist'
import { rps } from '../lib/rpsls.js'

const cliArgs = minimist(process.argv.slice(2))

if (!(cliArgs.h == undefined && cliArgs.help == undefined)) {
    console.log("Usage: node-rps [SHOT]\nPlay Rock Paper Scissors (RPS)\n\n\t-h, --help      display this help message and exit\n\t-r, --rules     display the rules and exit\n\nExamples:\n\tnode-rps        Return JSON with single player RPS result.\n\t\t\te.g. {\"player\":\"rock\"}\n\tnode-rps rock   Return JSON with results for RPS played against a simulated opponent.\n\t\t\te.g {\"player\":\"rock\",\"opponent\":\"scissors\",\"result\":\"win\"}")
    process.exit(0)
}

if (!(cliArgs.r == undefined && cliArgs.rules == undefined)) {
    console.log("Rules for Rock Paper Scissors:\n\n  - Scissors CUTS Paper\n  - Paper COVERS Rock\n  - Rock CRUSHES Scissors")
    process.exit(0)
}

let hand = cliArgs._[0];
try {
	result = rps(move);
	console.log(JSON.stringify(result));
} catch (e) {
	console.log('Invalid entry!\n\n');
	process.exit(0);
}