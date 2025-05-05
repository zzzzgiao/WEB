// 纪念日计算器
document.querySelector('#pet-birthday').addEventListener('change', function() {
  const today = new Date();
  const birthday = new Date(this.value);
  const days = Math.floor((today - birthday) / (1000*60*60*24));
  document.querySelector('#memorial-days').textContent = `${days}个相伴的日子`;
});

// 爪印上传预览
document.querySelector('#paw-upload').addEventListener('change', function(e) {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.onload = function(event) {
    document.querySelector('#paw-preview').src = event.target.result;
  };
  reader.readAsDataURL(file);
});
