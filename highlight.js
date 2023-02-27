AFRAME.registerComponent('cursor-listener', {
    schema:{
        selectedItemId: {default: '', type: 'string'}
    },

    init: function(){
        this.handleMouseEnterEvents();
        this.handleMouseLeaveEvents();
    },

    handlePlacesListState: function(){
        const id = this.el.getAttribute('id');
        const comicsId = ['superman','spiderman','captain-america','outer-space'];
        if(comicsId.includes(id)){
            const placeContainer = document.querySelector('#places-container');
            placeContainer.setAttribute('cursor-listener',{
                selectedItemId: id
            })

            this.el.setAttribute('material',{
                color: 'green',
                opacity: '1'
            })
        }
    },

    handleMouseEnterEvents: function(){
        this.el.addEventListener('mouseenter', ()=>{
            const id = this.el.setAttribute("id");
            const postersId = [
                "superman",
                "spiderman",
                "captain-america",
                "outer-space"
            ];
            if (postersId.includes(id)){
                const postersContainer = document.querySelector("#posters-container");
                postersContainer.setAttribute("cursor-listener", {
                    selectedItemId: id,
                });
                this.el.setAttribute("material", {color: "#1565c0"})
            }
        });
    },

    handleMouseLeaveEvents: function(){
        this.el.addEventListener('mouseleave', ()=>{
            const {selectedItemId} = this.data;
            if (selectedItemId){
                const el = document.querySelector(`#${selectedItemId}`);
                const id = el.getAttribute('id');
                if (id == selectedItemId){
                    el.setAttribute('material',{
                        color: 'blue',
                        opacity: 1
                })
            }
            }
        })
    }
})