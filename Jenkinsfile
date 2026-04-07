pipeline {
    agent any

    stages {

       

        stage('Install & Run Tests in Docker') {
            agent {
                docker {
                    image 'mcr.microsoft.com/playwright:v1.44.0-jammy'
                    args '--ipc=host'
                }
            }
            steps {
                sh '''
                    echo "Installing dependencies..."
                    npm ci

                    echo "Running Playwright tests..."
                    npx playwright test
                '''
            }
        }

        stage('Publish Report') {
            steps {
                echo 'Test execution completed!'
            }
        }
    }
}