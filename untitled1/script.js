// 获取所有元素
const avatar = document.getElementById('avatar');
const avatarUpload = document.getElementById('avatar-upload');
const changeAvatarBtn = document.getElementById('change-avatar-btn');

const nameDisplay = document.getElementById('name-display');
const nameInput = document.getElementById('name-input');
const editNameBtn = document.getElementById('edit-name-btn');

const bioDisplay = document.getElementById('bio-display');
const bioInput = document.getElementById('bio-input');
const editBioBtn = document.getElementById('edit-bio-btn');

const saveBtn = document.getElementById('save-btn');

// ==============================================
// 页面一打开，就从本地存储读取数据（刷新不丢失）
// ==============================================
window.addEventListener('load', function () {
    const savedName = localStorage.getItem('userName');
    const savedBio = localStorage.getItem('userBio');
    const savedAvatar = localStorage.getItem('userAvatar');

    if (savedName) {
        nameDisplay.textContent = savedName;
        nameInput.value = savedName;
    }
    if (savedBio) {
        bioDisplay.textContent = savedBio;
        bioInput.value = savedBio;
    }
    if (savedAvatar) {
        avatar.src = savedAvatar;
    }
});

// ==============================================
// 更换头像
// ==============================================
changeAvatarBtn.addEventListener('click', () => {
    avatarUpload.click();
});

avatarUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (ev) => {
            avatar.src = ev.target.result;
            localStorage.setItem('userAvatar', ev.target.result); // 保存头像
        };
        reader.readAsDataURL(file);
    }
});

// ==============================================
// 编辑姓名（点击自动清空）
// ==============================================
editNameBtn.addEventListener('click', () => {
    nameDisplay.hidden = true;
    nameInput.hidden = false;
    nameInput.value = ''; // 自动清空
    nameInput.focus();
});

// ==============================================
// 编辑简介（点击自动清空）
// ==============================================
editBioBtn.addEventListener('click', () => {
    bioDisplay.hidden = true;
    bioInput.hidden = false;
    bioInput.value = ''; // 自动清空
    bioInput.focus();
});

// ==============================================
// ✅ 保存（永久保存，刷新不丢）
// ==============================================
saveBtn.addEventListener('click', () => {
    // 保存姓名
    if (!nameInput.hidden && nameInput.value.trim() !== '') {
        const newName = nameInput.value.trim();
        nameDisplay.textContent = newName;
        localStorage.setItem('userName', newName); // 永久保存
    }

    // 保存简介
    if (!bioInput.hidden && bioInput.value.trim() !== '') {
        const newBio = bioInput.value.trim();
        bioDisplay.textContent = newBio;
        localStorage.setItem('userBio', newBio); // 永久保存
    }

    // 隐藏输入框，显示文字
    nameInput.hidden = true;
    nameDisplay.hidden = false;
    bioInput.hidden = true;
    bioDisplay.hidden = false;

    alert('保存成功！');
});
// 切换皮肤
const themeBtn = document.getElementById('theme-btn');

// 读取保存的主题
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
}

// 点击切换
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // 保存主题
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
// 卡片换色
const card = document.querySelector('.card');

document.getElementById('colorPink').onclick = () => {
  card.className = 'card pink';
};
document.getElementById('colorYellow').onclick = () => {
  card.className = 'card yellow';
};
document.getElementById('colorBlue').onclick = () => {
  card.className = 'card blue';
};
document.getElementById('colorWhite').onclick = () => {
  card.className = 'card white';
};