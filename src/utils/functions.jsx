export function getComputerTeam(countries, userTeam){
    const availableTeams = countries.filter(country => country.name !== userTeam);
    const randomIndex = Math.floor(Math.random() * availableTeams.length);
    return availableTeams[randomIndex];
}