# Addition Tester

This project is a simple web application that tests users on basic addition problems. It presents two random numbers below 100, allows users to input their answers, and tracks their performance over a series of questions.

## Project Structure

```
addition-tester
├── src
│   ├── index.html       # Main HTML document for the website
│   ├── style.css        # CSS styles for the website
│   └── app.js           # JavaScript logic for the addition tester
├── .github
│   └── workflows
│       └── deploy.yml   # GitHub Actions workflow for deployment
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/addition-tester.git
   cd addition-tester
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   Open `src/index.html` in your web browser to view the application.

## Usage Guidelines

- The application will display two random numbers for addition.
- Enter your answer in the input field and click the "Next" button to proceed to the next question.
- After 10 questions, your results will be displayed, and you will have the option to restart the test.

## Deployment

This project uses GitHub Actions for deployment. The workflow defined in `.github/workflows/deploy.yml` will automatically publish the website whenever changes are pushed to the repository. 

Make sure to configure the necessary secrets in your GitHub repository settings for deployment.