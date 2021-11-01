

export enum AppStatus {
    UNKNOWN = 'unknown', 
    CONSTRUCTED = 'constructed', 
    INITIALIZED = 'initialized', 
    AUTO_ENABLED = 'auto_enabled', 
    MANUALLY_ENABLED = 'manually_enabled', 
    COMPILER_ERROR_DISABLED = 'compiler_error_disabled', 
    ERROR_DISABLED = 'error_disabled', 


}


export class AppStatusUtilDiff {
    public isError(status: AppStatus) {
        return [
            AppStatus.ERROR_DISABLED, 
            AppStatus.COMPILER_ERROR_DISABLED
        ].includes(status)
    }

    public isEnanbled(status: AppStatus){
        switch(status){
            case AppStatus.AUTO_ENABLED: 
            case AppStatus.MANUALLY_ENABLED:
                return true; 
            default: 
                return false; 
        }
    }



    public isDisabled(status: AppStatus){
        switch(status){

        }
    }
}