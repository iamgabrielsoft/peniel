

class AppEngineServer {
    public ServerName: string; 
    public PORT: any;
    public env: string; 
    private chat_engine_name: string; 
    
    constructor(ServerName, PORT, env){
        this.ServerName = ServerName; 
        this.PORT = PORT;  
        this.env = env; 
        this.chat_engine_name = "peniel"
    }

    init(): void {
        const data = new Date();
        console.log('|--------------------------------------------');
        console.log('| Server       : ' + this.chat_engine_name);
        console.log('| Environment  : ' + this.env);
        console.log('| Port         : ' + this.PORT);
        console.log(
            '| Date         : ' +
            data 
                    .toJSON()
                    .split('T')
                    .join(' '),
        )
      
    }


}


const Engine = new AppEngineServer("Peniel", process.env.PORT || 5000, "Development")

module.exports = Engine 