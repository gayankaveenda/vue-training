const app = Vue.createApp({
    data() {
        return {
            enteredName: "",
            enteredAge: 0,
            ageInFiveYrs: 0,
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
            this.ageInFiveYrs = Number(this.enteredAge) + 5;
            return this.ageInFiveYrs;
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