<template>
    <div class="grid-container">

        
        <div class="block1">
        <h1>Get In Touch</h1>
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
  <button type="submit">Send</button>
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
.cont1 {

}
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Equal columns */
  /* gap: 20px;  */
  height: 80vh;
  padding-top: 0;
 
}

.block1 , .block2 {
    z-index:1;
    margin-top: 15%;
    height: 100%;
    padding:20px;
    display: flex;
    /* justify-content: center; */
    border: 2px solid rgb(0, 229, 255);
    border-radius: 10px;
}
.block1 {
color:black;
display: grid;
background-color: aqua;
/* display: flex; */
}
    .block2 {
        color:white;
        display: flex;
        justify-content: center;
        padding-top: 23%;
    }
    input, textarea {
        width: 500px;
        border-radius: 5px;
    }
    textarea {
        height :50px;
        border-radius: 15px;
    }
</style>