function projectsCreation(input){
    let architectName = input[0];
    let numberOfProjects = Number(input[1]);
    let needHours = Number(numberOfProjects*3);
    console.log(`The architect ${architectName} will need ${needHours} hours to complete ${numberOfProjects} project/s.`);
}
projectsCreation(["George ",
"4.5 "]);