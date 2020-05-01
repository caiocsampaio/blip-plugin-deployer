import { IframeMessageProxy } from 'iframe-message-proxy';
import { getApplicationById, getApplication } from './applicationService';

const openModal = async (title, html, confirm, cancel) => {
    await IframeMessageProxy.sendMessage({
        action: 'showModal',
        content: {
            title: title,
            body: html,
            confirm: confirm,
            cancel: cancel
        }
    })
}

export const newBotModal = async () => {
    await openModal('Adicionar novo sub-bot', '<div>body html</div>', 'Salvar', 'Cancelar')
}

export const editBot = async (bot) => {
    console.log(bot);
    const botApplication = await getApplication();
    console.log(botApplication);
    openModal('Editar', '<div>body html</div>', 'Salvar', 'Cancelar');
}