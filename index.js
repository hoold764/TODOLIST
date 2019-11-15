var todolist = new Vue({
    el:'#todolist',
    data:{
        todolist:[],
        text:''
    },
    methods:{
        addtodolist(){
            if(this.text==''){
                return false;
            }
            this.todolist.push(this.text);
            this.text='';
        },
        finishtodolist(index){
            this.$refs.hot[index].style.textDecoration = "line-through";
            this.$refs.hot[index].style.color = "#ccc";
        },
        deltodolist(index){
            this.todolist.splice(index,1);
        }
    }
})