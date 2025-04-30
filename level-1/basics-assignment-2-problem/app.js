const app = Vue.createApp({
    data() {
        return {
            name: "enter your name",
            valueOnEnter: "",            
            image: "https://www.w3schools.com/w3images/lights.jpg",
            goals: []
        };
    },
    watch: {
        name(newValue, oldValue) {
            console.log("Watcher: User entered value changed from " + oldValue + " to " + newValue);
        },
        valueOnEnter(newValue, oldValue) {
            console.log("Watcher: User entered value on enter changed from " + oldValue + " to " + newValue);
        }
    },

    computed: {
        fullName() {
            if (this.name === "") {
                console.log("Computed: No name entered");
                return "No name entered";
            } else {
                console.log("Computed: Name entered: " + this.name);
                return this.name + " is the name entered";
            }
        },
        imageUrl() {
            console.log("Computed: Image URL: " + this.imageUrl);
            return this.image;
        }
    },
    methods: {
        showAlert() {
            alert("Hello");
        },
        showUserValue(event) {
            this.name = event.target.value;
        },
        showUserValueOnEnter(event) {
            this.valueOnEnter = event.target.value;
        }
    }
});
app.mount("#assignment");