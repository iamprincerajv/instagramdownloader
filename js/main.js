// Instagram Downloader

const _ = e => document.querySelector(e);
const render = _(".result");

// create video
const createVideo = data => {
    let v = document.createElement('video')
    v.id = 'instavideo';
    v.src = data.content;
    v.controls = true;

    // create info
    let info = document.createElement('p');
    info.textContent = 'click the ridght fdemo';

    render.innerHTML = "";
    render.appendChild(v);
    render.appendChild(info);
};

// create image
const createImg = data => {
    let i = document.createElement('img')
    i.id = 'instaimg';
    i.src = data.content;

    // create info
    let info = document.createElement('p');
    info.textContent = 'click the ridght fdemo';

    render.innerHTML = "";
    render.appendChild(i);
    render.appendChild(info);
};

// extract html

const getMedia = () => {
    render.innerHTML = "<div class= 'image-placeholder'></div>";

    // get input value
    let url = _('input').value;
    if(url) {
        fetch(url)
        .then(r => r.text())
        .then(r => {
            // render html
            render.innerHTML = r;
            //wait, find meta and create video or image
            let w = setTimeout(() => {
                let v = _('meta[property="og:video"]');
                if(v) {
                    createVideo(v);
                } else {
                    let img = _('meta[property="og:video"]');
                    if(img) {
                        createImg(img);
                    } else {
                        document.innerHTML = body;
                        alert('Error in your url insta')
                    };
                }
                clearTimeout(w);
            }, 200);
        });
    } else {
        _('input').setAttribute('placeholder', 'invlid instagram link');
    }
};