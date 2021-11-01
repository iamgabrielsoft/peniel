

export class AppManager {
    private readonly apps: Map<string>
    private readonly appMetadataStorage; 
    private isLoaded: boolean; 
    private readonly compiler; 
    private readonly listenerManager; 
    private readonly settingManager; 
    private readonly scheduleManager; 
    private readonly apiManager; 
    private readonly bridges; 

    constructor({ metadataStorage, logStotrage, bridgesm, sourceStorage }) {
        this.apps = new Map<string>
    }

    getStorage() {
        return this.appMetadataStorage; 
    }
}