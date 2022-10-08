// skill-row-bottom skill-row-bottom-open

const skillRows = document.querySelectorAll('.skill-row');
let openSkillIndex = -1;

const openSkill = (id) => {
  skillRows.forEach((item) => item.classList.remove('skill-row-open'));
  if(openSkillIndex !== id){
    skillRows[id].classList.add('skill-row-open');
    openSkillIndex = id;
  } else {
    openSkillIndex = -1;

  }
}