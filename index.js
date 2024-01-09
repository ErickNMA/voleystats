document.getElementById('txtfiletoread').addEventListener('change', function() {
    var file = new FileReader();
    file.onload = () => {
        document.getElementById('filecontents').textContent = file.result[2];
    }
    file.readAsText(this.files[0]);
});