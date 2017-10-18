var targetElement = document.getElementById('taboola-below-article-thumbnails-pl3'),
    footerOverlayDiv = document.createElement('div'),
    closeButton = document.createElement('div'),
    centerLine = document.createElement('div'),
    body = document.getElementsByTagName('body')[0],
    hideFooter = document.createElement('div'),
    linkTitles = {
        'Join': '#',
        'Help & Feedback': '#',
        'Advertising': '#',
        'Privacy': '#',
        'Terms': '#',
        'Sitemap': '#'
    }, 
    // Number of items to render (Max 6)
    LINK_COUNT = 6;

// Assigning attributes to the parent div
footerOverlayDiv.id = 'footerOverlayDiv';
footerOverlayDiv.className = ('footerOverlayDiv');
footerOverlayDiv.style.height = '65px';
footerOverlayDiv.style.width = '100%';
footerOverlayDiv.style.backgroundColor = '#f7f7f7';
footerOverlayDiv.style.border = '1px solid #e4e4e4';
footerOverlayDiv.style.position = 'fixed';
footerOverlayDiv.style.bottom = '-120px';
footerOverlayDiv.style.borderRadius = '2px';
footerOverlayDiv.style.transition = 'all 0.5s ease-in';
footerOverlayDiv.style.WebkitTransition = 'all 0.5s ease-in';
footerOverlayDiv.style.MozTransition = 'all 0.5s ease-in';
footerOverlayDiv.style.OTransition = 'all 0.5s ease-in';
footerOverlayDiv.style.MsTransition = 'all 0.5s ease-in';
footerOverlayDiv.style.textAlign = 'center';
footerOverlayDiv.style.zIndex = '99999999999999999999999';

// Assigning attributes to the 'Close button'
closeButton.id = 'closeButton';
closeButton.innerHTML = 'X';
closeButton.style.color = 'rgba(0,0,0,0.3)';
closeButton.style.padding = '4px 12px';
closeButton.style.backgroundColor = '#F7F7F7';
closeButton.style.border = '1px solid #e4e4e4';
closeButton.style.position = 'absolute';
closeButton.style.top = '-30px';
closeButton.style.right = '4px';
closeButton.style.borderRadius = '2px 2px 0 0';
closeButton.style.textAlign = 'center';
closeButton.style.zIndex = '999999';
closeButton.style.cursor = 'pointer';
footerOverlayDiv.appendChild(closeButton);

// Assigning attributes to the 'Center line'
centerLine.id = 'centerLine';
centerLine.style.backgroundColor = 'rgba(0,0,0,0.3)';
centerLine.style.position = 'absolute';
centerLine.style.top = '50%';
centerLine.style.left = '3%';
centerLine.style.width = '94%';
centerLine.style.height = '1px';
footerOverlayDiv.appendChild(centerLine);

// Creating links from the linkTitles Object
for (i = 0; i < LINK_COUNT; i++) {
    var textNodesSpan = document.createElement('span');
    var textNodesAnchor = document.createElement('a');
    textNodesSpan.innerHTML = Object.keys(linkTitles)[i];
    textNodesSpan.className = 'footerLink link' + i;
    textNodesSpan.style.margin = '0';
    textNodesSpan.style.padding = '8px 0';
    textNodesSpan.style.position = 'relative';
    textNodesSpan.style.fontSize = '13px';
    textNodesSpan.style.cursor = 'pointer';
    textNodesSpan.style.color = 'rgba(0,0,0,0.3)';
    textNodesSpan.style.display = 'inline-block';
    textNodesSpan.style.width = '33%';
    textNodesSpan.style.marginBottom = '7px';
    textNodesAnchor.setAttribute('href', Object.values(linkTitles)[i]);
    textNodesAnchor.style.textDecoration = 'none';
    textNodesAnchor.appendChild(textNodesSpan);
    footerOverlayDiv.appendChild(textNodesAnchor);

    // 2x3 layout OR 2x2 layout
    if (LINK_COUNT == 5 && i == 0) {
        textNodesSpan.style.width = '35%';
    } else if (LINK_COUNT == 4) {
        textNodesSpan.style.width = '50%';
    } else if (LINK_COUNT < 4) {
        footerOverlayDiv.style.height = '33px';
        centerLine.style.display = 'none';
    }

    // DESKTOP
    if (document.getElementsByTagName('body')[0].offsetWidth > 766) {
        // span styles
        textNodesSpan.style.width = '15%';
        textNodesSpan.style.marginTop = '3px';
        textNodesSpan.style.width = '11%';
        // parent div styles
        footerOverlayDiv.style.height = '33px';
        // center line style
        centerLine.style.display = 'none';
        // close button styles
        closeButton.style.top = '10px';
        closeButton.style.border = 'none';
        closeButton.style.fontSize = '15px';

        // more compact view
        if (LINK_COUNT > 4) {
            textNodesSpan.style.width = '11%';
        }

    }
}

// Appending everything to body
body.appendChild(footerOverlayDiv);

// closing the overlay
closeButton.onclick = function() {
    footerOverlayDiv.style.display = 'none';
};

//  Catching items that interacts with viewpoint
function callback(intersectionEvent, b, c, state) {
    if ((state == 1) && (intersectionEvent.boundingClientRect.top > 0)) {
        footerOverlayDiv.style.bottom = '0';
    }

    if ((state == 3) && (intersectionEvent.boundingClientRect.top > 0)) {
        footerOverlayDiv.style.bottom = '-138px';
    }
}

TRC.intersections.isInViewPort(targetElement, callback);