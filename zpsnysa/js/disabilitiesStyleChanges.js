function changeStyle(linkPrefix, background, fontWeight, fontColor, cssName) {
    document.body.style = "font-weight: " + fontWeight;
    document.body.style = "color: " + fontColor;
    document.body.style.background = background;
    let navItems = document.getElementsByClassName('w-nav-link');
    let recruitmentDiv = document.getElementsByClassName('call-to-action');
    let paragraphLight = document.getElementsByClassName('paragraph-light');

    if (recruitmentDiv !== undefined) {
        for (let i = 0; i < recruitmentDiv.length; i++) {
            recruitmentDiv[i].style.backgroundColor = background;
        }
    }
    let introHeader = document.getElementsByClassName('intro-header');
    if (introHeader !== undefined) {
        for (let i = 0; i < introHeader.length; i++) {
            introHeader[i].style.backgroundColor = background;
        }
    }
    for (let i = 0; i < navItems.length; i++) {
        let element = navItems[i];
        background === 'black' ? element.style.setProperty('color', 'white') : element.style.setProperty('color', '#222222');
    }
    const navigations = document.getElementsByClassName('navigation-item');
    for (let i = 0; i < navigations.length; i++) {
        let element = navigations[i];
        background === 'black' ? element.style.setProperty('color', 'white') : element.style.setProperty('color', '#222222');
    }
    const allLinks = document.querySelectorAll('a');
    for (let i = 0; i < allLinks.length; i++) {
        let element = allLinks[i];
        background === 'black' ? element.style.setProperty('color', 'white') : element.style.setProperty('color', '#222222');
    }
    linkPrefix === null ? changeCSS('css/' + cssName, 0) : changeCSS(linkPrefix + 'css/' + cssName, 0);
}

function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);
    
    // let webflowcssSheet = document.createElement('link');
    // webflowcssSheet.setAttribute("rel", "stylesheet");
    // webflowcssSheet.setAttribute("rel", "stylesheet");
    

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}