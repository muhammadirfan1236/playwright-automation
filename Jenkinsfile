pipeline {
    agent any
    tools {
        nodejs '25.9.0'   // 👈 this must match the name you added
    }

    stages {
        stage('install playwright') {
            steps {
                sh '''
                  npm install
                  npx playwright install
                '''
            }
        }

     

        stage('test') {
            steps {
                sh '''
                  npx playwright test --list
                  npx playwright test --reporter=html

                '''
            }
        }

        stage('Show Report') {
          steps {
           sh 'npx playwright show-report'
        }
     }

        stage('Publish Report') {
            steps {
                archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
            }
        }

    }
}