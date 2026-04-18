const figlet = require('figlet');
const chalk = require('chalk');

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function runChaosSequence() {
    console.log(chalk.cyan(">>> Initializing Debug Protocol 0.8.4..."));
    await wait(800);

    // 1. Countdown with "fake" system checks
    const checks = [
        "Analyzing heap integrity",
        "Checking environment variables",
        "Verifying SSL certificates",
        "Loading dependencies",
        "Establishing handshake"
    ];

    for (let i = 0; i < checks.length; i++) {
        console.log(chalk.gray(`[WAIT] ${checks[i]}...`));
        await wait(1000);
    }

    // 2. Expanded Chaos Library
    const deepErrors = [
        "FATAL: Kernel panic - not syncing: Attempted to kill init!",
        "Out of memory: Kill process 9928 (node) score 822 or sacrifice child",
        "Error: 'undefined' is not a function (evaluating 'logic.exists()')",
        "ECONNREFUSED 127.0.0.1:5432",
        "Segmentation fault: 11 (core dumped)",
        "Buffer overflow detected at offset 0xAF32",
        "Warning: 4322 leaked handles detected",
        "DATABASE DISCONNECTED: Unexpected EOF on client connection",
        "Internal Server Error: Thread 'worker-1' panicked at 'index out of bounds'",
        "SECURITY ALERT: Unauthorized access attempt at 192.168.1.1",
        "Incompatible peer dependency: expected logic@^1.0.0, found void@0.0.0",
        "Recursive tail call optimization failed",
        "Garbage collection failed: Heap is 99% full"
    ];

    // 3. The Avalanche 
    // We increase the count to 100 and make them print faster and faster
    for (let i = 0; i < 100; i++) {
        const error = deepErrors[Math.floor(Math.random() * deepErrors.length)];
        const timestamp = new Date().toISOString().split('T')[1];
        const hex = Math.random().toString(16).substring(2, 10).toUpperCase();

        // Alternate colors for more visual noise
        const color = i % 2 === 0 ? chalk.red : chalk.yellow;
        
        console.error(
            chalk.dim(`[${timestamp}] `) + 
            chalk.bgRed.white.bold(" FAIL ") + " " +
            color(`0x${hex} -- ${error}`)
        );

        // Exponentially decrease wait time to create a "speeding up" effect
        await wait(Math.max(5, 100 - i)); 
    }

    console.log("\n" + chalk.bgWhite.black.bold(" SYSTEM HALTED ") + "\n");
    await wait(800);

    // 4. Final Final reveal
    displayBigError();
}

function displayBigError() {
    figlet.text('[ AS ]', {
        font: 'ANSI Shadow',
        horizontalLayout: 'default',
        verticalLayout: 'default'
    }, (err, data) => {
        if (err) return;
        // Clear the screen for maximum impact if you want
        // console.clear(); 
        console.error(chalk.red.bold(data));
        process.exit(1); 
    });
}

runChaosSequence();