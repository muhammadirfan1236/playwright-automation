pipeline {
    agent any

    tools {
        nodejs '25.9.0'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                  npm install
                  npx playwright install
                '''
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test'
            }
        }

        stage('Allure Report') {
            steps {
                allure includeProperties: false, results: [[path: 'allure-results']]
            }
        }
    }
}