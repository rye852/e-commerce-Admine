const bars = document.querySelector('.top-cont .bars');
const aside = document.querySelector('aside');
const body = document.body;
const remove = document.querySelector('aside .image .remove');
const theme = document.querySelector('.top-cont .mini-setting .toggle');
const bodyStyle = getComputedStyle(document.body);
const darkColor = bodyStyle.getPropertyValue('--color-dark');
const darkInfo = bodyStyle.getPropertyValue('--color-info-dark');
const lightInf = bodyStyle.getPropertyValue('--color-info-light');
const varDark = bodyStyle.getPropertyValue('--color-dark-var');
const primaryColor = bodyStyle.getPropertyValue('--color-primary-var');
let mood = localStorage.getItem('theme');
if (mood != null) {
  mood = mood.split(' ');
  console.log(mood);
  if (mood.includes('dark')) {
    document.documentElement.style.setProperty('--color-dark', `${varDark}`);
    document.documentElement.style.setProperty('--color-white', `#222`);
    document.documentElement.style.setProperty(
      '--color-info-dark',
      `${lightInf}`
    );
    document.documentElement.style.setProperty('--box-sha', ` 0 `);
    theme.classList.add('dark');
  }
}

body.onresize = () => {
  if (body.clientWidth > 992) {
    aside.style.transform = 'rotateY(0deg)';
  } else {
    aside.style.transform = 'rotateY(90deg)';
  }
};
bars.addEventListener('click', () => {
  aside.style.transform = 'rotateY(0deg)';
});
remove.addEventListener('click', () => {
  aside.style.transform = 'rotateY(90deg)';
});
theme.addEventListener('click', () => {
  if (theme.classList.contains('dark')) {
    document.documentElement.style.setProperty('--color-dark', `#363949`);
    document.documentElement.style.setProperty('--color-white', `#fff`);
    document.documentElement.style.setProperty('--color-info-dark', `#7d8da1`);
    document.documentElement.style.setProperty(
      '--box-sha',
      `0 2rem 3rem var(--color-light)`
    );
  } else {
    document.documentElement.style.setProperty('--color-dark', `${varDark}`);
    document.documentElement.style.setProperty('--color-white', `#222`);
    document.documentElement.style.setProperty(
      '--color-info-dark',
      `${lightInf}`
    );
    document.documentElement.style.setProperty('--box-sha', ` 0 `);
  }
  theme.classList.toggle('dark');
  localStorage.removeItem('theme');
  localStorage.setItem('theme', theme.classList);
});
