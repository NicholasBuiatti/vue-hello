const { createApp } = Vue

createApp({
    data() {
        return {
            message: `Benvenuto in Vue! l'inizio di un nuovo mondo`,
            nigthMode: '',
            txtColorSize: 'text-primary text-center',
            pic: './img/img-1.jpg',
            sizeImg: 'w-75',
            position: 'text-center'
        }
    },
    methods: {
        switchMode() {
            if (this.nigthMode == "") {
                this.nigthMode = "vh-100 bg-dark";
                this.txtColorSize = 'text-danger text-center';
            } else {
                this.nigthMode = "";
                this.txtColorSize = 'text-primary text-center';
            }
        },
        
    }
}).mount('#app')