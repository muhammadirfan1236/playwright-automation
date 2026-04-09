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

        // stage('help') {
        //     steps {
        //         sh 'npx playwright test --help'
        //     }
        // }

       stage('Run Tests') {
    steps {
        sh 'npx playwright test'
    }
}



    }
}