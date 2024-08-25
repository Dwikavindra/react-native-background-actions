export default backgroundServer;
export type BackgroundTaskOptions = {
    taskName: string;
    taskTitle: string;
    taskDesc: string;
    taskIcon: {
        name: string;
        type: string;
        package?: string;
    };
    color?: string;
    linkingURI?: string;
    progressBar?: {
        max: number;
        value: number;
        indeterminate?: boolean;
    };
};
declare const backgroundServer: BackgroundServer;
/**
 * @typedef {{taskName: string,
 *            taskTitle: string,
 *            taskDesc: string,
 *            taskIcon: {name: string, type: string, package?: string},
 *            color?: string
 *            linkingURI?: string,
 *            progressBar?: {max: number, value: number, indeterminate?: boolean}
 *            }} BackgroundTaskOptions
 * @extends EventEmitter<'expiration',any>
 */
declare class BackgroundServer {
    /** @private */
    private _runnedTasks;
    /** @private @type {(arg0?: any) => void} */
    private _stopTask;
    /** @private */
    private _isRunning;
    /** @private @type {BackgroundTaskOptions} */
    private _currentOptions;
    /**
     * @private
     */
    private _addListeners;
    /**
     * **ANDROID ONLY**
     *
     * Updates the task notification.
     *
     * *On iOS this method will return immediately*
     *
     * @param {{taskTitle?: string,
     *          taskDesc?: string,
     *          taskIcon?: {name: string, type: string, package?: string},
     *          color?: string,
     *          linkingURI?: string,
     *          progressBar?: {max: number, value: number, indeterminate?: boolean}}} taskData
     */
    updateNotification(taskData: {
        taskTitle?: string;
        taskDesc?: string;
        taskIcon?: {
            name: string;
            type: string;
            package?: string;
        };
        color?: string;
        linkingURI?: string;
        progressBar?: {
            max: number;
            value: number;
            indeterminate?: boolean;
        };
    }): Promise<void>;
    /**
     * Returns if the current background task is running.
     *
     * It returns `true` if `start()` has been called and the task has not finished.
     *
     * It returns `false` if `stop()` has been called, **even if the task has not finished**.
     */
    isRunning(): boolean;
    /**
     * @template T
     *
     * @param {(taskData?: T) => Promise<void>} task
     * @param {BackgroundTaskOptions & {parameters?: T}} options
     * @returns {Promise<void>}
     */
    start<T>(
        task: (taskData?: T) => Promise<void>,
        options: BackgroundTaskOptions & {
            parameters?: T;
        }
    ): Promise<void>;
    /**
     * @private
     * @template T
     * @param {(taskData?: T) => Promise<void>} task
     * @param {T} [parameters]
     */
    private _generateTask;
    /**
     * @private
     * @param {BackgroundTaskOptions} options
     */
    private _normalizeOptions;
    /**
     * Stops the background task.
     *
     * @returns {Promise<void>}
     */
    stop(): Promise<void>;
    sendStopBroadcast(): Promise<void>;
}
