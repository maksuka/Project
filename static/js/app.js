$(window).on('load', function() {
    $(function(){
        $('.slider').slick();
        $('.current-good-slider').slick();
    });
});

$('document').ready(function() {
    $("input[name=phone]").inputmask("+375(99)999-9999");
});

window.addEventListener('DOMContentLoaded', () => {
    // let cardTitle = document.querySelector('.card__title');
    // let cardText = document.querySelector('.card__text');

    // console.log(cardTitle.textContent.length);

    // function del(elem) {
    //     if(elem.textContent.length > 20) {
    //         elem.textContent = `${elem.textContent.substring(0, 20)}...`;
    //         console.log(elem.textContent);
    //     }
    // }

    // del(cardTitle);
    // del(cardText);

    window.addEventListener('unload', () => {
        document.documentElement.scrollTop = 0;
    });

    /* MODAL */
    let orderButton = document.querySelector('.good__button');
    let modal = document.querySelector('.modal');
    let modalCloseBtn = document.querySelector('.modal__close');
    let modalInputs = document.querySelectorAll('.modal__input');
    let modalSubmit = document.querySelector('.modal__button');

    const openModal = () => {
        modal.classList.remove('hide');
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        modalInputs.forEach((input) => {
            input.value = '';
            input.style.border = 'none';
        });
    };
    
    const closeModal = () => {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = 'auto';
    };

    orderButton.addEventListener('click', () => {
        openModal();
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show') ) {
            closeModal();
        }
    });
    
    modalCloseBtn.addEventListener('click', () => {
        closeModal();
    });

    let regFIO = /([а-яё]+|[a-z]+[\-\s]?){3,}/;
    let regPhone = /\+\d{3}\(\d{2}\)\d{3}-\d{4}/;
    let regAddress = /^(?!\s*$)[-\/'"№., 0-9а-яА-Я, a-z, A-Z]+$/;
    let regIndex = /^\d{6}$/;
    let regEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;


    function validated () {
            let i = 0;
            if(!regFIO.test(modalInputs[0].value) || modalInputs[0].value.length >= 30) {
                modalInputs[0].style.border = '1px solid red';
            } else if(regFIO.test(modalInputs[0].value)) {
                i++;
                modalInputs[0].style.border = '1px solid #fff';
            }
            if(!regPhone.test(modalInputs[1].value)) {
                modalInputs[1].style.border = '1px solid red';
            } else if(regPhone.test(modalInputs[1].value)) {
                i++;
                modalInputs[1].style.border = '1px solid #fff';
            }
            if(!regAddress.test(modalInputs[2].value) || modalInputs[2].value.length >= 30) {
                modalInputs[2].style.border = '1px solid red';
            } else if(regAddress.test(modalInputs[2].value)) {
                i++;
                modalInputs[2].style.border = '1px solid #fff';
            }
            if(!regIndex.test(modalInputs[3].value)) {
                modalInputs[3].style.border = '1px solid red';
            } else if(regIndex.test(modalInputs[3].value)) {
                i++;
                modalInputs[3].style.border = '1px solid #fff';
            } 
            if(!regEmail.test(modalInputs[4].value)) {
                modalInputs[4].style.border = '1px solid red';
            } else if(regEmail.test(modalInputs[4].value)) {
                i++;
                modalInputs[4].style.border = '1px solid #fff';
            } 
            if(i == 5){
                document.querySelector('.modal__form').submit();
            }
    }

    modalSubmit.addEventListener('click', (e) => {
        e.preventDefault();

        if (modalInputs[0].value == '' || modalInputs[1].value == '' || modalInputs[2].value == ''|| modalInputs[3].value == '' || modalInputs[4].value == '') {
            e.preventDefault();
            // modalInputs.forEach((input) => {
            //     input.style.border = '1px solid red';
            // });
            for(i=0; i < modalInputs.length - 1; i++) {
                modalInputs[i].style.border = '1px solid red';
            }
            validated();
        }
        else {
            validated();
        }
    });
});
