<template>
    <div class="grid-container">

        
        <div class="block1">
        <h1>Let's Get In Touch</h1>
        <div class="cont1">
            <h4>Location</h4><br>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26459.246873359192!2d18.717228735826403!3d-34.00779168307533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc4c72e0a04329%3A0xabdf7b629da0f451!2sEerste%20River%2C%20Cape%20Town%2C%207100!5e0!3m2!1sen!2sza!4v1711819542585!5m2!1sen!2sza" width="250" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe><br>
        </div>
        <div class="cont2">
            <h4>Phone Number:</h4>
            <p>{{num}}</p><br>
        <h4>Email address:</h4>
            <p>{{ email }}</p>
        </div> 
    </div>

    <div class="block2">
        <div>
        <h1>Message me here</h1>
        </div><br>
        <form
  action="https://formspree.io/f/xyyrndly"
  method="POST"
>
<label>
    Your firstname:
</label><br>
<input type="firstname" name="firstname">
  <label><br>
    Your lastname:
</label><br>
<input type="lastname" name="lastname">
  <label><br>
    Your email:
</label><br>
<input type="email" name="email">
  <label><br>
    Your message:
</label><br>
<textarea name="message"></textarea><br>
  <!-- your other form fields go here -->
  <button class="send" type="submit">Send</button>
</form>
</div>

</div>
</template>
<script>
export default {
    data() {
        return {
            num: "067 066 0615",
            email: "jasonseptember.za@gmail.com"
        }
    }
}
</script>
<style>
.send {
    border-radius: 7px;
    padding: 4px;
}
.send:hover {
    box-shadow: rgb(79, 78, 78) 1px 0px 0px 1px;
    background-color: rgb(0, 0, 0);
    color: white;
}
/* .cont1 {

} */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Equal columns */
  /* gap: 20px;  */
  height: 80vh;
  /* padding-top: 0; */
  padding-bottom: 4%;
  margin-bottom: 12%;
 
}

.block1 , .block2 {
    z-index:1;

    margin-top: 21%;
    height: 90%;
    padding:20px;
    display: flex;
    /* justify-content: center; */
    border: 2px solid rgb(0, 229, 255);
    border-radius: 10px;
    box-shadow: #090606 2px 5px 40px;
}
.block1 {
color:white;
display: grid;
/* background-color: aqua; */
backdrop-filter: blur(14px); 
background-color: rgba(255, 255, 255, 0.3); 
/* display: flex; */
margin-right: 8%;
}
    .block2 {
        color:white;
        display: grid;
        justify-content: center;
        padding-top: 17%;
    }
    input, textarea {
        width: 500px;
        border-radius: 5px;
    }
    textarea {
        height :100px;
        border-radius: 15px;
    }
    input {
        height : 40px;
    }

@media screen and (max-width: 390px) {
        
         .block1 {
            font-size: 10px;
            height: 20rem;
         }
         .block2 {
            padding-top: 6%;
            font-size: 15px;
            height: 20rem;
            padding-bottom: 2%;
         }
        input {
            width: 150px;
            height: 20px;
        }
        textarea {
        width: 150px;
        height: 40px;
        }
        .grid-container {
            justify-content: center;
            display: flex;
            flex-wrap: wrap;
        }
    }
</style>