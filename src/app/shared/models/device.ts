class VulkanInfo {
    public extensions: Array<Object>;
    public features: Object;
    public memory: Object;
    public properties: any;
    public formats: Array<Array<Object>>;
    public queues: Array<Object>;
    public swapchain: Object;
}

export class Device {
    public deviceId: number;
    public driverVersion: number;
    public name: string;
    public os: string;
    public vendorId: number;
    public vulkanInfo: VulkanInfo;
}
