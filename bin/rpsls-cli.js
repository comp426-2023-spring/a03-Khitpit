#!/usr/bin/env node
import minimist from 'minimist'
import { rps } from '../lib/rpsls.js'

const cliArgs = minimist(process.argv.slice(2))

if (!(cliArgs.h == undefined && cliArgs.help == undefined)) {
    console.log("Usage: node-rpsls [SHOT]\nPlay the Lizard-Spock Expansion of Rock Paper Scissors (RPSLS)!\n\n-h, --help        display this help message and exit\n-r, --rules       display the rules and exit\n\nExamples:\nnode-rpsls        Return JSON with single player RPSLS result.\n\t\te.g. {\"player\":\"rock\"}\nnode-rpsls rock   Return JSON with results for RPSLS played against a simulated opponent.\n\t\te.g {\"player\":\"rock\",\"opponent\":\"Spock\",\"result\":\"lose\"}\n")
    process.exit(0)
}

if (!(cliArgs.r == undefined && cliArgs.rules == undefined)) {
    console.log("Rules for the Lizard-Spock Expansion of Rock Paper Scissors:\n\n  - Scissors CUTS Paper\n- Paper COVERS Rock\n- Rock SMOOSHES Lizard\n- Lizard POISONS Spock\n- Spock SMASHES Scissors\n- Scissors DECAPITATES Lizard\n- Lizard EATS Paper\n- Paper DISPROVES Spock\n- Spock VAPORIZES Rock\n- Rock CRUSHES Scissors\n")
    process.exit(0)
}

let hand = cliArgs._[0];
try {
	result = rps(hand);
	console.log(JSON.stringify(result));
} catch (e) {
	console.log('Invalid entry!\n\n');
	process.exit(0);
}