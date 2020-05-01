import { IframeMessageProxy } from 'iframe-message-proxy'

export const getApplication = async () => {
    const { response: application } = await IframeMessageProxy.sendMessage({
        action: 'getApplication',
    });

    return application;
}

export const getApplicationById = async (id) => {
    console.log(`getting application by id ${id.split('@')[0]}`);
    const { response: application } = await IframeMessageProxy.sendMessage({
        action: 'sendCommand',
        content: {
            destination: 'MessagingHubService',
            command: {
                method: 'get',
                uri: '/account/keys'
            }
        }
    });
    console.log(application);
    return application;
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