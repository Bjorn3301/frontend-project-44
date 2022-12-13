#!/usr/bin/env node
import name from "../src/cli.js";
import {question} from "../src/even.js";
console.log("Welcome to the Brain Games!");
console.log("Hi " + `${name}` + " !");
console.log("Answer 'yes' if number even otherwise answer 'no'");
console.log(question);
