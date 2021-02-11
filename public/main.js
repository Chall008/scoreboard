let team1Total = 0
let team2Total = 0

function updateTeamName1() {
  const teamName1 = document.querySelector('input.Name1').value
  document.querySelector('h2.Team1Name').textContent = teamName1
  console.log(teamName1)
}
function updateTeamName2() {
  const teamName2 = document.querySelector('input.Name2').value
  document.querySelector('h2.Team2Name').textContent = teamName2
  console.log(teamName2)
}

function teamOnePositiveScore() {
  if (team1Total >= 21) {
    const team1Winner = document.querySelector('input.Name1').value
    window.alert(`${team1Winner} you won!!`)
    return
  }
  team1Total += 1

  document.querySelector('h3.team1Score').textContent = team1Total
}
function teamOneSubtractScore() {
  if (team1Total > 0) team1Total -= 1
  document.querySelector('h3.team1Score').textContent = team1Total
}

function teamTwoPositiveScore() {
  if (team2Total >= 21) {
    const team2Winner = document.querySelector('input.Name2').value
    window.alert(`Congrats, ${team2Winner} you won!!!!!!`)
    return
  }
  team2Total += 1
  document.querySelector('h3.team2Score').textContent = team2Total
}
function teamTwoSubtractScore() {
  if (team2Total > 0) {
    team2Total -= 1
  }
  document.querySelector('h3.team2Score').textContent = team2Total
}

function reset() {
  location.reload(true)
}

function main() {
  if (document.querySelector('h3.team1Score')) {
    document.querySelector('h3.team1Score').textContent = 0
  }
  if (document.querySelector('h3.team2Score')) {
    document.querySelector('h3.team2Score').textContent = 0
  }

  if (document.querySelector('h2.Team1Name')) {
    document.querySelector('h2.Team1Name').textContent = 'Team 1'
  }
  if (document.querySelector('h2.Team2Name')) {
    document.querySelector('h2.Team2Name').textContent = 'Team 2'
  }
  document
    .querySelector('button.update-Team1')
    .addEventListener('click', updateTeamName1)
  document
    .querySelector('button.update-Team2')
    .addEventListener('click', updateTeamName2)

  document
    .querySelector('.team1 .add')
    .addEventListener('click', teamOnePositiveScore)
  document
    .querySelector('.team1 .subtract')
    .addEventListener('click', teamOneSubtractScore)
  document
    .querySelector('.team2 .add')
    .addEventListener('click', teamTwoPositiveScore)
  document
    .querySelector('.team2 .subtract')
    .addEventListener('click', teamTwoSubtractScore)

  const resetButton = document
    .querySelector('#Reset')
    .addEventListener('click', reset)
}

document.addEventListener('DOMContentLoaded', main)
