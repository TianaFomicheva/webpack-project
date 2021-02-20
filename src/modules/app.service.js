export default class AppService {

    constructor(text){
            this.text = text
    }

    log(){
        console.log('[App service]: ', this.text)
    }

}

const service = new AppService('Hello, world!')
service.log()