var mongoose = require('mongoose');

module.exports = function (data) {
    var schema = new mongoose.Schema({
        "properties": {
            "apiVersion": Number,
            "driverVersion": Number,
            "vendorID": Number,
            "deviceID": Number,
            "deviceName": String,
            "deviceType": Number,
            "pipelineCacheUUID": [Number],
            "limits": {
                "maxImageDimension1D": Number,
                "maxImageDimension2D": Number,
                "maxImageDimension3D": Number,
                "maxImageDimensionCube": Number,
                "maxImageArrayLayers": Number,
                "maxTexelBufferElements": Number,
                "maxUniformBufferRange": Number,
                "maxStorageBufferRange": Number,
                "maxPushConstantsSize": Number,
                "maxMemoryAllocationCount": Number,
                "maxSamplerAllocationCount": Number,
                "bufferImageGranularity": String,
                "sparseAddressSpaceSize": String,
                "maxBoundDescriptorSets": Number,
                "maxPerStageDescriptorSamplers": Number,
                "maxPerStageDescriptorUniformBuffers": Number,
                "maxPerStageDescriptorStorageBuffers": Number,
                "maxPerStageDescriptorSampledImages": Number,
                "maxPerStageDescriptorStorageImages": Number,
                "maxPerStageDescriptorInputAttachments": Number,
                "maxPerStageResources": Number,
                "maxDescriptorSetSamplers": Number,
                "maxDescriptorSetUniformBuffers": Number,
                "maxDescriptorSetUniformBuffersDynamic": Number,
                "maxDescriptorSetStorageBuffers": Number,
                "maxDescriptorSetStorageBuffersDynamic": Number,
                "maxDescriptorSetSampledImages": Number,
                "maxDescriptorSetStorageImages": Number,
                "maxDescriptorSetInputAttachments": Number,
                "maxVertexInputAttributes": Number,
                "maxVertexInputBindings": Number,
                "maxVertexInputAttributeOffset": Number,
                "maxVertexInputBindingStride": Number,
                "maxVertexOutputComponents": Number,
                "maxTessellationGenerationLevel": Number,
                "maxTessellationPatchSize": Number,
                "maxTessellationControlPerVertexInputComponents": Number,
                "maxTessellationControlPerVertexOutputComponents": Number,
                "maxTessellationControlPerPatchOutputComponents": Number,
                "maxTessellationControlTotalOutputComponents": Number,
                "maxTessellationEvaluationInputComponents": Number,
                "maxTessellationEvaluationOutputComponents": Number,
                "maxGeometryShaderInvocations": Number,
                "maxGeometryInputComponents": Number,
                "maxGeometryOutputComponents": Number,
                "maxGeometryOutputVertices": Number,
                "maxGeometryTotalOutputComponents": Number,
                "maxFragmentInputComponents": Number,
                "maxFragmentOutputAttachments": Number,
                "maxFragmentDualSrcAttachments": Number,
                "maxFragmentCombinedOutputResources": Number,
                "maxComputeSharedMemorySize": Number,
                "maxComputeWorkGroupCount": [Number],
                "maxComputeWorkGroupInvocations": Number,
                "maxComputeWorkGroupSize": [Number],
                "subPixelPrecisionBits": Number,
                "subTexelPrecisionBits": Number,
                "mipmapPrecisionBits": Number,
                "maxDrawIndexedIndexValue": Number,
                "maxDrawIndirectCount": Number,
                "maxSamplerLodBias": Number,
                "maxSamplerAnisotropy": Number,
                "maxViewports": Number,
                "maxViewportDimensions": [Number],
                "viewportBoundsRange": [Number],
                "viewportSubPixelBits": Number,
                "minMemoryMapAlignment": Number,
                "minTexelBufferOffsetAlignment": String,
                "minUniformBufferOffsetAlignment": String,
                "minStorageBufferOffsetAlignment": String,
                "minTexelOffset": Number,
                "maxTexelOffset": Number,
                "minTexelGatherOffset": Number,
                "maxTexelGatherOffset": Number,
                "minInterpolationOffset": Number,
                "maxInterpolationOffset": Number,
                "subPixelInterpolationOffsetBits": Number,
                "maxFramebufferWidth": Number,
                "maxFramebufferHeight": Number,
                "maxFramebufferLayers": Number,
                "framebufferColorSampleCounts": Number,
                "framebufferDepthSampleCounts": Number,
                "framebufferStencilSampleCounts": Number,
                "framebufferNoAttachmentsSampleCounts": Number,
                "maxColorAttachments": Number,
                "sampledImageColorSampleCounts": Number,
                "sampledImageIntegerSampleCounts": Number,
                "sampledImageDepthSampleCounts": Number,
                "sampledImageStencilSampleCounts": Number,
                "storageImageSampleCounts": Number,
                "maxSampleMaskWords": Number,
                "timestampComputeAndGraphics": Number,
                "timestampPeriod": Number,
                "maxClipDistances": Number,
                "maxCullDistances": Number,
                "maxCombinedClipAndCullDistances": Number,
                "discreteQueuePriorities": Number,
                "pointSizeRange": [Number],
                "lineWidthRange": [Number],
                "pointSizeGranularity": Number,
                "lineWidthGranularity": Number,
                "strictLines": Number,
                "standardSampleLocations": Number,
                "optimalBufferCopyOffsetAlignment": String,
                "optimalBufferCopyRowPitchAlignment": String,
                "nonCoherentAtomSize": String
            },
            "sparseProperties": {
                "residencyStandard2DBlockShape": Number,
                "residencyStandard2DMultisampleBlockShape": Number,
                "residencyStandard3DBlockShape": Number,
                "residencyAlignedMipSize": Number,
                "residencyNonResidentStrict": Number
            }
        },
        "features": {
            "robustBufferAccess": Number,
            "fullDrawIndexUint32": Number,
            "imageCubeArray": Number,
            "independentBlend": Number,
            "geometryShader": Number,
            "tessellationShader": Number,
            "sampleRateShading": Number,
            "dualSrcBlend": Number,
            "logicOp": Number,
            "multiDrawIndirect": Number,
            "drawIndirectFirstInstance": Number,
            "depthClamp": Number,
            "depthBiasClamp": Number,
            "fillModeNonSolid": Number,
            "depthBounds": Number,
            "wideLines": Number,
            "largePoints": Number,
            "alphaToOne": Number,
            "multiViewport": Number,
            "samplerAnisotropy": Number,
            "textureCompressionETC2": Number,
            "textureCompressionASTC_LDR": Number,
            "textureCompressionBC": Number,
            "occlusionQueryPrecise": Number,
            "pipelineStatisticsQuery": Number,
            "vertexPipelineStoresAndAtomics": Number,
            "fragmentStoresAndAtomics": Number,
            "shaderTessellationAndGeometryPointSize": Number,
            "shaderImageGatherExtended": Number,
            "shaderStorageImageExtendedFormats": Number,
            "shaderStorageImageMultisample": Number,
            "shaderStorageImageReadWithoutFormat": Number,
            "shaderStorageImageWriteWithoutFormat": Number,
            "shaderUniformBufferArrayDynamicIndexing": Number,
            "shaderSampledImageArrayDynamicIndexing": Number,
            "shaderStorageBufferArrayDynamicIndexing": Number,
            "shaderStorageImageArrayDynamicIndexing": Number,
            "shaderClipDistance": Number,
            "shaderCullDistance": Number,
            "shaderFloat64": Number,
            "shaderInt64": Number,
            "shaderInt16": Number,
            "shaderResourceResidency": Number,
            "shaderResourceMinLod": Number,
            "sparseBinding": Number,
            "sparseResidencyBuffer": Number,
            "sparseResidencyImage2D": Number,
            "sparseResidencyImage3D": Number,
            "sparseResidency2Samples": Number,
            "sparseResidency4Samples": Number,
            "sparseResidency8Samples": Number,
            "sparseResidency16Samples": Number,
            "sparseResidencyAliased": Number,
            "variableMultisampleRate": Number,
            "inheritedQueries": Number
        },
        "memory": {
            "memoryTypeCount": Number,
            "memoryTypes": [{
                "propertyFlags": Number,
                "heapIndex": Number
            }],
            "memoryHeapCount": Number,
            "memoryHeaps": [{
                "size": String,
                "flags": Number
            }]
        },
        "queues": [{
            "queueFlags": Number,
            "queueCount": Number,
            "timestampValidBits": Number,
            "minImageTransferGranularity": {
                "width": Number,
                "height": Number,
                "depth": Number
            }
        }],
        "extensions": [{
            "extensionName": String,
            "specVersion": Number
        }],
        "layers": [{
            "layerName": String,
            "specVersion": Number,
            "implementationVersion": Number,
            "description": String
        }],
        "formats": [
            []
        ]
    });
    return mongoose.model('Vulkaninfos', schema);
};
