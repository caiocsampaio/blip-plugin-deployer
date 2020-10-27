import { IframeMessageProxy } from 'iframe-message-proxy';
import { getBotFromBucket } from './applicationService';

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
    const botInfo = await getBotFromBucket(bot.shortName);
    openModal(
        'Editar', 
        `<div width="500px">
            ${JSON.stringify(botInfo)}
        </div><div width="500px">
            ${JSON.stringify(botInfo)}
        </div><div width="500px">
            ${JSON.stringify(botInfo)}
        </div><div width="500px">
            ${JSON.stringify(botInfo)}
        </div><div width="500px">
            ${JSON.stringify(botInfo)}
        </div><div width="500px">
            ${JSON.stringify(botInfo)}
        </div><div width="500px">
            ${JSON.stringify(botInfo)}
        </div><div width="500px">
            ${JSON.stringify(botInfo)}
        </div>`, 
        'Salvar', 
        'Cancelar');
}


