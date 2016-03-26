/**
 * Obtain an imageId for Cornerstone from an image instance
 *
 * @param instance
 * @returns {string} The imageId to be used by Cornerstone
 */
import getWADORSImageId from './getWADORSImageId';

export default function getImageId(instance, frame) {
    if (!instance) {
        return;
    }

    // Handle non-DICOMWeb cases and allow developers to set imageIds
    // directly
    if (instance.imageId) {
        return instance.imageId;        
    }

    if (instance.wadouri) {
        var imageId = 'dicomweb:' + instance.wadouri; // WADO-URI;
        if (frame !== undefined) {
            imageId += '&frame=' + frame;
        }

        return imageId;
    } else {
        // TODO= Check multiframe image support with WADO-RS
        return getWADORSImageId(instance); // WADO-RS Retrieve Frame
    }
}