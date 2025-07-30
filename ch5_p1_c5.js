// In our final task, you will process space exploration crew members' data for command assignments! You have been given a string of crew details separated by semicolons. Your mission is to split, clean, and display each member's information correctly. Let's get those crew details ready for launch!


// Space exploration crew members' data, containing their names, missions, and roles
let crewData = "Neil,Armstrong,Apollo 11,C;Buzz,Aldrin,Apollo 11,P;Michael,Collins,Apollo 11,CM";

// TODO: Split the crewData string into a list of individual crew member information using the appropriate delimiter
 let crewDataIndividual = crewData.split(";");
 
// TODO: Iterate over the list of crew member data
         crewDataIndividual.forEach(crewDataIndividual =>{
            
            const [fname , lname, machine, model] = crewDataIndividual.split(",");
            result = `${fname} ${lname} ${machine} ${model}`;
            console.log(result);
        
    // TODO: For each member, split their data string using commas as delimiters
    
    // TODO: Print the crew member's details in a formatted string
 });
// Expected output:
// Neil Armstrong Apollo 11 C
// Buzz Aldrin Apollo 11 P
// Michael Collins Apollo 11 CM