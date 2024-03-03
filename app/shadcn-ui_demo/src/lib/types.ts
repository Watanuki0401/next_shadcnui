export interface ContainerSummary {
    Id: string;
    Names: string[];
    Image: string;
    ImageID: string;
    Command: string;
    Created: number;
    Ports: Array<{
        IP: string;
        PrivatePort: number;
        PublicPort?: number;
        Type: string;
    }>;
    Labels: Record<string, string>;
    State: string;
    Status: string;
    HostConfig: {
        NetworkMode: string;
    };
    NetworkSettings: {
        Networks: Record<string, {
            IPAMConfig?: any;
            Links?: any;
            Aliases?: any;
            NetworkID: string;
            EndpointID: string;
            Gateway: string;
            IPAddress: string;
            IPPrefixLen: number;
            IPv6Gateway: string;
            GlobalIPv6Address: string;
            GlobalIPv6PrefixLen: number;
            DriverOpts: any;
            DNSNames: any;
        }>;
    };
    Mounts: Array<{
        Type: string;
        Source: string;
        Destination: string;
        Mode: string;
        RW: boolean;
        Propagation: string;
    }>;
}

export interface ContainerInfo {
    Command: string;
    CreatedAt: string;
    ID: string;
    Image: string;
    Labels: string;
    LocalVolumes: string;
    Mounts: string;
    Names: string;
    Networks: string;
    Ports: string;
    RunningFor: string;
    Size: string;
    State: string;
    Status: string;    
}