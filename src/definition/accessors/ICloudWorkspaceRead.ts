
import { IWorkspaceToken } from '../../cloud/IWorkspaceToken'



export interface ICloudWorkspaceRead {
    /**
     * @param scope the scope that token should be authorized with
     * @RequiresPermission cloud.workspace-token; scopes : Array<string>
     */
    getWorkspaceToken(scope:string): Promise<IWorkspaceToken>; 
}