function write()
{
var write = document.getElementById('Write');
var typewriter = new Typewriter(write, {
    loop: true});
typewriter.typeString('HEY EVERYONE!!')
    .pauseFor(2500)
    .deleteAll()
    .pauseFor(2500)
    .typeString('I AM A <strong><font color="red">STUDENT.</font></strong>')
    .pauseFor(2500)
    .deleteChars(8)
    .typeString('<strong>LEARNER.</strong>')
    .start();    
}