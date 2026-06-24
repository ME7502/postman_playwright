pipeline {
    agent {
        docker { 
            image 'mcr.microsoft.com/playwright:v1.61.0-noble'
            args '-u=root --entrypoint='
        } 
    }
    parameters {
        booleanParam(name: 'LaunchAllTests', defaultValue: false, description: 'Toggle this value to launch all tests')
        booleanParam(name: 'UseSpecificBrowser', defaultValue: false, description: 'Toggle this value to use a specific browser')
        booleanParam(name: 'UseSpecificTag', defaultValue: false, description: 'Toggle this value to use a specific tag')


        choice(name: 'browser', choices: ['chromium', 'firefox', 'webkit'], description: 'Pick a browser to run the test in')
        choice(name: 'tag', choices: ['@SignIn', '@Login', '@Client','@Profile','@Devis'], description: 'Pick a browser to run the test in')
    }
    stages {
        stage("Setup"){
            steps{
                sh "npm install"
                // sh "npx playwright install"
            }
        }
        stage('Example') {
            steps {
                script{
                    if(params.LaunchAllTests){
                        sh "npx playwright test --reporter=list"
                    }
                    else{
                            if(params.UseSpecificTag){
                                sh "npx playwright test --project=${params.browser} --grep '${tag}' --reporter=list"
                            }
                            else{
                                sh "npx playwright test --project=${params.browser} --reporter=list"
                            }
                        }
                }
            }
        }
    }
}