const app = Vue.createApp({
    data() {
        return {
            enteredName: "",
            enteredAge: 0,            
            image: "https://www.w3schools.com/w3images/lights.jpg",
            goals: []
        };
    },
    methods: {
        addName() {
            this.goals.push(this.enteredName);
            this.enteredValue = "";
        }, 
        addAge() {
            return this.enteredAge + 5;
        },
        addRandom() {
            let randomNumber = Math.random(1);
            return randomNumber.toFixed(2);
        },
        addImage() {
            return this.image;
        }   
    }
});
app.mount("#assignment");