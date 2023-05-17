const fetch = require('node-fetch');
const url= 'https://marcoherbst-evercam-public-cameras.p.rapidapi.com/public/cameras';
const options = {
    method: 'GET',
    params: {
        case_sensitive: 'checked',
        limit: '100',
        offset: '0'
    },
    headers: {
        'X-RapidAPI-Key': 'd46d622196msh611e99b711f9f3ap17696ajsn9bc60fbf89f0',
        'X-RapidAPI-Host': 'marcoherbst-evercam-public-cameras.p.rapidapi.com'
    }
};

async function x() {
    try {
        const response = await fetch(url, options);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}
x();