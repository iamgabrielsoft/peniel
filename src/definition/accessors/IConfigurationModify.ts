


export interface IConfigurationModify {
    readonly serverSettings: IServerSettingsModify; 

    readonly slashCommands: ISlashCommandModify; 

    readonly scheduler: ISchedulerModify; 
}