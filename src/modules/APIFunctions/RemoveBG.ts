import { Client, Message, MessageMedia } from "whatsapp-web.js";
import { Comando } from "../Data/FunctionConstructor";
import {removeBackgroundFromImageBase64,RemoveBgResult} from 'remove.bg'
import changeImage from "../Utilities/ChangeImage";

async function RemoveBGFunc(params: string[], args: {msg: Message | undefined, client: Client | undefined}) {
    if (!args.msg || !args.msg.hasMedia ) return `Imagem Não providenciada`
    let image_src = (await args.msg.downloadMedia()).data;
    console.log('começou a tirar fundo')
    return removeBackgroundFromImageBase64({
        base64img: image_src,
        apiKey: 'giWoUVuFyz4rY6ZLaZpMmAKY',
    }).then(async (result: RemoveBgResult) => {
        // return MessageMedia.fromFilePath(result.base64img).then((Response) => {
            await changeImage(result.base64img)
            const response = { media: MessageMedia.fromFilePath('../../asset/image.png'), caption: 'teste' };
            return response;
})
}

export const RemoverBg = new Comando(
    ['removerbg','bg','nobg','tirarbg','tirarfundo','removerfundo'],
    RemoveBGFunc,
    true,
    true,
    [{
        name: 'img',
        type: 'image'
    }]
)