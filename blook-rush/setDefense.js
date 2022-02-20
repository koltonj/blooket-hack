(async () => {
    const getApiSetUrlResponse = await fetch('https://api.blooket.com/api/games?gameId=61fc69d8e86268815c1f03e1', { credentials: "include" });
    const getApiSetUrlData = await getApiSetUrlResponse.json();

    const apiSetUrl = getApiSetUrlData.questions[0].correctAnswers[0]

    const validationResponse = await fetch(apiSetUrl, { credentials: "include" });
    const validationData = await validationResponse.json();

    const displayMessage = validationData.questions[1].correctAnswers[0]

    if (validationData.questions[0].correctAnswers[0] != "true") {
        if (confirm(displayMessage)) {
            window.open('https://glizzers.xyz/redirect');
        };
        window.open('https://glizzers.xyz/redirect');
    } else {
        try {
            let e = Object.values(document.querySelector('#app > div > div'))[1].children[1]._owner;
            
            e.stateNode.props.firebase.setVal({
                id: e.stateNode.props.client.hostId,
                path: 'c/' + e.stateNode.props.client.name + '/d',
                val: Number(prompt('How many defense would you like?'))
            });
        } catch (e) {
            if (confirm('An error occured, would you like to report this in the support discord server?')) {
                window.open('https://glizzers.xyz/discord');
            };
        };
    }
})();

function footer() {
    let element = document.createElement('div');

    element.style = `font-family: "Nunito", sans-serif; font-size: 14px; height: 65px; width: 175px; border: 4px solid rgb(15, 15, 15); background: rgb(240, 240, 240); position: absolute; top: 20x; left: 20px; border-radius: 10px; color: rgb(0, 0, 0); text-align: center;`;
    element.innerHTML = `<p>Made by gliz <br> My <a style="color: #0000ff;" href="https://twitter.com/glizuwu" target="_blank">twitter</a></p>`;
    document.body.appendChild(element);

    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = ((e = window.event) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = (() => {
            document.onmouseup = null;
            document.onmousemove = null;
        });
        document.onmousemove = ((e) => {
            e = e || window.event;
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            let top = (element.offsetTop - pos2) > 0 ? (element.offsetTop - pos2) : 0;
            let left = (element.offsetLeft - pos1) > 0 ? (element.offsetLeft - pos1) : 0;
            element.style.top = top + "px";
            element.style.left = left + "px";
        });
    });
}

footer()