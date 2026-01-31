# Singlish to Sinhala Translator Test Automation

This project contains automated tests for the Singlish to Sinhala translator application at [https://www.swifttranslator.com/](https://www.swifttranslator.com/) using Playwright.

## Project Overview

This test suite validates the functionality and UI behavior of the Singlish to Sinhala translation system, including:
- 24 positive functional test cases
- 10 negative functional test cases
- 1 positive UI test case

## Prerequisites

Before running the tests, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** (comes with Node.js)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <repository-folder>
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Project Structure

```
.
├── tests/
│   ├── negative.spec.js          # negative test cases
│   ├── positive.spec.js          # Positive test cases
│   ├── UI.spec.js                # UI test cases
│      
├── playwright.config.js          # Playwright configuration
├── package.json                  # Project dependencies
└── README.md                     # This file
```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (see browser)
```bash
npx playwright test --headed
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run tests with specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test Reports

### View HTML report after test execution
```bash
npx playwright show-report
```

### Generate and view report manually
```bash
npx playwright test --reporter=html
npx playwright show-report
```

## Test Case Coverage

### Positive Functional Tests (24 cases)
- Daily language usage with various sentence structures
- Simple, compound, and complex sentences
- Interrogative (questions) and imperative (commands)
- Past, present, and future tenses
- Positive and negative sentence forms
- Greetings, requests, and responses
- Polite vs informal phrasing
- Mixed Singlish + English content
- Punctuation, numbers, currency, dates, and time formats
- Place names and English technical terms
- Pronoun variations (singular/plural)
- Short (S), medium (M), and long (L) input lengths

### Negative Functional Tests (10 cases)
- Typographical errors (misspellings, abbreviations)
- Missing spaces / joined words
- Excessive character repetition
- Line breaks in input
- Special characters
- Pure English input
- Random capitalization
- Different language input (Hindi)
- Security testing (XSS script injection)
- Underscores instead of spaces

### UI Tests (1 case)
- Clear button functionality

## Configuration

The Playwright configuration (`playwright.config.js`) includes:
- Multiple browser support (Chromium, Firefox, WebKit)
- Screenshot on failure
- Video recording on first retry
- HTML reporter for test results
- Configurable base URL

## Notes

- Tests are designed for the Singlish to Sinhala translator at swifttranslator.com
- The application provides real-time translation without requiring a convert button
- Expected outputs are based on standard Singlish-to-Sinhala transliteration rules
- Some negative test cases verify robustness and error handling capabilities

## Troubleshooting

### Tests fail to run
- Ensure all dependencies are installed: `npm install`
- Install Playwright browsers: `npx playwright install`

### Browser launch fails
- Try running with headed mode to see what's happening: `npx playwright test --headed`
- Check if Playwright browsers are properly installed

### Tests timeout
- Increase timeout in `playwright.config.js`
- Check your internet connection
- Verify the target website is accessible

## Contributing

When adding new test cases:
1. Follow the existing test case structure
2. Use appropriate test IDs (Pos_Fun, Neg_Fun, Pos_UI, Neg_UI)
3. Update the test case Excel file
4. Ensure all tests pass before committing

## License

This project is created for educational purposes as part of IT3040 - ITPM Module.

## 👤 Author
- Name: Vishwa Dissanayake
- Course: BSc (Hons) Information Technology
