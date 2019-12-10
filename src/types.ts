export declare interface Viewer {
    viewer: {
        login?: string;
    };
}

export declare interface FileEntries {
    name: string;
    type: string;
    child: {
        entries: FileEntries[];
    };
}

export declare interface RepositoryDirectories {
    repository: {
        defaultBranchRef: {
            target: {
                files: {
                    entries: FileEntries[];
                };
            };
        };
    };
}