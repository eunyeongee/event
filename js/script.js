const page = document.getElementById('page');
const invitation = document.getElementById('invitation');
const toggleBtn = document.getElementById('toggleBtn');
const controls = document.getElementById('controls');
const contents = document.getElementById('contents');

function updateButton() {
    if (page.classList.contains('open')) {
        contents.classList.add('show');
        invitation.parentElement.classList.add('open');
        invitation.classList.add('open');
        toggleBtn.textContent = 'Close';
    } else {
        contents.classList.remove('show');
        invitation.parentElement.classList.remove('open');
        invitation.classList.remove('open');
        toggleBtn.textContent = 'Open';
    }
}

toggleBtn.addEventListener('click', () => {
    page.classList.toggle('open');
    updateButton();
});

// 초대장 클릭으로 열고 닫기
page.addEventListener('click', () => {
    page.classList.toggle('open');
    updateButton();
});

// 초기 상태 설정
updateButton();

window.addEventListener('load', () => {
    setTimeout(() => {
        page.classList.add('open');
        updateButton();
    }, 14500);
});