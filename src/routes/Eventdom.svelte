<script lang="ts">
	import Innerevent from "./Innerevent.svelte";


  function eyesPosition(id: string, event: MouseEvent) {
    let eye = document.getElementById(id)?.getBoundingClientRect() 
        ?? document.createElement('div').getBoundingClientRect();

    let x = (event.clientX - eye.left - 20);
    let y = (event.clientY - eye.top - 20);

    if (Math.abs(x) > 20) {
      x = x/Math.abs(x) * 20
    }

   if (Math.abs(y) > 20) {
      y = y/Math.abs(y) * 20
    }

    return [x + 15, y + 25];
  }

  let eye1 = [0, 0];
  let eye2 = [0, 0];

  let moveyes = (event: MouseEvent) => {
    console.log("Eye 1");
    eye1 = eyesPosition("eyeone", event);
    console.log("Eye2");
    eye2 = eyesPosition("eyetwo", event);

    eye1 = [eye1[0] + 1/3 * eye2[0], eye1[1]]
    eye2 = [eye2[0] + 1/3 * eye1[0], eye2[1]]
    // console.log(eye1, ", ", eye2)
  }

  let num = 0;
  // disble

  // Handle handleMessage
  function handleMessage(event: any) {
    alert(event.detail.text)
  } 
</script>

<style>
  #face, .box {
    border: solid 1px plum;
    height: 200px;
    width: 200px;
    border-radius: 16px;
    position: relative;
  }

  #eyeone, #eyetwo {
    height: 65px;
    width: 65px;
    position: absolute;
    border: solid 2px cyan;
    top: 35px;
    background-color: white;
    box-sizing: border-box;
    overflow: hidden;
  }

  #eyeone {
    left: 30px;
  }

  #eyeone > div, #eyetwo > div {
    height: 10px;
    width: 10px;
    background-color: black;
    position: absolute;
    left: 0px;
    top: 0px;
  }

  #eyetwo {
    right: 30px;
  }

  .mouth {
    width: 80px;
    height: 10px;
    background-color: white;
    left: 80px;
    top: 150px;
  }

  .title {
    font-size: 1.2em;
    font-weight: bold;
    color: #b554ff;
  }

  .cont {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
  }

  button {
    background: transparent;
    border: 1px solid #b554ff;
    color: white;
    padding: 0.5em 1.2em;
    border-radius: 8px;
    font-size: 1.2em;
    color: #b554ff;
  }
</style>
<div class="cont">
  <span class="title">Events DOM</span>

  <div on:pointermove={moveyes} id="face">
    <div id="eyeone" class="box">
      <div class="box" style="left: {eye1[0]}px; top: {eye1[1]}px;"></div>
    </div>
    <div id="eyetwo" class="box">
      <div class="box" style="left: {eye2[0]}px; top: {eye2[1]}px;"></div>
    </div>
    <div class="mouth box"></div>
  </div>

  <button on:click|once={() => num += 1}>Click me {num}</button>
  <Innerevent on:message={handleMessage}/>
</div>

