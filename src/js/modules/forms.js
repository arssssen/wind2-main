const forms = (data) => {
    const input = document.querySelectorAll('.popup_calc_content input.form-control');

    input.forEach((item)=>{
                
            item.onkeydown = (event) => {
                if(isNaN(event.key) && event.key !== 'Backspace') {
                    event.preventDefault();
                }
            };
    });

    const width = document.querySelectorAll('#width'),
    height = document.querySelectorAll('#height'),
    viewType = document.querySelectorAll('#view_type'),
    checkbox = document.querySelectorAll('.checkbox'),
    balconImg = document.querySelectorAll('.balcon_icons_img');

    function bindActions(event, element, key){
        element.forEach((elem, i ) => {
            elem.addEventListener(event, () =>{
                switch(elem.nodeName){

                    case 'SELECT' :
                        data[key] = elem.value
                        break;
                    case 'SPAN': 
                        data[key]= 'Тип_'+ i
                        
                        break;

                    case 'INPUT':
                        if (elem.type === 'checkbox') {
                            data[key] = elem.checked ? (i === 0 ? "Холодное" : "Теплое") : "";

                            element.forEach((chk, x) => {
                                chk.checked = false;
                            });
                            elem.checked = true;
                        } else {
                            data[key] = elem.value;
                        }
                        break;
                }
    console.log(data);

            })

        })
    }
    bindActions('input', width, 'width')
    bindActions('input', height, 'height')
    bindActions('change', viewType, 'view-type')
    bindActions('change', checkbox, 'checkbox')
    bindActions('click', balconImg, 'type')
    
}

export default forms;