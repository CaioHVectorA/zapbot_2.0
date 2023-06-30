import Jimp from "jimp";

export default async function changeImage(base64String: string) {
    try {
        const image = await Jimp.read(Buffer.from(base64String,'base64'))
        await image.writeAsync('../../asset/image.png')
        console.log('Sucesso!')
        return true
    } catch (error) {
        console.log(error)
        return false
    }
}