const axios = require('axios');

const downloader = async (link) => {
    const options = {
        method: 'GET',
        url: 'https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com/index',
        params: {
            url: link
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API,
            'X-RapidAPI-Host': 'instagram-downloader-download-instagram-videos-stories.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        const mediaLink = await response.data.media
        return mediaLink
    } catch (error) {
        console.error(error);
    }
}
module.exports = {
    downloader
}