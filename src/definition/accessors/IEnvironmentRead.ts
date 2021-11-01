


export interface IEnvironmentRead {
    getSettings(): ISettingRead; 

    getServerSettings():IServerSettingRead; 

    getEnvironmentVariables(): IEnvironmentalVariableRead; 
}