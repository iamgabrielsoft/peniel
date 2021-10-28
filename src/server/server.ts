

class AppEngineServer {
    public ServerName: string; 
    public PORT: any; 
    
    constructor(ServerName, PORT){
        this.ServerName = ServerName; 
        this.PORT = PORT; 
    }

    init(): void {
        
    }

}


module.exports = AppEngineServer; 