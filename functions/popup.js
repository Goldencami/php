// display popup
export function errorPopup(err) {
    let popuphtml = '<div class="container" id="edit-container">';
    popuphtml += `<p>${err}</p>`;
    popuphtml += '</div>';

    popuphtml += '<div class="container" id="btnContainer">';
    popuphtml += '<button type="button" id="closeBtn" class="btn btn-light">Close</button>';
    popuphtml += '</div>';

    popup.innerHTML += popuphtml;
    modal.style.display = 'block';
}