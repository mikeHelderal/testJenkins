pipeline {
    agent any
    
    tools{
        nodejs "NodeJS"
    }

    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/mikeHelderal/testJenkins.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage("Run Tests") {
            steps {
                bat 'npm test'
            }
        }
    }
}
