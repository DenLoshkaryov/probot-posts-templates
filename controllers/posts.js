const fs = require('fs');
const path = require('path');
const url = require('../config/url').url;

module.exports.sendPost = (req, res) => {
    switch (req.params.id) {
        case '1':
            sendPost1(req, res);
            break;
        case '2':
            sendPost2(req, res);
            break;
        case '3':
            sendPost3(req, res);
            break;
    }
};

const sendPost1 = (req, res) => {
    try {
        let result = fs.readFileSync(path.join(__dirname, '../template1/tmpl.html')).toString();
        result = result.replace('[imgSrc]', url + '/assets/Image_Post_01.jpg');
        result = result.replace('[imgAlt]', 'Image for post #1');
        result = result.replace('[postText]', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos harum quae totam? Assumenda et inventore molestias necessitatibus qui, repellat reprehenderit vel.');
        res.send(result);
    }
    catch (e) {
        console.log('err');
        console.log(e);
    }
};

const sendPost2 = (req, res) => {
    try {
        let result = fs.readFileSync(path.join(__dirname, '../template2/tmpl.html')).toString();
        result = result.replace('[imgSrc]', url + '/assets/Image_Post_02.jpg');
        result = result.replace('[imgAlt]', 'Image for post #2');
        result = result.replace('[postText]', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias aperiam architecto autem corporis cum deserunt dolores dolorum ducimus eligendi eos error eum expedita explicabo fugiat illo illum impedit, inventore iusto labore laboriosam laborum maiores molestiae molestias neque nesciunt nostrum nulla perferendis porro quasi quo rem repellendus repudiandae sapiente unde veritatis voluptatibus! Accusantium aperiam asperiores atque exercitationem facilis fugiat id ipsa labore maiores molestias nobis optio pariatur, rem tempora unde velit voluptas voluptates! Dolores labore laudantium nemo odio rem.');
        res.send(result);
    }
    catch (e) {
        console.log('err');
        console.log(e);
    }
};

const sendPost3 = (req, res) => {
    try {
        let result = fs.readFileSync(path.join(__dirname, '../template3/tmpl.html')).toString();
        result = result.replace(/\[imgSrc\]/g, url + '/assets/Image_Post_03.png');
        result = result.replace(/\[imgAlt\]/g, 'Image for post #3');
        result = result.replace('[postTitle]', 'Galaxy S9/S9+');
        result = result.replace('[postText]', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos harum quae totam? Assumenda et inventore molestias necessitatibus qui, repellat reprehenderit vel.');
        res.send(result);
    }
    catch (e) {
        console.log('err');
        console.log(e);
    }
};