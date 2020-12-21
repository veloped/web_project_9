export default class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._popupElement.classList.add('popup_opened');
        document.addEventListener("keydown", this._handleEscClose);
    }

    
    close() {
        this._popupElement.classList.remove('popup_opened');
        document.removeEventListener("keydown", this._handleEscClose);

    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }

    }

    setEventListeners() {
        this._popupElement.addEventListener("click", (e) => {
            if(((e.target < this._popupElement.querySelector(".form")) || (e.target < this._popupElement.querySelector(".popup__content"))) && (e.target !== this._popupElement.querySelector('.form__button'))  ) {
                this.close();
            }
        })
    }
}

