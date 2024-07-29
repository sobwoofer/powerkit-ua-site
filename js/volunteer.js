init();

function handleContactUsPage(contactsContent, buttons, containerWrapp) {
    const hideActiveButtons = () => {
        if (!buttons) {
            console.error('Buttons is not defined or not an array');
            return;
        }

        buttons.forEach((button) => {
            button.classList.remove('active')
        });
    };

    const showCurrentButton = (button) => {
        if (!button) {
            console.error('Button is not defined');
            return;
        }

        button.classList.add('active');
    };

    const showContent = (button) => {
        if (!button) {
            console.error('Button or paymentFormsContainer is not defined');
            return;
        }

        const btnType = button.getAttribute('data-btn-type');

        containerWrapp.querySelectorAll('.active').forEach((element) => {
            element.classList.remove('active')
        });

        const contentToActivate = containerWrapp.querySelector(`[data-content-type=${btnType}]`);

        if (contentToActivate) {
            contentToActivate.classList.add('active');
        } else {
            console.error(`No content found for button type: ${btnType}`);
        }
    };

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            hideActiveButtons();
            showCurrentButton(button);
            showContent(button);
        });
    });
}

function init() {
    const contactsContent = document.querySelector('.volunteer__content');
    const buttons = document.querySelectorAll('.volunteer__btns-switch-item');
    const contactsWrapp = document.querySelector('.volunteer__wrapp');

    handleContactUsPage(contactsContent, buttons, contactsWrapp);
}

