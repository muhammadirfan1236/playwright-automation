pipeline {
    agent any

    stages {

        stage('Checkout Code') {
            steps {
                git 'https://github.com/muhammadirfan1236/playwright-automation.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                    echo "Installing dependencies..."
                    npm install
                    npx playwright install
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh '''
                    echo "Running Playwright tests..."
                    npx playwright test
                '''
            }
        }

        stage('Done') {
            steps {
                echo 'Pipeline completed successfully!'
            }
        }
    }
}