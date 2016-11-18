function validate() {
    let validator = (function () {
        function changeApperance(elementSelector, valid) {
            if (valid) {
                elementSelector.css('border', 'none');
            } else {
                elementSelector.css('border-color', 'red');
            }
        }

        let isValid = true;

        return {
            companyCBChange: () => {
                if ($('#company').is(':checked')) {
                    $('#companyInfo').show();
                } else {
                    $('#companyInfo').hide();
                }
            },
            userNameValidator: () => {
                if ($('#username').val().match(/^[A-Za-z0-9]{3,20}$/)) {
                    changeApperance($('#username'), true);
                } else {
                    changeApperance($('#username'), false);
                    isValid = false;
                }
            },
            passwordValidator: () => {
                if ($('#password').val().match(/^[A-Za-z0-9_]{5,15}$/)) {
                    changeApperance($('#password'), true);
                } else {
                    changeApperance($('#password'), false);
                    isValid = false;
                }
            },
            confirmPasswordValidator: () => {
                if ($('#confirm-password').val().match(/^[A-Za-z0-9_]{5,15}$/) &&
                    $('#confirm-password').val() === $('#password').val()) {
                    changeApperance($('#confirm-password'), true);
                } else {
                    changeApperance($('#confirm-password'), false);
                    isValid = false;
                }
            },
            emailValidator: () => {
                if ($('#email').val().match(/^.*?@.*\..*$/)) {
                    changeApperance($('#email'), true);
                } else {
                    changeApperance($('#email'), false);
                    isValid = false;
                }
            },
            companyNumCheck: () => {
                let value = Number($('#companyNumber').val());
                if (value >= 1000 && value <= 9999) {
                    changeApperance($('#companyNumber'), true);
                } else {
                    changeApperance($('#companyNumber'), false);
                    isValid = false;
                }
            },
            restartValidState: () => {
                isValid = true;
            },
            getValidity: () => {
                return isValid;
            }
        }
    })();

    $('#company').on('change', validator.companyCBChange);
    $('#submit').on('click', (ev) => {
        validator.restartValidState();
        validator.userNameValidator();
        validator.passwordValidator();
        validator.confirmPasswordValidator();
        validator.emailValidator();
        if ($('#company').is(':checked')) {
            validator.companyNumCheck();
        }
        if (validator.getValidity()) {
            $('#valid').show();
        } else {
            $('#valid').hide();
        }
        ev.preventDefault();
    });
}
