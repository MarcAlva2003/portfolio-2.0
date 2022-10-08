// skill-row-bottom skill-row-bottom-open

const skillRows = document.querySelectorAll('.skill-row');
const skillDesc = document.querySelectorAll('.skill-description');
const skillText = document.querySelectorAll('.skill-row-bottom')


// let openSkillIndex = -1;
// const openSkill = (id) => {
//   skillRows.forEach((item) => item.classList.remove('skill-row-open'));
//   skillText.forEach((item) => {item.style["height"] = "0"})
//   if(openSkillIndex !== id){
//     skillText[id].style["height"] = `${skillDesc[id].offsetHeight + 20}px`
//     openSkillIndex = id;
//   } else {
//     openSkillIndex = -1;
//   }
// }

let skillsOpen = [];

const openSkill = (id) => {
  if(!skillsOpen.includes(id)){
    skillRows[id].classList.add('skill-row-open');
    skillText[id].style["height"] = `${skillDesc[id].offsetHeight + 20}px`
    skillsOpen.push(id);
  } else {
    skillRows[id].classList.remove('skill-row-open');
    skillText[id].style["height"] = `0`
    skillsOpen = skillsOpen.filter(i => i !== id);
  }
}