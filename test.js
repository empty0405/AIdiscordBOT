const fs = require('fs');
const path = require('path');

console.log('Running basic structure tests...\n');

let passed = 0;
let failed = 0;

function test(name, condition) {
  if (condition) {
    console.log(`✓ ${name}`);
    passed++;
  } else {
    console.log(`✗ ${name}`);
    failed++;
  }
}

// Test 1: Check if required files exist
test('bot.js exists', fs.existsSync(path.join(__dirname, 'bot.js')));
test('package.json exists', fs.existsSync(path.join(__dirname, 'package.json')));
test('.env.example exists', fs.existsSync(path.join(__dirname, '.env.example')));
test('.gitignore exists', fs.existsSync(path.join(__dirname, '.gitignore')));
test('README.md exists', fs.existsSync(path.join(__dirname, 'README.md')));

// Test 2: Check if package.json is valid
try {
  const pkg = require('./package.json');
  test('package.json is valid JSON', true);
  test('package.json has name', !!pkg.name);
  test('package.json has version', !!pkg.version);
  test('package.json has main entry point', !!pkg.main);
  test('package.json has discord.js dependency', !!pkg.dependencies['discord.js']);
  test('package.json has dotenv dependency', !!pkg.dependencies['dotenv']);
  test('package.json has start script', !!pkg.scripts.start);
} catch (e) {
  test('package.json is valid JSON', false);
}

// Test 3: Check if bot.js has valid syntax
try {
  require('./bot.js');
  test('bot.js has valid syntax', false); // Will fail because DISCORD_TOKEN is not set
} catch (e) {
  // Expected to fail due to missing token, but syntax should be valid
  test('bot.js has valid syntax', !e.message.includes('SyntaxError'));
}

// Test 4: Check .env.example content
try {
  const envExample = fs.readFileSync('.env.example', 'utf8');
  test('.env.example contains DISCORD_TOKEN', envExample.includes('DISCORD_TOKEN'));
  test('.env.example contains CLIENT_ID', envExample.includes('CLIENT_ID'));
} catch (e) {
  test('.env.example is readable', false);
}

// Test 5: Check .gitignore content
try {
  const gitignore = fs.readFileSync('.gitignore', 'utf8');
  test('.gitignore excludes node_modules', gitignore.includes('node_modules'));
  test('.gitignore excludes .env', gitignore.includes('.env'));
} catch (e) {
  test('.gitignore is readable', false);
}

// Summary
console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed > 0 ? 1 : 0);
