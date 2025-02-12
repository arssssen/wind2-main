const modals = () => {
    function bindModal(btnSelector, modalSelector, closeSelector, isCloseOverlay=true) {
        const btn = document.querySelectorAll(btnSelector);
        const modal = document.querySelector(modalSelector);
        const close = document.querySelector(closeSelector);
        
        btn.forEach(item => {
            item.addEventListener('click', () => {
                modal.style.display = 'block'
               
            })
           
        });
       
        close.addEventListener('click', () => {
            modal.style.display = 'none';
        });


        if (isCloseOverlay){
        modal.addEventListener('click', (e) => {
            if(e.target === modal) {
                modal.style.display = 'none';
            }
            if(e.target === modal) {
                modal.style.display = 'none';
            }
        });

        }
    }

    function showAfterOneMinute(){
        setTimeout(()=>{
            document.querySelector('.popup').style.display="block"
        }, 10000)
    }
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close',false);
    bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close');
    // showAfterOneMinute();
}

export default modals;