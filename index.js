html = `
<div class="container">    
<img src="mysticat.gif">
<p>Transforme sua voz em texto</p>
<textarea id="textarea"></textarea>
<div class="options">
<button id="btnGravar"> <i class="bi bi-mic"></i> </button>
<button id="btnParar"> <i class="bi bi-mic-mute"></i> </button>
<button id="btnBaixar"> <i class="bi bi-download"></i> </button>
<button id="btnLimpar"> <i class="bi bi-trash"></i> </button>
</div>
</div>
`;

document.getElementById("app").innerHTML = html;
