import { IframeMessageProxy } from 'iframe-message-proxy';
const bucketFileName = 'plugin-deployer';

export const getApplication = async () => {
    const { response: application } = await IframeMessageProxy.sendMessage({
        action: 'getApplication',
    });

    return application;
}

export const getBotFromBucket = async (id) => {
    try {
        const { response: botsDocument } = await IframeMessageProxy.sendMessage({
            action: 'sendCommand',
            content: {
                command: {
                    method: 'get',
                    uri: `/buckets/${bucketFileName}`
                }
            }
        });
    
        return botsDocument[id];
    }
    catch (e) {
        return null
    }
}

export const getPermissionsObject = async () => {
    const {response: permissions} = await IframeMessageProxy.sendMessage({
        action: 'getPermissionsObject'
    })

    return permissions;
}

export const getServices = async () => {
    const { response: application } = await IframeMessageProxy.sendMessage({
        action: 'getApplication',
    })

    return application.applicationJson.settings.children;
}

export const getContacts = async () => {
    const { response: { items } } = await IframeMessageProxy.sendMessage({
        action: 'sendCommand',
        content: {
            destination: 'MessagingHubService',
            command: {
                method: 'get',
                uri: '/contacts'
            }
        }
    });
    
    return items;
}

export const getThreads = async () => {
    const { response: { items } } = await IframeMessageProxy.sendMessage({
        action: 'sendCommand',
        content: {
            destination: 'MessagingHubService',
            command: {
                method: 'get',
                uri: '/threads'
            }
        }
    });

    return items;
}

export const setHeight = async (height) => {
    console.log('bolo')
    await IframeMessageProxy.sendMessage({ 
        action: 'heightChange', 
        content: height 
    });
    console.log('bolo-fim')
}