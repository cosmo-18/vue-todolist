var app = new Vue (
    {
        el: '#root',
        data: {
            todolist: [

                {  testo: 'comprare dischi',
                   done:false 
                    
                },
                {
                    testo:'controllare le puntine',
                    done:false 
                },

                {
                    testo:'ricorda di calibrare il giradischi',
                    done:false 
                }
            ],
            todoComplete: []
        },
        beforeupdate(){ 
            array.forEach(elem, index => {
                
                if( elem.done == true ){
                    this.todoComplete.push( elem );
                    this.todolist.splice( index,1 );
                  }
                
            });
    
        },
        methods:{

    
            rimuoviElemento(index, elem){
            
                if( elem.done == true ){
                  this.todoComplete.splice( index, 1 );
                } else {
                  this.todolist.splice( index, 1 );
                }
            },

            attivitàSvolte(index, elem) {

                if( elem.done == false ){
                    elem.done = true;
                  } else {
                    elem.done = false;
                  }
                
            }

        }
    })
