

export interface  IConfigurationExtend {
    readonly http: IHttpExtend; 

    readonly settings: ISettingsExtend; 

    readonly slashCommands: ISlashCommandExtend; 

    readonly api: IApiExtend; 

    readonly extenalComponents: IExternalComponentsExtends; 

    readonly scheduler: ISchedulerExtend
}
